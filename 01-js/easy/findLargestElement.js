/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
function max(i,j){
    if(i>j){
        return i;
    }
    return j;
}
function findLargestElement(numbers) {
    let maxi = numbers[0]
    for(let i=1; i<=numbers.length;i++ )
    {
        if(numbers[i-1] <= numbers[i]){
            maxi = max(maxi, numbers[i])
        }
    }
    return maxi;
}

module.exports = findLargestElement;