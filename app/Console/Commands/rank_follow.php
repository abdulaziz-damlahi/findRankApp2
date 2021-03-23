<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\websites;
use App\Models\keywords;
use App\Models\packets;
use Illuminate\Support\Facades\DB;
class rank_follow extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'rank_follow:name';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
    //  $keywords = keywords::get()->id;
        $keywords = keywords::all();
        $websites = websites::get('id');
        $keyword_id = keywords::all();
        $keyword_id2 = keywords::get('website_id');


        //   $websie=  DB::table('websites')->find();
        foreach ($websites as $website_id) {
            $result = keywords::with('website')->where('website_id',$website_id->id)->get();
            foreach ($result as $anahtar=>$resultsasa) {

                $keyword = $resultsasa->name;
               $website_name = $resultsasa->website[0]->website_name;


                $packets =  packets::all();
                if(count($packets)>0) {
                    $ch = curl_init();
                    $colonial_name = 'South Kalimantan,Indonesia';
                    $aranan = urlencode($keyword);
                    $language = "Turkish";
                    $sa = $colonial_name;
                    $kelime = $aranan;
                    $ne = base64_encode($sa);

                    if ($language == 'english') {
                        $len = 'en';
                    } else {
                        $len = 'tr';
                    }
                    $saayi = strlen($sa);
                    if ($saayi == 4) {
                        $saaa = 'E';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 5) {
                        $saaa = 'F';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 6) {
                        $saaa = 'G';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 7) {
                        $saaa = 'H';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 8) {
                        $saaa = 'I';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 9) {
                        $saaa = 'J';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 10) {
                        $saaa = 'K';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 11) {
                        $saaa = 'L';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 12) {
                        $saaa = 'M';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 13) {
                        $saaa = 'N';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 14) {
                        $saaa = 'O';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 15) {
                        $saaa = 'P';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 16) {
                        $saaa = 'Q';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 17) {
                        $saaa = 'R';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 18) {
                        $saaa = 'S';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 19) {
                        $saaa = 'T';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 20) {
                        $saaa = 'U';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 21) {
                        $saaa = 'V';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 22) {
                        $saaa = 'W';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 23) {
                        $saaa = 'X';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 24) {
                        $saaa = 'Y';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 25) {
                        $saaa = 'Z';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 26) {
                        $saaa = 'a';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 27) {
                        $saaa = 'b';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 28) {
                        $saaa = 'c';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 29) {
                        $saaa = 'd';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 30) {
                        $saaa = 'e';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 31) {
                        $saaa = 'f';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 32) {
                        $saaa = 'g';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 33) {
                        $saaa = 'h';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 34) {
                        $saaa = 'i';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 35) {
                        $saaa = 'j';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 36) {
                        $saaa = 'k';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 37) {
                        $saaa = 'ı';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 38) {
                        $saaa = 'm';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 39) {
                        $saaa = 'n';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 40) {
                        $saaa = 'o';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 41) {
                        $saaa = 'p';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 42) {
                        $saaa = 'q';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 43) {
                        $saaa = 'r';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 44) {
                        $saaa = 's';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 45) {
                        $saaa = 't';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 46) {
                        $saaa = 'u';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 47) {
                        $saaa = 'v';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 48) {
                        $saaa = 'w';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 49) {
                        $saaa = 'x';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 50) {
                        $saaa = 'y';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 51) {
                        $saaa = 'z';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 52) {
                        $saaa = '0';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 53) {
                        $saaa = '1';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 54) {
                        $saaa = '2';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 55) {
                        $saaa = '3';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 56) {
                        $saaa = '4';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 57) {
                        $saaa = '5';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 58) {
                        $saaa = '6';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 59) {
                        $saaa = '7';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 60) {
                        $saaa = '8';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 61) {
                        $saaa = '9';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 64) {
                        $saaa = 'A';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 65) {
                        $saaa = 'B';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 66) {
                        $saaa = 'C';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 67) {
                        $saaa = 'D';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 68) {
                        $saaa = 'E';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 69) {
                        $saaa = 'F';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 70) {
                        $saaa = 'G';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 71) {
                        $saaa = 'H';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 72) {
                        $saaa = 'I';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 73) {
                        $saaa = 'J';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 76) {
                        $saaa = 'M';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 83) {
                        $saaa = 'T';
                        $yeni = $saaa . $ne;
                    } else if ($saayi == 89) {
                        $saaa = 'L';
                        $yeni = $saaa . $ne;
                    }
                    $degise = 'https://www.google.com/search?ie=UTF-8&oe=UTF-8&hl=' . $len . '&num=100&q=' . $kelime . '&uule=w+CAIQICI' . $yeni;
                    curl_setopt_array($ch, [
                        CURLOPT_URL => $degise,
                        CURLOPT_USERAGENT => "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36",
                        CURLOPT_RETURNTRANSFER => true,
                        CURLOPT_FOLLOWLOCATION => true,
                        CURLOPT_SSL_VERIFYHOST => false,
                        CURLOPT_SSL_VERIFYPEER => false,
                    ]);
                    $response = curl_exec($ch);
                    echo 'deneme';

                    preg_match_all('@<div class="TbwUpd NJjxre"><cite class="iUh30 Zu0yb qLRx3b tjvcx">(.*?)<span class="dyjrff qzEoUe">(.*?)<\/span><\/cite><\/div>@', $response, $resultss, PREG_SET_ORDER, 0);
                    if(!empty($resultss)){

                    foreach ($resultss as $keyyy=>$resultsaasda){
                        if(strpos($resultsaasda[1],$website_name) !== false){
                        echo $keyyy;
                        echo 'gelmediOhBe';
                        }
                        else{
                            echo  $degise;
                         echo  $resultsaasda[1];
                        }
                    }
                   }else{
                       echo "ip değiş";
                   }

                    curl_close($ch);
                }


        }sleep(0.4);}


                //   $websites2 = keywords::find($websites->id);

     //   $userkeywordcount = keywords::where('website_id', '=', $websites)->get('name');

        //   $this->info($userkeywordcount);
        /*

*/
    }
}
