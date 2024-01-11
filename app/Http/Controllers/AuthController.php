<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Socialite;
use App\Models\User;
use App\Http\Resources\UserResource;
use Auth;
use Illuminate\Http\Response;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $user = Socialite::driver('discord')->user();

        $authUser = User::updateOrCreate([
            'id' => $user->id,
            'name' => $user->name,
            'nickname' => $user->nickname,
            'email' => $user->email,
            'avatar' => $user->avatar,
            'locale' => $user->user['locale'],
            'refresh_token' => $user->refreshToken,
        ]);
    
        $token = $authUser->createToken('auth')->plainTextToken;
        Auth::login($authUser);

        return redirect('/dashboard?token=' . $token);

    }

    public function me(Request $request): Response
    {
        $user = $request->user();
        if (!$user) return response(null, Response::HTTP_UNAUTHORIZED);

        return response(new UserResource($request->user()), Response::HTTP_OK);
    }
}
