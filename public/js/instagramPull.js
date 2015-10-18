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
            $('#mainUserHandle').val(data['data']['username']);
            $('#p1-img').attr('src',data['data']['profile_picture']);
            $('#p1-name').html(data.data.full_name);
            $('#p1-handler').html('@' + data.data.username);
        }
    });
}

function retrieveOtherUserInfo(){
    var currentHandle = $('#otherUserHandle').val();
    console.log(currentHandle);
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/search?q=" + currentHandle + "&count=1&access_token="+str,
        success: function(data) {
            console.log(data);
            $('#p2-img').attr('src', data.data.profile_picture);
            $('#p2-name').html(data.data.full_name);
            $('#p2-handler').html('@' + data.data.username);
            otherID = data['data']['id'];
        }
    });
}

function retrieveOtherUserImages(){
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
    console.log(otherImageList);
}

function submit(){
    retrieveOtherUserInfo();
    retrieveOtherUserImages();
    similarity = computeSimilarity(selfImageList, otherImageList);
    console.log(similarity);
}
