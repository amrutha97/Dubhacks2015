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
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        cache: false,
        url: "https://api.instagram.com/v1/users/search?q=" + currentHandle + "&count=1&access_token="+str,
        success: function(data) {
            $('#p2-img').attr('src', data.data[0].profile_picture);
            $('#p2-name').html(data.data[0].full_name);
            $('#p2-handler').html('@' + data.data[0].username);
            otherID = data['data'][0]['id'];
            retrieveOtherUserImages();
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
            console.log(data);
            data['data'][0]['images']['standard_resolution']['url']
            for(var i = 0; i < data['data'].length; i++){
                otherImageList.push(data['data'][i]['images']['standard_resolution']['url']);
            }
            similarity = computeSimilarity(selfImageList, otherImageList);
            console.log(similarity);
            console.log(otherImageList);
        }
    });
}
