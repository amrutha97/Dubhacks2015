/**
 * Merges the tags of an individual image with the master list of tags for
 * a particular user.
 * @param imageTags a list of tags for an individual image
 * @param userTags a map which contains all of a users tags and the
 *        frequency of each tag
 * @returns a map with entries from tagList merged into tagMap
 */
var merge = function(imageTags, userTags) {
    for (var index in imageTags) {
        // hacking tag b/c js is stupid and gets the index not the var
        var tag = userTags[index];
        if(tagMap.hasOwnProperty(tag)) { // checks if the tag exists already
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
}



var compare = function(user1Tags, user2Tags) {

}
