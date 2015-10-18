
function getAccessToken() {
    var returnVal;
    var formData = {
        grant_type: "client_credentials",
        client_id: "XqUKUx-7b5Y1TIXChj8yhXGdcRldG5t7wzJWTtH8",
        client_secret: "a5rz9I8_aJnJqh6EUn1nNponqSVjZiuOPSrmsCE3",
        };
    jQuery.ajax({
        url: "https://api.clarifai.com/v1/token/",
        type: "POST",
        data: formData,
        async: false,
        success: function(data, textStatus, jqXHR) {
            // do stuff with data
            returnVal =  data['access_token'];

        },
        error: function(jqXHR, textStatus, errorThrown) {
            // do stuff with error
            returnVal = errorThrown;
        }
    });
    return returnVal;

}

function imageRequest(photoUrl, token) {
    var returnVal;
    jQuery.ajax({
        url: "https://api.clarifai.com/v1/tag/",
        type: "post",
        beforeSend: function(xhr) {
            // console.log('Bearer '.concat(token));
            xhr.setRequestHeader('Authorization', 'Bearer '.concat(token));
        },
        data: {
            url: photoUrl
        },
        dataType: 'json',
        async: false,
        success: function(data) {
            returnVal = data;
        },
        error: function(jqXHR, textStatus, errorThrow) {
            returnVal = errorThrow;
        }
    });
    return returnVal;
}
