<?php

namespace App\Http\Controllers\Api\v1;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    function register(Request $request) {
        $request->validate(
            [
                'name' => ['required', 'max:150'],
                'email' => ['required', 'email', 'unique:users'],
                'password' => ['required', 'min:6'],
            ]
        );

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        return ['data' => $user];
    }

    function login(Request $request) {
        $request->validate(
            [
                'email' => ['required', 'email'],
                'password' => ['required', 'min:6'],
            ]
        );

        if(Auth::attempt($request->only('email', 'password'))){
            $user = Auth::user();
            $user->token = $user->createToken('App')->accessToken;
            return response()->json(Auth::user(), 200);
        }
        throw ValidationException::withMessages([
            'email' => ['Email hoặc mật khẩu không chính xác']
        ]);

    }

    function getUser(Request $request) {
        return response()->json($request->user('api'));
    }
}
