var global_user1 = {set_size:0};
var global_user2 = {set_size:0};


function matching_algorithm(images1, images2) {
    global_user1 = aggregateTags(images1, global_user1);
    global_user2 = aggregateTags(images2, global_user2);
    return computeSimilarity(global_user1, global_user2);
}

/**
 * Gets tags from all images on a user's profile and aggregates them.
 * @param images
 * @param masterList
 * @returns a master list of all tags from all pictures on a user's profile
 */
function aggregateTags(images, masterList) {
    for(var index in images) {
        var image  = images[index];
        var imageTags = getTags(image);
        merge(imageTags, masterList);
    }
    return masterList;
}

function getTags(image) {}

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
        userTags['set_size']++;
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
    return (similarity / avgSize) * 100;
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
 * @returns a value that represents how similar the two frequencies are
 */
function compare(frequency1, frequency2) {
    if (Math.abs(frequency1 - frequency2) < 0.1) {
        return 1.0;
    } else if (Math.abs(frequency1 - frequency2) < 0.2) {
        return 0.5;
    } else {
        return 0.0;
    }
}
