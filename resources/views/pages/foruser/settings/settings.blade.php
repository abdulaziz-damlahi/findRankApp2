@extends('layouts.master')
@section('content')
    <div id="contact_container" class="">
        <div id="settingsForm">
            <div class="menuy col-md-12">
                <ul class="nav nav-tabs nav-justified nav-dark push-20" data-toggle="tabs">
                    <li class="setting_button active" id="button_first">
                        <a class="setting_but"  href="#tab-profile-personal"><i class="si si-user push-5-r"></i><span class="hidden-xs">Kişisel Ayarlar</span></a>
                    </li>
                    <li class="setting_button" id="button_second">
                        <a class="setting_but"  href="#tab-profile-password"><i class="setting_but si si-lock push-5-r"></i><span class="hidden-xs">Şifre İşlemleri</span></a>
                    </li>
                    <li class="setting_button" id="button_third">
                        <a class="setting_but"  href="#customize"><i class="setting_but si si-wrench push-5-r"></i><span class="hidden-xs">Özelleştirme</span></a>
                    </li>
                </ul>
                @if($errors->any())
                    <div class="alert-danger">
                        <text> {{$errors->first()}}</text>
                    </div>
                @endif
                @if (\Session::has('success'))
                    <div class="alert alert-success">
                        <ul>
                            <li>{!! \Session::get('success') !!}</li>
                        </ul>
                    </div>
                @endif
                @if (\Session::has('error_password'))
                    <div class="alert alert-danger">
                        <ul>
                            <li>{!! \Session::get('error_password') !!}</li>
                        </ul>
                    </div>
                @endif
            </div>

                <form class="password_process" method="post" enctype="multipart/form-data" action="{{route('set.post')}}">
                @csrf
                <label class="col-md-6">
                    <p class="label-txt">FIRST NAME</p>
                    <input type="text" name="first_name" value="{{$user_first_name}}" class="input">
                    <div class="line-box">
                        <div class="line"></div>
                    </div>
                </label>   <label class="col-md-6">
                    <p class="label-txt">LAST NAME</p>
                    <input type="text"  name="last_name" value="{{$user_last_name}}" class="input">
                    <div class="line-box">
                        <div class="line"></div>
                    </div>
                </label>
            <label class="col-md-12">
                <p class="label-txt">EMAIL </p>
                <input type="text"name="mail"  value="{{$mail}}" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
            <label class="col-md-12">
                <p class="label-txt">PHONE NUMBER</p>
                <input type="text" name="phone"  value="{{$phone}}" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
            <button  class="btn btn-orange button_contact"id="button_contact"  type="submit">submit</button>
            </form>
            <form class="personal_settings"  method="post" enctype="multipart/form-data" action="{{route('personal.settings')}}">
             @csrf
                <label class="col-md-12">
                <p class="label-txt">ŞİMDİKİ ŞİFRE </p>
                <input name="password_now" type="text" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
            <label class="col-md-12">
                <p class="label-txt">YENİ ŞİFRE</p>
                <input name="new_password" type="text" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label> <label class="col-md-12">
                <p class="label-txt">YENİ ŞİFRE TEKRARI</p>
                <input name="new_password_confirmation" type="text" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
                <button  class="btn btn-orange button_contact"id="button_contact"  type="submit">submit</button>

            </form>
                <form class="custumize"  method="post" enctype="multipart/form-data" action="{{route('custumize')}}">
                    @csrf
            <label class="col-md-6">
                <p class="label-txt">Firma İsmi </p>
                <input name="company_name" type="text" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
            <label class="col-md-6">
                <p class="label-txt">Firma E-Posta Adresi</p>
                <input name="company_email" type="email" class="input">
                <div class="line-box">
                    <div class="line"></div>
                </div>
            </label>
                    <button class="btn btn-orange button_contact"id="button_contact" action="{{route('custumize')}}" type="submit" >submit</button>

            </form>
        </div>
    </div>
@endsection