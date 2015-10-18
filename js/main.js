$(document).ready(function() {

    // HEY! Change similarity based on the percentage returned
    // after Danny and Amrutha figure out how to return the
    // percentage for similarity
    var similarity = 65; // Adjust this

    // Adjust similarity bar
    var simPercent = similarity + '%';
    $('#meter').width(simPercent);
    $('#percent').html(simPercent);


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
