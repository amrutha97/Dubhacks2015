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
            for(var i = 0; i < data['data'].length; i++){
                otherImageList.push(data['data'][i]['images']['standard_resolution']['url']);
                console.log(data['data'][i]['images']['standard_resolution']['url']);
            }
            console.log('Retrieved images:' + otherImageList);
            similarity = matching_algorithm(selfImageList, otherImageList);
            simPercent = similarity + '%';
            $('#meter').width(simPercent);
            $('#percent').html(simPercent);
            updateEmoji();
        }
    });
}

function updateEmoji(){
    var emoji = $('#emoji'),
        desc = $('#result-description');
    if (similarity < 10) { // Retreat! Ghost face
        desc.html('Good lord retreat, retreat!');
        emoji.attr('src', 'img/Emoji Smiley-33.png');
    } else if (similarity < 20) { // Sick face
        desc.html('Let\'s keep 50 feet away.');
        emoji.attr('src', 'img/Emoji Smiley-32.png');
    } else if (similarity < 30) { // You're too cool for them. Sunglasses
        emoji.attr('src', 'img/Emoji Smiley-41.png');
        desc.html('You\'re way too cool for them.');
    } else if (similarity < 40) { // They're aight. Meh face.
        desc.html('They\'re aight.');
        emoji.attr('src', 'img/Emoji Smiley-58.png');
    } else if (similarity < 50) { // Casually looking off to the side
        desc.html('Well, it could work?');
        emoji.attr('src', 'img/Emoji Smiley-19.png');
    } else if (similarity < 60) { // :p face
        desc.html('Maybe they\'ll understand you');
        emoji.attr('src', 'img/Emoji Smiley-14.png');
    } else if (similarity < 70) { // Smile
        desc.html('Sharing drinks status!');
        emoji.attr('src', 'img/Emoji Smiley-01.png');
    } else if (similarity < 80) { // BFF status
        desc.html('They a homie.');
        emoji.attr('src', 'img/smiley.png');
    } else if (similarity < 90) { // Potential soulmate?
        desc.html('Potential soulmates?');
        emoji.attr('src', 'img/Emoji Smiley-08.png');
    } else { // Soulmate
        desc.html('You\'re both soulmates! TIME TO GET A RING.');
        emoji.attr('src', 'img/Emoji Smiley-76.png');
    }
}
