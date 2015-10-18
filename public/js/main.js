$(document).ready(function() {

    // HEY! Change similarity based on the percentage returned
    // after Danny and Amrutha figure out how to return the
    // percentage for similarity
    var similarity = 55; // Adjust this

    var emoji = $('#emoji'),
        desc = $('#result-description');

    // Adjust similarity bar
    var simPercent = similarity + '%';
    $('#meter').width(simPercent);
    $('#percent').html(simPercent);

    // Display the corresponding emoji
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
