$(document).ready(function() {
    $('#e_invoice').change(function() {
        $('#e_invoice').val($(this).is(':checked'));
       console.log($('#e_invoice').val());
    });
    $('#try_again').hide();
    $('#settingsForm').height('600')
    $('#success_message').css('display','none');
    $('#error_message').css('display','none');
    if($('#button_third').hasClass('active')){
        console.log('geldi')

    };
    $('#Bireyselfrom').hide();
    $('#form2').hide();
    $('#form3').hide();
    $('#form4').hide();
    $('.kurumsal').hide();
    $('#settingsForm').hide();
    $( "#kurumsal" ).on( "click", function() {
        $('#Bireyselfrom').hide();
        $('#Kurumsalform').show();
        $('.kurumsal').show();
        $('#themostunder').css('margin-right','60%');



    });
    $( ".PURCHACE" ).on( "click", function() {
        $('#settingsForm').show();
        let window_size =$( window ).width();
        if(window_size<500){
            $('#settingsForm').height('1000')
        }else{
            $('#settingsForm').height('600')
        }
    });
    $( "#bireysel" ).on( "click", function() {
        $('#Bireyselfrom').show();
        $('#Kurumsalform ').hide();
    });
    i=0;
    $( "#button_contact2" ).click(function() {
        $('.kurumsal').hide();
        i;
        if(i<3) {
            $('.menuy ul li').eq(i).removeClass('active');
            $('.menuy ul li').eq(i + 1).addClass('active');
            i++;

            if(i===0){
                if($( '#kurumsal' ).prop( "checked" )==='false'){
                    $('.kurumsal').hide();
                    console.log($('.kurumsal').text());
                    let window_size =$( window ).width();

                    if(window_size<500) {
                    }

                }
                $('#button_pay').hide();
                $('#button_contact2').css('display','inline');
                $('#form1').show();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').hide();
            }
            else if(i===1){
                let window_size =$( window ).width();

                if(window_size<500){
                    $('#settingsForm').height('500px')

                }
                else{
                    $('#settingsForm').height('300')

                }
                $('#button_contact2').css('display','inline');
                $('#button_pay').hide();
                $('#form1').hide();
                $('#form2').show();
                $('#form3').hide();
                $('#form4').hide();

            }else if(i===2){
                let window_size =$( window ).width();

                if(window_size<500){
                    $('#settingsForm').height('800')

                }
                else{
                    $('#settingsForm').height('700')

                }
                $('#button_pay').css('display','inline');
                $('#button_contact2').css('display','none');
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').show();
                $('#form4').hide();

            }else if(i===3){
                $('#button_pay').show();
                let window_size =$( window ).width();

                if(window_size<500){

                }
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').show();
                $('#button_contact').hide();
                $('#button_contact2').hide();
            }else if (i<3){
                $('#button_contact2').css('display','inline');
            }
        }
    });
    $( "#button_contact" ).click(function() {
        $('#themostunder').css('margin-right','0%');

        $('.kurumsal').hide();
        i;
        if(i<4 && i>0) {
            $('.menuy ul li').eq(i).removeClass('active');
            $('.menuy ul li').eq(i - 1).addClass('active');
            i--;
            if(i===0){
                if($( '#kurumsal' ).prop( "checked" )==='false'){
                    $('.kurumsal').hide();
                    console.log($('.kurumsal').text());
                }
                let window_size =$( window ).width();

                if(window_size<500){
                    $('#settingsForm').height('950')

                }
                else{
                    $('#settingsForm').height('600')
                }
                $('#button_contact2').css('display','inline');
                $('#form1').show();
                $('#button_pay').hide();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').hide();
            }
            else if(i===1){
                let window_size =$( window ).width();

                if(window_size<500){
                    $('#settingsForm').height('500')


                }
                else{
                    $('#settingsForm').height('200')

                }
                $('#button_contact2').css('display','inline');
                $('#invoice_type').css('display','none');
                $('.invoiceeetype').css('display','none');

                $('#button_pay').hide();
                $('#form1').hide();
                $('#form2').show();
                $('#form3').hide();
                $('#form4').hide();

            }else if(i===2){
                let window_size =$( window ).width();

                if(window_size<500){

                }
                $('#button_contact2').css('display','inline');

                $('#form1').hide();
                $('#form2').hide();
                $('#form3').show();
                $('#form4').hide();

            }else if(i===3){
                let window_size =$( window ).width();

                $('#button_contact2').css('display','inline');

                $('#form1').hide();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').show();
            }

        }
    });

    $('.setting_button').css('margin-right','0px');
    $('.personal_settings').hide();
    $('.custumize').hide();
    $(".setting_but").click(function() {
        $('.setting_button').not(self).removeClass('active');
        $(this).parent().addClass('active');
        $(this).addClass("active");
        if($('#button_first').hasClass('active')){

            $('.personal_settings').hide();
            $('.password_process').show();
            $('.custumize').hide();
        }
        else if($('#button_second').hasClass('active')){
            $('.personal_settings').show();
            $('.custumize').hide();
            $('.password_process').hide();
        } else if($('#button_third').hasClass('active')){
            $('.personal_settings').hide();
            $('.password_process').hide();
            $('.custumize').show();
        }
    });
    function packets_reels () {
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:8000/api/v1/packets-reels",
            success: function (response) {
                jQuery.each(response, function (i, val) {
                    jQuery.each(val, function (is, vall) {
                        $start = vall.id - 1;
                        console.log(vall);

                        $(".PURCHACE").eq($start).val(vall.id);


                    });
                });
            }
        });
    }
    packets_reels();

    $(".PURCHACE").click(function() {
        let number_id = $(this).val();

        get_one_packets(number_id);


        console.log(number_id)

        $("#packets_show").hide();
        $("#settingsForm").show();
    });
    function get_one_packets(id){
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:8000/api/v1/packets-reels/"+id,
            success: function (response) {
                $(".price_packet").text(response.data.attributes.price+ " TL");
                $(".input_price").text(response.data.attributes.price);
                $(".input_price").val(response.data.attributes.price);
                $(".input_id").val(response.data.id);
                $(".input_id").text(response.data.id);
                $("#total_price").text("Toplam : "+response.data.attributes.price+ " TL");
                jQuery.each(response, function (i, val) {
                    jQuery.each(val, function (is, vall) {
                        $("#hidden_word_count").text(vall.word_count)
                        $("#hidden_websites_count").text(vall.websites_count)
                        $("#başlangic").text(vall.names_packets);
                        $(".rank_follow").text(vall.rank_fosllow);
                        $("#hidden_price").text(vall.price);
                        $("#hidden_description").text(vall.description)
                    });
                });
            }
        });
    }let user_id =  $('#hidden_id').text();

    console.log(user_id)
    get_packets();
    get_invoice();
    $( "#button_pay" ).click(function() {

        console.log('burasdgeldi')
        const count =  $('.hidden_size').val();
        if(count<1){
            post_packets();
            if($('.invoice_size').val()<1){
                post_invoice();
            }
            else{
                patch_invoice();
            }
        }else {
                patch_packets();
            if($('.invoice_size').val()<1){
                post_invoice();
            }
            else{
                patch_invoice();
            }
            }
        }
    );
    function patch_invoice(){
       let invoicee_id =  parseInt($('.invoice_id').val());
        $('.invoice_size').val();
        let first_name = $('.invoice_first_name').val();
        let last_name = $('.invoice_last_name').val();
       let address = $('.invoice_tax_address').val();
        let number = $('.invoice_id_number').val();
        let invoice_no =$('.invoice_tax_no').val();
        let country=$('.invoice_country').val();
        let city = $('.invoice_city').val();
        let invoice_type = $('.invoice_invoice_type').val();
        let company_name =$('.invoice_company_name').val();
        let user_id =$('.invoice_user_id').val( );
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/invoicerecords"+invoicee_id,
            type: "PATCH",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            data: JSON.stringify({
                "data": {
                    "type": "invoicerecords",

                    "attributes": {
                        "user_id":user_id,
                        "first_name":first_name,
                        "last_name":last_name,
                        "id_number":number,
                        "tax_address":address,
                        "tax_no":invoice_no,
                        "country":country,
                        "city":city,
                        "company_name":company_name,
                        "invoice_type":invoice_type,

                    }
                }

            }),
            success: function (result) {
                console.log('işlem başarılı')
                $('#success_message').css('display','grid');
            },
            error: function(result) {
                $('#error_message').css('display','grid');

            }
        });
    }
    function post_invoice(){
        let first = $('#first_name').val();
        let last = $('#last_name').val();
        let Id_number = $('#number_personal').val();
        let id_number = parseInt(Id_number);
        console.log(typeof id_number)
        let invoice_no = $('#invoice_noo').val();
        let companyName = $('#companyName').val();
        let invoice_Addres = $('#invoice_addresses').val();
        console.log(invoice_no,'invoice no');
        console.log(invoice_Addres,'invoice_addreses');
        let country = $('#country').val();
        let city = $('#city').val();
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/invoicerecords",
            type: "POST",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            data: JSON.stringify({
                "data": {
                    "type": "invoicerecords",

                    "attributes": {
                        "user_id":user_id,
                        "first_name":first,
                        "last_name":last,
                        "id_number":id_number,
                        "tax_address":invoice_Addres,
                        "tax_no":invoice_no,
                        "country":country,
                        "city":city,
                        "company_name":companyName
                    }
                }

            }),
            success: function (result) {
                console.log('işlem başarılı')
                $('#success_message').css('display','grid');
            },
            error: function(result) {
                $('#error_message').css('display','grid');

            }
        });
    }
    function post_packets(){
        console.log($('#first_name').text());
        console.log($('#first_name').val());
        let hidden_word_count  =$("#hidden_word_count").text()
        let hidden_websites_count  =$("#hidden_websites_count").text()
        console.log(hidden_websites_count);
        let başlangic  =$("#başlangic").text()
        let rank_follow  =$(".rank_follow").text()
        let hidden_price  =$("#hidden_price").text()
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        today2 = dd + '-' + mm + '-' + yyyy;
        let date_int_mm  = parseInt(mm);
        let date_int_day  = parseInt(dd);
        var new_mm = date_int_mm +1;
        var new_dd = date_int_day +1;
        todayee =  new_dd + "-" + '0'+new_mm  + "-" + yyyy;
        let ee =  Date.parse(todayee);
        let dateArray = todayee.split("-");
        let dateObj = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
        let deyt =   new Date(new_dd,new_mm,yyyy);
        var con_date =
            ""+deyt.getFullYear() + (deyt.getMonth()+1) + deyt.getDate(); //converting the date
        let gdate = "" + yyyy +"-"+ new_mm+"-" + new_dd; //given date
        console.log(gdate,'giremedi');

        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/Packets",
            type: "POST",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            data: JSON.stringify({
                "data": {
                    "type": "Packets",

                    "attributes": {
                        "user_id":user_id,
                        "count_of_words": 0,
                        "descrpitions":"sada",
                        "end_of_pocket":gdate,
                        "max_count_of_words":hidden_word_count,
                        "rank_follow":0,
                        "rank_follow_max":rank_follow,
                        "count_of_websites":0,
                        "max_count_of_websites": hidden_websites_count,
                        "packet_names":başlangic,

                    }}
            }) ,
            success: function (result) {
                console.log('işlem başarılı')
            }
        });
    }   function patch_packets(){
        let hidden_word_count  =parseInt($("#hidden_word_count").text());
        let hidden_websites_count  =parseInt($("#hidden_websites_count").text());
        let rank_follow_normal  =parseInt($(".rank_follow").text());
      let max_count_word  = $('.max_my_count_of_words').val();
        let max_count_of_websites  =  $('.max_my_count_of_websites').val();
        let hidden_websites_count_new= (parseInt(max_count_of_websites))-parseInt($('.my_count_of_websites').val())+hidden_websites_count;
        let rank_follow_new= (parseInt($('.rank_follow_max_max').val()))-parseInt($('.rank_follow_max').val())+rank_follow_normal;
        let  hidden_word_count_new=(parseInt(max_count_word))-parseInt($('.my_count_of_words').val())+ hidden_word_count;
        let başlangic  =$("#başlangic").text()
        let hidden_price  =$("#hidden_price").text()

        var today = $('.date_packet').val();
//dateArray[2] equals to 2021
//dateArray[1] equals to 02
//dateArray[0] equals to 13
        var arr_dateText = today.split("-");
        startyear = parseInt(arr_dateText[0]);
        startmonth = parseInt(arr_dateText[1])+1;
        startday = parseInt(arr_dateText[2]);
        if(startmonth==13){
            startmonth=1
            startyear=startyear+1

        }

        let gdate = "" + startyear +"-"+"0"+ startmonth+"-" + startday; //given date,

        console.log(gdate);
        $('.my_count_of_words').val();
        $('.my_count_of_websites').val();
// using template literals below
        const id =  $('.id_hidden').val();
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/Packets/"+id,
            type: "PATCH",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            data: JSON.stringify({
                "data": {
                    "type": "Packets",
                    "id":id,
                    "attributes": {
                        "user_id":user_id,
                        "count_of_words": 0,
                        "descrpitions":"sada",
                        "end_of_pocket":gdate,
                        "max_count_of_words":hidden_word_count_new,
                        "rank_follow":0,
                        "rank_follow_max":rank_follow_new,

                        "count_of_websites": 0,
                        "max_count_of_websites": hidden_websites_count_new,
                        "packet_names":başlangic,

                    }
                }
            }),
            success: function (result) {
                console.log('işlem Güncellendi')
            }
        });
    }
    function get_packets(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/Packets",
            type: "GET",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            success: function (result) {
                console.log(result)
                let count = result.data.length
                if(count>0) {
                    $('.id_hidden').val(result.data[0].id)
                    $('.hidden_size').val(result.data.length);
                    $('.my_count_of_words').val(result.data[0].attributes.count_of_words);
                    $('.my_count_of_websites').val(result.data[0].attributes.count_of_websites);
                    $('.rank_follow_max').val(result.data[0].attributes.rank_follow);
                    $('.max_my_count_of_words').val(result.data[0].attributes.max_count_of_words);
                    $('.max_my_count_of_websites').val(result.data[0].attributes.max_count_of_websites);
                    $('.rank_follow_max_max').val(result.data[0].attributes.rank_follow_max);
                    $('.date_packet').val(result.data[0].attributes.end_of_pocket);
                    console.log($('.rank_follow_max').val());
                    console.log($('.rank_follow_max_max').val());
                    var today = $('.date_packet').val();


                }
            }
        });
    } function get_invoice(){
        $.ajax({
            url: "http://127.0.0.1:8000/api/v1/invoicerecords",
            type: "GET",
            headers: { "Content-Type": "application/vnd.api+json",
                Accept: "application/vnd.api+json",
            },
            success: function (result) {
                console.log(result)
                console.log(result.data[0].attributes.invoice_type,'invoice type')
                let count = result.data.length
                if(count>0) {
                    $('.invoice_id').val(result.data[0].id)
                    $('.invoice_size').val(result.data.length);
                    $('.invoice_first_name').val(result.data[0].attributes.first_name);
                    $('.invoice_last_name').val(result.data[0].attributes.last_name);
                    $('.invoice_tax_address').val(result.data[0].attributes.tax_address);
                    $('.invoice_id_number').val(result.data[0].attributes.id_number);
                    $('.invoice_tax_no').val(result.data[0].attributes.tax_no);
                    $('.invoice_country').val(result.data[0].attributes.country);
                    $('.invoice_city').val(result.data[0].attributes.city);
                    $('.invoice_invoice_type').val(result.data[0].attributes.invoice_type);
                    $('.invoice_company_name').val(result.data[0].attributes.company_name);
                    $('.invoice_user_id').val(result.data[0].attributes.user_id );


                }
            }
        });
    }
});

// payment
