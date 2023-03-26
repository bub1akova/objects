import _ from 'lodash';

// BEGIN
function fill(obj1, array, obj2) {
    let obj = {}
    if (array.length == 0) {
        for (let i in obj2) {
            obj1[i] = obj2[i]
        }
    } else {
        for (let i of array) {
            obj[i] = obj2[i]
            obj1[i] = obj[i]
        }
    }
    return obj1
}
export default fill
// END