<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
    public function dashboard()
    {
        if (Auth::check()) {
            return view('admin.dashboard');
    }
       return redirect('admin/login');
    }

    public function login()
    {
        return view('admin.login');
    }

    public function users()
    {
        $users = DB::table('users')->where('role','2')->get();
        return view('admin.users',compact('users'));
    }
    public function logout()
    {
        Auth::logout();
        return view('admin.login');
    }
    public function admin_login(Request $request)
    {
        // $request->validate([
        //     'email' => 'required|email',
        //     'password' => "required",
        // ]);

        $credentials = $request->only('email', 'password');
        if (Auth::attempt($credentials)) {
             if(Auth::user()->role == 1){
                return redirect()->intended('/admin');
             }else{
                return redirect()->back()->with([ 'emailnotfound' => 'Login Fail, please check email id']);
             }
        }
        $email = $request->input('email');
        $password = $request->input('password');

        $user = User::where('email', '=', $email)->first();
        if (!$user) {
           return  redirect()->back()->with(['success'=>false, 'email' => 'Login Fail, please check email id']);
        }
        if (!Hash::check($password, $user->password)) {
           return redirect()->back()->with('password', 'Login Fail, pls check password');
        }
    }


    public function Products()
    {
        $data = DB::table('products')->get();
        return view('admin.Products',compact('data'));
    }
    public function Products_add($id = null)
    {
        $categories = DB::table('categories')->get();
        $genders = DB::table('genders')->get();
        $types = DB::table('types')->get();
        $data = [];
        if(!empty($id)){
            $data = DB::table('products')->where('id', $id)->first();
        }
        return view('admin.Products_add',compact('data','categories','genders','types'));
    }
    public function Products_store(Request $request)
    {

        $array = [];
        $array['model_name'] = $request->model_name;
        $array['title'] = $request->title;
        $array['description'] = $request->description;
        $array['price'] = $request->price;
        $array['category_id'] = $request->category_id;
        // $array['gender_id'] = $request->gender_id;
        // $array['type_id'] = $request->type_id;
        if(!empty($request->image)){
            $imageName = time().'.'.$request->image->extension();
            $request->image->move(public_path('images/product'), $imageName);
            $array['image'] = $imageName;
        }
        if(!empty($request->id)){
            DB::table('products')->where('id', $request->id)->update($array);
        }else{
            $array['created_at'] = Carbon::now();
            $array['updated_at'] = Carbon::now();
            DB::table('products')->insert($array);
        }

        return redirect('admin/Products');
    }

    public function category()
    {
        $data = DB::table('categories')->get();
        return view('admin.category',compact('data'));
    }

    public function category_add($id = null)
    {
        $data = [];
        if(!empty($id)){
            $data = DB::table('categories')->where('id', $id)->first();
        }
        return view('admin.category_add',compact('data'));
    }

    public function category_store(Request $request)
    {
        $array = [];
        $array['brand'] = $request->brand;

        if(!empty($request->id)){
            DB::table('categories')->where('id', $request->id)->update($array);
        }else{
            $array['created_at'] = Carbon::now();
            $array['updated_at'] = Carbon::now();
            DB::table('categories')->insert($array);
        }

        return redirect('admin/category');
    }

    public function Products_remove($id)
    {
        DB::table('products')->where('id',$id)->delete();
       return redirect()->back();
    }
    public function category_remove($id)
    {
        DB::table('categories')->where('id',$id)->delete();
       return redirect()->back();
    }

    //=============orders============
    public function orders()
    {
        // $id = Auth::user()->id;
        $data = DB::table('order')->get();
        return view('admin.orders',compact('data'));
    }

    public function order_accept($id)
    {
        $status =['order_status'=>'Accept'];
       DB::table('order')->where('id',$id)->update($status);
       return redirect()->back();
    }
    public function order_complate($id = null)
    {
        $status =['order_status'=>'0','payment_status'=>'0'];
       DB::table('orders')->where('id',$id)->update($status);
       return redirect()->back();
    }
    public function order_complated()
    {
        $rawdata = DB::table('orders')->where('order_status', '0')
        ->select('products.*', 'orders.*')
        ->join('products', 'products.id', '=', 'orders.product_id');

    $data = $rawdata->get();
    // dd($data);
        return view('admin.ordersComplated',compact('data'));
    }


}
