// BEGIN
function get(obj, array) {
    let obj1 = {}
    for (let i in obj) {
        obj1[i] = obj[i]
    }
    for (let i of array) {
        if (Object.hasOwn(obj1, i)) {
            obj1 = obj1[i]
        } else return null
    }
    return obj1
}
export default get
// END