// BEGIN
function pick(obj, array) {
    const result = {}
    for (let i in obj) {
        if (array[i] !== undefined) {
            result[i] = obj[i]
        } else if(array.indexOf(i) != -1) {
            result[i] = obj[i]
        }
    }
    return result
}
export default pick
// END