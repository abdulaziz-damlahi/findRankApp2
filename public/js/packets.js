
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
142
143
144
145
146
147
148
149
150
151
152
153
154
155
156
157
158
159
160
161
162
163
164
165
166
167
168
169
170
171
172
173
174
175
176
177
178
179
180
181
182
183
184
185
186
187
188
189
190
191
192
193
194
195
196
197
198
199
200
201
202
203
204
205
206
207
208
209
210
211
212
213
214
215
216
217
218
219
220
$(document).ready(function() {
    $('#Bireyselfrom').hide();
    $('#form2').hide();
    $('#form3').hide();
    $('#form4').hide();
$(document).ready(function() {
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
  $('#settingsForm').height( 500 )
  $( "#kurumsal" ).on( "click", function() {
    $('#Bireyselfrom').hide();
    $('#Kurumsalform').show();
    $('.kurumsal').show();
    $('#settingsForm').height(700 )
    $('#themostunder').css('margin-right','60%');



  });
  $( ".PURCHACE" ).on( "click", function() {
    $('#settingsForm').show();
  });
  $( "#bireysel" ).on( "click", function() {
    $('#Bireyselfrom').show();
    $('#Kurumsalform ').hide();
    $('#settingsForm').height( 500 )
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

    }
    $('#button_pay').hide();
    $('#button_contact2').css('display','inline');
    $('#form1').show();
    $('#form2').hide();
    $('#form3').hide();
    $('#form4').hide();
  }
else if(i===1){
    $('#button_contact2').css('display','inline');
    $('#button_pay').hide();
      $('#form1').hide();
      $('#form2').show();
      $('#form3').hide();
      $('#form4').hide();
      $('#form2').height(300);

  }else if(i===2){
    $('#button_pay').css('display','inline');
    $('#button_contact2').css('display','none');
      $('#form1').hide();
      $('#form2').hide();
      $('#form3').show();
      $('#form4').hide();

  }else if(i===3){
  $('#button_pay').show();

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
    $('#settingsForm').hide();
    $('#settingsForm').height( 500 )
    $( "#kurumsal" ).on( "click", function() {
        $('#Bireyselfrom').hide();
        $('#Kurumsalform').show();
        $('.kurumsal').show();
        $('#settingsForm').height(700 )
        $('#themostunder').css('margin-right','60%');
    });
    $( ".PURCHACE" ).on( "click", function() {
        $('#settingsForm').show();
    });
    $( "#bireysel" ).on( "click", function() {
        $('#Bireyselfrom').show();
        $('#Kurumsalform ').hide();
        $('#settingsForm').height( 500 )
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
                }
                $('#form1').show();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').hide();
            }
            else if(i===1){
                $('#form1').hide();
                $('#form2').show();
                $('#form3').hide();
                $('#form4').hide();
                $('#form2').height(300);
            }else if(i===2){
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').show();
                $('#form4').hide();
            }else if(i===3){
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').show();
                $('#button_contact').hide();
                $('#button_contact2').hide();
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
                $('#form1').show();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').hide();
            }
            else if(i===1){
                $('#form1').hide();
                $('#form2').show();
                $('#form3').hide();
                $('#form4').hide();
                $('#form2').height(300);
            }else if(i===2){
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').show();
                $('#form4').hide();
            }else if(i===3){
                $('#form1').hide();
                $('#form2').hide();
                $('#form3').hide();
                $('#form4').show();
                $('#button_contact').hide();
                $('#button_contact2').hide();
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
                        $(".PURCHACE").eq($start).val(vall.id);
                        console.log($(".PURCHACE").val());
                    });
                });
            }
        });
    }
    packets_reels();
    $(".PURCHACE").click(function() {
        let number_id = $(this).val();
        get_one_packets(number_id);
        $("#packets_show").hide();
        $("#settingsForm").show();
    });
    function get_one_packets(id){
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:8000/api/v1/packets-reels/"+id,
            success: function (response) {
                $(".price_packet").text(response.data.attributes.price+ " TL");
                $("#total_price").text("Toplam : "+response.data.attributes.price+ " TL");
                jQuery.each(response, function (i, val) {
                    jQuery.each(val, function (is, vall) {
                        console.log(vall);
                        $(".hidden_word_count").val(vall.count_of_words)
                        $(".hidden_websites_count").val(vall.websites_count)
                        $(".başlangic").text(vall.names_packets);
                        $(".hidden_description").val(vall.description)
                    });
                });
            }
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
      $("#total_price").text("Toplam : "+response.data.attributes.price+ " TL");
      jQuery.each(response, function (i, val) {
        jQuery.each(val, function (is, vall) {
          $("#hidden_word_count").text(vall.word_count)
          $("#hidden_websites_count").text(vall.websites_count)
          $("#başlangic").text(vall.names_packets);
          $("#hidden_price").text(vall.price);

          $("#hidden_description").text(vall.description)
        });
    }
    $( "#button_pay" ).click(function() {
        post_invoice();
    });
    function post_invoice(){
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
                        "first_name":"first_name",
                        "last_name":"last_name",
                        "Id_number":"2201546589",
                        "tax_no":"sa",
                        "tax_address":"sa",
                        "country":"sa",
                        "city":"sa",
                        "company_name":"sa"
                    }
                }
            }),
            success: function (result) {
                console.log('işlem başarılı')
            }
        });
    }
  });
}let user_id =  $('#hidden_id').text();

  console.log(user_id)
  get_packets();
  $( "#button_pay" ).click(function() {
    const count =  $('.hidden_size').val();
    if(count<1){
      post_packets();
      post_invoice();
      console.log('geldii')

    }else {
      console.log('sas')
      patch_packets();
      post_invoice();
      console.log('gitti')

    }
  });
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

          "country":country,
          "city":city

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
    let başlangic  =$("#başlangic").text()
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
    today =  new_dd + "-" + '0'+new_mm  + "-" + yyyy;
    let ee =  Date.parse(today);
    let dateArray = today.split("-");
//dateArray[2] equals to 2021
//dateArray[1] equals to 02
//dateArray[0] equals to 13

// using template literals below
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
          "count_of_words": hidden_word_count,
          "descrpitions":"sada",
          "end_of_pocket":gdate,

          "count_of_websites": hidden_websites_count,
          "packet_names":başlangic,

    }}
      }) ,
      success: function (result) {
        console.log('işlem başarılı')
      }
    });
  }   function patch_packets(){
    let hidden_word_count  =$("#hidden_word_count").text()
    let hidden_websites_count  =$("#hidden_websites_count").text()
    let başlangic  =$("#başlangic").text()
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
    today =  new_dd + "-" + '0'+new_mm  + "-" + yyyy;
    let ee =  Date.parse(today);
    let dateArray = today.split("-");
//dateArray[2] equals to 2021
//dateArray[1] equals to 02
//dateArray[0] equals to 13

// using template literals below
    let dateObj = new Date(`${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`);
    let deyt =   new Date(new_dd,new_mm,yyyy);
    var con_date =
        ""+deyt.getFullYear() + (deyt.getMonth()+1) + deyt.getDate(); //converting the date
    let gdate = "" + yyyy +"-"+ new_mm+"-" + new_dd; //given date
    console.log(gdate,'giremedi');
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
          "count_of_words":hidden_word_count,
          "descrpitions":"patch",
          "end_of_pocket":gdate,
          "count_of_websites":hidden_websites_count,
          "packet_names":başlangic

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

       console.log(result,'eski');
       let count = result.data.length
        if(count>0) {
          $('.id_hidden').val(result.data[0].id)
          $('.hidden_size').val(result.data.length);
          console.log($('.hidden_size').val());
        }
      }
    });
  }
});
// payment
