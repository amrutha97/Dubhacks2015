var selfID;
var selfUsername;
var profilePicture;

function retrieveUserInfo(){
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/self/?access_token="+str,
        success: function(data) {
            selfID = data['data']['id'];
            selfUsername = data['data']['username'];
            profilePicture = data['data']['profile_picture'];
        }
    });
}

function addUserInfo(){
    $('.input-handler').val(selfUsername);
    $('#p1-img').attr('src',profilePicture);
}

function userInfo(){
    retrieveUserInfo();
    addUserInfo();
}
