$(document).ready(
    function(){
        var clarifai = new Clarifai(
            {
                'clientId': '7b5Y1TIXChj8yhXGdcRldG5t7wzJWTtH8',
                'clientSecret': 'a5rz9I8_aJnJqh6EUn1nNponqSVjZiuOPSrmsCE3'
            }
        );
    }
);



//function getAccessToken() {
//    var formData = {
//        grant_type: "client_credentials",
//        client_id: "XqUKUx-7b5Y1TIXChj8yhXGdcRldG5t7wzJWTtH8",
//        client_secret: "a5rz9I8_aJnJqh6EUn1nNponqSVjZiuOPSrmsCE3",
//    };
//    jQuery.ajax({
//        url: "https://api.clarifai.com/v1/token/",
//        type: "POST",
//        data: formData,
//        async: false,
//        success: function(data, textStatus, jqXHR) {
//            // do stuff with data
//            imageRequest("http://i.imgur.com/tUfxxLd.jpg", data["access_token"]);
//        },
//        error: function(jqXHR, textStatus, errorThrown) {
//            // do stuff with error
//        }
//    });
//}
//
//function imageRequest(url, token) {
//    var formData = {
//        Authorization: "Bearer" + token,
//    }
//    jQuery.ajax({
//        url: "https://api.clarifai.com/v1/tag/",
//        type: "post",
//        data: {
//
//        },
//        dataType: 'json',
//        async: false,
//        success: function(data) {
//
//        }
//    })
//}
//
//getAccessToken();