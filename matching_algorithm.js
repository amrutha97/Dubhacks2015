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
        var tag = userTags[index];
        if(tagMap.hasOwnProperty(tag)) {
            userTags[tag]++;
        } else {
            userTags[tag] = 1;
        }
    }
    return userTags;
};

var computeAverageFrequencies = function(userTags, totalPhotos) {
    for (var tag in userTags) {

    }
}



var compare = function(user1Tags, user2Tags) {

}
