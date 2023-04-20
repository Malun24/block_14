const reverseArray = (arr) => {
    const newArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        newArray.push(arr[i]);
    }

    return newArray;
};

console.log(reverseArray([1, -1, 2, -3, 5, -8, 13]));