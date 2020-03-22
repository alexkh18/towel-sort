
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(!Array.isArray(matrix)) {
        return [];
    } else {
        matrix.forEach((elem,i) => { if(i%2) elem.reverse()});
        return matrix.flat();
    }
}
