<?php

namespace App\Http\Controllers;

use App\Models\packets_reels;
use App\Models\PacketsOfUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;

class packets extends Controller
{
    //
    public function index (Request $request){
        $this->location();
        $clientIP = \Request::ip();
        $clientIP = \Request::getClientIp(true);
        $clientIP = Request()->ip();
        $externalContent = file_get_contents('http://checkip.dyndns.com/');
        preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
        $externalIp = $m[1];
        $externalIp;
        $base_moeny='₺';

        $ippp = '2.16.7.255';
        $ippamerica= '1.32.232.0';
        $tr='78.180.10.189';
        $geo = geoip()->getLocation('78.180.10.189');
        $localiton=  $geo->iso_code;
        $country = $geo->country;
        $packets_reel = packets_reels::all();

        $pack = $packets_reel->take(1)->first();
        $middle = $packets_reel->take(2)->last();
        $last = $packets_reel->take(3)->last();
        $money=  $pack->price;
        $money1=  $middle->price;
        $money2=  $last->price;

        $url = "https://api.exchangeratesapi.io/latest?base=TRY";
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_URL, $url);
        $response = curl_exec($ch);
        $arr_result = json_decode($response);
        if($localiton==='TR'){
            $lang = 'tr';
            App::setlocale($lang);
            $locale = App::getLocale();
            $money_value=$money;
            $money_value1=$money1;
            $money_value2=$money2;
            $money_new_value=$pack->price;
            $money_new_value1=$middle->price;
            $money_new_value2=$last->price;
            $round_new  = round($money_new_value);
            $round_new1  = round($money_new_value1);
            $country = $geo->country;
            $round_new2  = round($money_new_value2);

            $base_moeny='₺';
        }
        else if($localiton==='US'){
            $lang = 'en';
            App::setlocale($lang);
            $locale = App::getLocale();
            $money_value=$arr_result->rates->USD;
            $money_new_value = $money1*$money_value;
            $money_new_value1 = $money*$money_value;
            $money_new_value2 = $money2*$money_value;
            $round_new  = round($money_new_value);
            $round_new1  = round($money_new_value1);
            $country = $geo->country;
            $round_new2  = round($money_new_value2);

            $base_moeny='$';
        } else if($localiton==='ES'){
            $lang = 'es';
            App::setlocale($lang);
            $money_value=$arr_result->rates->EUR;
            $money_new_value = $money1*$money_value;
            $money_new_value1 = $money*$money_value;
            $money_new_value2 = $money2*$money_value;
            $round_new  = round($money_new_value);
            $round_new1  = round($money_new_value1);
            $round_new2  = round($money_new_value2);
            $country = $geo->country;
            $base_moeny='€';

            $locale = App::getLocale();
        }else if($localiton==='DE') {
            $lang = 'de';
            App::setlocale($lang);
            $base_moeny = '€';
            $money_value = $arr_result->rates->EUR;
            $money_new_value = $money1 * $money_value;
            $money_new_value1 = $money * $money_value;
            $money_new_value2 = $money2 * $money_value;
            $round_new = round($money_new_value);
            $round_new1 = round($money_new_value1);
            $country = $geo->country;
            $round_new2 = round($money_new_value2);

            $locale = App::getLocale();

        }
        $this->location();
        return view('pages/packets/packets',compact('country','base_moeny','round_new','round_new1','round_new2','money_new_value','locale','localiton','lang','packets_reel','last','pack','middle','money_new_value'));

    }

    public function location()
    {
        $externalContent = file_get_contents('http://checkip.dyndns.com/');
        preg_match('/Current IP Address: \[?([:.0-9a-fA-F]+)\]?/', $externalContent, $m);
        $externalIp = $m[1];
//        $americaIp = '78.180.10.189';
        $geo = geoip()->getLocation($externalIp);
        $localiton = $geo->iso_code;
        if ($localiton === 'TR') {
            $lang = 'tr';
            App::setlocale($lang);
        } else if ($localiton === 'US') {
            $lang = 'en';
            App::setlocale($lang);
        } else if ($localiton === 'ES') {
            $lang = 'es';
            App::setlocale($lang);
        } else if ($localiton === 'DE') {
            $lang = 'de';
            App::setlocale($lang);
        }
    }
    public function BuyedPackets(Request $request){
        $buyedPackets = new PacketsOfUsers;
    }
}
