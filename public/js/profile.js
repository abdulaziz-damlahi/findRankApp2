$(document).ready(function () {
    profile();
    wordlen();
    websitelen();
})

function profile() {
    $.ajax({
        type: 'get',
        url: "/api/v1/Packets",
        success: function (response) {
            var len = 0;
            if (response['data'] != null) {
                len = response['data'].length;
            }
            if (len > 0) {
                for (var i = 0; i < 1; i++) {
                    var endofpacket = response['data'][0].attributes.end_of_pocket;
                    var createdAt = response['data'][0].attributes.createdAt;
                    var packet_names = response['data'][0].attributes.packet_names;
                    var createdAt = createdAt.slice(0, 10);
                    //todays DD/MM/YYYY
                    var today1 = new Date();
                    var dd = String(today1.getDate()).padStart(2, '0');
                    var mm = String(today1.getMonth() + 1).padStart(2, '0');
                    var yyyy = today1.getFullYear();
                    today1 = mm + '/' + dd + '/' + yyyy;
                    //today YYYY-MM-DD
                    var today2 = new Date();
                    var dd2 = String(today2.getDate()).padStart(2, '0');
                    var mm2 = String(today2.getMonth() + 1).padStart(2, '0');
                    var yyyy2 = today2.getFullYear();
                    today2 = yyyy2 + '-' + mm2 + '-' + dd2;
                    var today1format = new Date(today1);
                    var lastday = new Date(endofpacket);
                    //calc diffrance
                    var oneDay = 24 * 60 * 60 * 1000;
                    var diffDays = Math.round(Math.abs((today1format - lastday) / oneDay));
                    diffDays2 = (diffDays);
                    if (today2 == endofpacket || today2 > endofpacket) {
                        diffDays2 = 'Aktif bir paketiniz yok.';
                    }
                    $('#daysleft3').append(diffDays2);
                    console.log(diffDays2)
                    $('#endofpacket').append(endofpacket);
                    $('#createdAt').append(createdAt);
                    $('#packet_names').append(packet_names);
                }
            }
        }
    });
}

function wordlen() {
    $.ajax({
        url: "/api/v1/Packets",
        type: "GET",
        success: function (response) {
            if (response['data'][0] !== undefined) {
                var maxword = response['data'][0].attributes.max_count_of_words;
            }
            $.ajax({
                url: "/api/v1/Keywords",
                type: "GET",
                success: function (response) {
                    var lenkeyword = 0;
                    if (response['data'] != null) {
                        lenkeyword = response['data'].length;
                    }
                    $('#keywordused').append(lenkeyword);
                    $('#maxcountword').append(maxword);
                    perc1 = ((lenkeyword / maxword) * 100);
                    var keywordprogress = document.getElementById("wordprogress");
                    perc1a = (perc1) + '%'
                    keywordprogress.style.width = perc1a;
                }
            });
        }
    });
}

function websitelen() {
    $.ajax({
        url: "/api/v1/Packets",
        type: "GET",
        success: function (response) {
            if (response['data'][0] !== undefined) {
                var maxwebsites = response['data'][0].attributes.max_count_of_websites;
            }
            $.ajax({
                url: "/api/v1/Websites",
                type: "GET",
                success: function (response) {
                    var lenwebsites = 0;
                    if (response['data'] != null) {
                        lenwebsites = response['data'].length;
                    }
                    $('#websiteused').append(lenwebsites);
                    $('#maxwebsite').append(maxwebsites);
                    perc1 = ((lenwebsites / maxwebsites) * 100);
                    var keywordprogress = document.getElementById("websiteprogress");
                    perc1a = (perc1) + '%'
                    keywordprogress.style.width = perc1a;
                }
            });
        }
    });
}
