
$(document).ready(function() {
    $("#device2").change(function() {
        if($(this).val()==="Mobil"){
            let mobile_device ="Mozilla/5.0 (iPhone; CPU iPhone OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/45.0.2454.68 Mobile/11B554a Safari/9537.53"
            $("#hidden_device2").val(mobile_device);
        }
        else{
            $("#hidden_device2").val("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.4389.90 Safari/537.36")
        }
    });
    $("#selectSecil2").change(function() {
        $(".cityy2").empty()
        $.ajax({
            type: 'get',
            url: "http://127.0.0.1:8000/api/v1/Locations",
            success: function (response) {
                jQuery.each( response, function( i, val ) {
                    jQuery.each( val, function( i, valll ) {
                        $sa = valll.attributes.Country_Code;
                        $saname = valll.attributes.name;
                        $aaaa=  $("#selectSecil2").val();
                        if($sa===$aaaa){
                            $typecity=valll.attributes.Target_Type;
                            if(valll.attributes.Target_Type==='City') {
                                $("#cityy2")
                                    .append('<option  class="cononical" value='+valll.attributes.Canonical_Name+'>' + valll.attributes.name + '</option>')
                            }
                        }
                    });
                });
            }
        });
        $("#cityy2").change(function() {
            $("#hidden_collonial2").val($(this).val());
            $("#hidden_device2").val($("#hidden_collonial2").val());
        });
    });
    $("#language2").change(function() {
        $("#language_hidden2").val($(this).val());

    });
    $.ajax({
        type: 'get',
        url: "http://127.0.0.1:8000/api/v1/Locations",
        success: function (response) {
        }
    });
});
