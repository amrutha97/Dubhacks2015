/**
 * Merges the tags of an individual image with the master list of tags for
 * a particular user and returns the updated master list.
 * @param imageTags a list of tags for an individual image
 * @param userTags a map which contains all of a users tags and the
 *        frequency of each tag
 * @returns a map with entries from tagList merged into tagMap
 */
var merge = function(imageTags, userTags) {
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
};

/**
 * Computes the average frequency of each tag associated with a user's images.
 * @param userTags a map which contains all of a users tags and the
 *        frequency of each tag
 * @param totalPhotos the total number of images a user has on their profile
 * @returns a map with the average frequency of each tag associated with a user
 */
var computeAverageFrequencies = function(userTags, totalPhotos) {
    for (var tag in userTags) {
        userTags[tag] /= totalPhotos;
    }

    return userTags;
};

function computeSimilarity(firstAvgs, secondAvgs) {    
    var compatibility = 0;
    for (var avg in firstAvgs) {      
        if(//comparing  
           //
        ) {
            compatibility++;
        }
    }
    return compatibility;            
}

/**
 * Compares the tag frequency of two users and returns a value (0, 0.5, or 1.0)
 * based
 * @param frequency1 the frequency of a given tag for user 1
 * @param frequency2 the frequency of a given tag for user 2
 * @returns a value that represents how similar the two frequencies are
 */
var compare = function(frequency1, frequency2) {
    if (Math.abs(frequency1 - frequency2) < 0.1) {
        return 1.0;
    } else if (Math.abs(frequency1 - frequency2) < 0.5) {
        return 0.5;
    } else {
        return 0.0;
    }
};