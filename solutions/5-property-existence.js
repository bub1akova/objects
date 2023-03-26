import _ from 'lodash';

// BEGIN
function countWords(words) {
    const wordsLower = words.toLowerCase()
    const word = _.words(wordsLower)
    const obj = {}
    if (words.length == 0) return {}
    for (let i of word) {
        if (obj[i]) {obj[i] = obj[i] + 1} 
        else {obj[i] = 1}
    } 
    return obj
}
export default countWords
// END