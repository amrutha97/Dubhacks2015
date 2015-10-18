$.getScript('clarifaiRequest.js', function(){
   alert("script loaded, not nescessarily executed");
});

var global_user1 = {set_size:0}; // all of the tags associated with user one
var global_user2 = {set_size:0}; // all of the tags associated with user two

/**
 * Finds the % similarity between two users' profiles.
 * @param images1 the first user's image urls
 * @param images2 the second user's image urls
 * @returns {number} the % similarity of two profiles
 */
function matching_algorithm(images1, images2) {
    global_user1['set_size'] = images1.length;
    global_user2['set_size'] = images2.length;

    global_user1 = aggregateTags(images1, global_user1);
    global_user2 = aggregateTags(images2, global_user2);
    return computeSimilarity(global_user1, global_user2);
}

/**
 * Gets all of the tags associated with an image.
 * @param imageUrl the url the image being analyzed
 * @returns a list of tags associated with a given image
 */
function getTags(imageUrl) {
    var myData = imageRequest("http://i.imgur.com/ECAKUzG.jpg", getAccessToken());
    var tags = myData['results'][0]['result']['tag']['classes'];
    return tags;

}

/**
 * Gets tags from all images on a user's profile and aggregates them.
 * @param imageUrls a list of image urls from a user's profile
 * @param masterList all of the tags associated with a user
 * @returns a master list of all tags from all pictures on a user's profile
 */
function aggregateTags(imageUrls, masterList) {
    for(var index in imageUrls) {
        var image  = imageUrls[index];
        var imageTags = getTags(image);
        merge(imageTags, masterList);
    }
    console.log(masterList);
    return masterList;
}

/**
 * Merges the tags of an individual image with the master list of tags for
 * a particular user and returns the updated master list.
 * @param imageTags a list of tags for an individual image
 * @param userTags a map which contains all of a users tags and the
 *        frequency of each tag
 * @returns a map with entries from tagList merged into tagMap
 */
function merge(imageTags, userTags) {
    for (var index in imageTags) {
        // hacking tag b/c js is stupid and gets the index not the var
        var tag = imageTags[index];
        if(userTags.hasOwnProperty(tag)) { // checks if the tag exists already
            userTags[tag]++;
        } else {
            userTags[tag] = 1;
        }
    }
    return userTags;
}

/**
 * Computes the similarity between two user's tag sets.
 * @param user1 the first user's tag set
 * @param user2 the second user's tag set
 * @returns {number} the similarity between two user's profiles as a percentage
 */
function computeSimilarity(user1, user2) {
    user1 = computeAverages(user1);
    user2 = computeAverages(user2);

    var similarity = 0;
    for (var tag in user1) {
        if (tag == 'set_size') {
            continue;
        }

        if (user2.hasOwnProperty(tag)) {
            similarity += compare(user1[tag], user2[tag]);
        }
    }
    var avgSize = (user1['set_size'] + user2['set_size']) / 2;
    return similarity / avgSize;
}

/**
 * Computes the average frequency of each tag associated with a user's images.
 * @param userTags a map which contains all of a users tags and the
 *        frequency of each tag
 * @returns a map with the average frequency of each tag associated with a user
 */
function computeAverages(userTags) {
    for (var tag in userTags) {
        if (tag == 'set_size') {
            continue;
        }

        userTags[tag] /= userTags['set_size'];
    }
    return userTags;
}

/**
 * Compares the tag frequency of two users and returns a value (0, 0.5, or 1.0)
 * based on how similar their tag frequencies are.
 * @param frequency1 the frequency of a given tag for user 1
 * @param frequency2 the frequency of a given tag for user 2
 * @returns {number} a value that represents how similar the two frequencies are
 */
function compare(frequency1, frequency2) {
    if (Math.abs(frequency1 - frequency2) < 0.1) {
        return 100.0;
    } else if (Math.abs(frequency1 - frequency2) < 0.5) {
        return 50.0;
    } else {
        return 0.0;
    }
}
