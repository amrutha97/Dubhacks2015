var selfID;
var otherID;
var selfUsername;
var profilePicture;
var otherImageList = [];

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

function retrieveOtherUserInfo(){
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/search?q=" + $('#otherUserHandle').val() + "&count=1&access_token="+str,
        success: function(data) {
            $('#p2-img').attr('src', data.data.profile_picture);
            $('#p2-name').html(data.data.full_name);
            $('#p2-handler').html('@' + data.data.username);
            otherID = data['data']['id'];
        }
    });
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/" + otherID + "/media/recent/?client_id=b3ff009db8c3416e87f3b1625a475294&access_token="+str,
        success: function(data) {
            for(var i = 0; i < data['data'].length; i++){
                otherImageList.push(data['data'][i]['images']['standard_resolution']['url']);
            }
        }
    });

    similarity = computeSimilarity(selfImageList, otherImageList);
}

function addUserInfo(){
    $('#mainUserHandle').val(selfUsername);
    $('#p1-img').attr('src',profilePicture);
    $('#p1-name').html(data.data.full_name);
    $('#p1-handler').html('@' + data.data.username);
}

function userInfo(){
    retrieveUserInfo();
    addUserInfo();
}
