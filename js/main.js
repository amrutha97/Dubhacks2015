$(document).ready(function() {

    // Replace profile picture, names, and handler with input JSON files
    $.getJSON('js/result.json', function(data) {
        $('#p1-img').attr('src', data.data.profile_picture);
        $('#p1-name').html(data.data.full_name);
        $('#p1-handler').html('@' + data.data.username);
    });

    // Replace user info with second JSON file
    $.getJSON('js/result2.json', function(data) {
        $('#p2-img').attr('src', data.data.profile_picture);
        $('#p2-name').html(data.data.full_name);
        $('#p2-handler').html('@' + data.data.username);
    });

});
