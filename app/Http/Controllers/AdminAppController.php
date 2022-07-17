<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminAppController extends Controller
{
    function index () {
        return view('layouts.admin');
    }
}
