// BEGIN
function cloneShallow(obj) {
    const newObj = {}
    for (let i in obj) {
        newObj[i] = JSON.parse(JSON.stringify(obj[i]))
    }
    return newObj
}
export default cloneShallow;
// END
