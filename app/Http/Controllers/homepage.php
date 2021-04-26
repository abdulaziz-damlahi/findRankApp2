<?php

namespace App\Http\Controllers;
use App\Models\locations;
use Illuminate\Http\Request;
use App\Models\keywords;
use App\Models\websites;
use App\Models\packets;
use App\Models\packets_reels;
use Illuminate\Support\Facades\App;
use App\Http\Controllers\payment;
use Illuminate\Support\Facades\Auth;


class homepage extends Controller
{
    public function index (Request $request){
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
        $packets_reel = packets_reels::all();
        $reels = packets_reels::all();
        $count_reels = count($reels);

        if ($count_reels>3){
            $pack = $packets_reel->take(1)->first();
            $middle = $packets_reel->take(2)->last();
            $last = $packets_reel->take(3)->last();
            $money=  $pack->price;
            $money1=  $middle->price;
            $money2=  $last->price;
            $money_value=$money;
            $money_value1=$money1;
            $money_value2=$money2;
            $money_new_value=$pack->price;
            $money_new_value1=$middle->price;
            $money_new_value2=$last->price;
            $round_new  = round($money_new_value);
            $round_new1  = round($money_new_value1);
            $round_new2  = round($money_new_value2);
            $url = "https://api.exchangeratesapi.io/latest?base=TRY";
            $ch = curl_init();
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_URL, $url);
            $response = curl_exec($ch);
            $arr_result = json_decode($response);
           $last_packet =  packets_reels::all()->last();
            $moneylast=  $last_packet->price;
            if($localiton==='TR'){

                $lang = 'tr';
                App::setlocale($lang);

                $locale = App::getLocale();
                $moneylasT  = round($moneylast);
                $base_moeny='₺';
                echo "girer";
                echo $moneylasT;
            }
            else if($localiton==='US'){
                $lang = 'en';
                App::setlocale($lang);
                $locale = App::getLocale();
                $money_value=$arr_result->rates->USD;
                $moneylast=  $last_packet->price;
                $money_new_value = $moneylast*$money_value;
                $moneylasT  = round($money_new_value);

                $base_moeny='$';
                echo "girer2";

            } else if($localiton==='ES'){
                $lang = 'es';
                App::setlocale($lang);
                $money_value=$arr_result->rates->EUR;
                $moneylast=  $last_packet->price;
                $money_new_value = $moneylast*$money_value;
                $moneylasT  = round($money_new_value);
                $base_moeny='€';

                $locale = App::getLocale();
                echo "girer3";

            }else if($localiton==='DE') {
                $lang = 'de';
                App::setlocale($lang);
                $base_moeny = '€';
                $money_value = $arr_result->rates->EUR;
                $moneylast=  $last_packet->price;
                $money_new_value = $moneylast*$money_value;
                $moneylasT  = round($money_new_value);

                $locale = App::getLocale();
                echo "girer4";

            }


        }else{
            $pack = $packets_reel->take(1)->first();
            $middle = $packets_reel->take(2)->last();
            $last = $packets_reel->take(3)->last();
            $money=  $pack->price;
            $money1=  $middle->price;
            $money2=  $last->price;
            $last_packet =  packets_reels::all()->last();
            $moneylasT =  packets_reels::all()->last()->price;
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
                $round_new2 = round($money_new_value2);

                $locale = App::getLocale();
            }
        }

        $this->location();
        return view('pages/home/home',compact('last_packet','moneylasT','count_reels','base_moeny','round_new','round_new1','round_new2','money_new_value','locale','localiton','lang','packets_reel','last','pack','middle','money_new_value'));

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
}
