var arr = [1, 2, 3]
console.log(arr[0])



//Traverse Array

var arr1 = [4, 5, 1, 6, 8, 9]

for (var i = 0; i < arr1.length; i++) {
    console.log(arr1[i])
}

// arr1.push(9)
// arr1.unshift(9)

arr1.splice(3, 0, 9)


console.log(arr1)