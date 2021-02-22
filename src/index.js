
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = [];
    if(!matrix) return [];
    let newArr = matrix.map(function(item, index) {
        if(index % 2 === 0) {
            item.forEach(element => {
                arr.push(element);
            });
        } else {
            for(let i = item.length - 1; i >= 0; i--) {
                arr.push(item[i]);
            }
        }
    });

    return arr;
}
