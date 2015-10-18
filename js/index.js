function loadImages(){
    var instagram_client_id = 'b3ff009db8c3416e87f3b1625a475294'
    var instagram_access_token;
    // $.get( "https://instagram.com/oauth/authorize/?client_id=" + instagram_client_id + "&redirect_uri=http://www.compatigram.co&response_type=token", function( data ) {
    //   console.log(data);
    // });
    // jQuery.ajax({
    //     url: "https://instagram.com/oauth/authorize/?client_id=" + instagram_client_id + "&redirect_uri=http://www.compatigram.co&response_type=token",
    //     type: "GET",
    //     headers: {Access-Control-Allow-Origin:'http://www.compatigram.co/'},
    //     async: false,
    //     success: function(data, textStatus, jqXHR) {
    //         // do stuff with data
    //         console.log(data.access_token);
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         // do stuff with error
    //     }
    // });
    $.ajax({
        url: "https://instagram.com/oauth/authorize/?client_id=" + instagram_client_id + "&redirect_uri=http://compatigram.heroku.com&response_type=token",
        type: "GET",
        success: function(data, textStatus, jqXHR) {
            console.log(data);
        },
    });
}
