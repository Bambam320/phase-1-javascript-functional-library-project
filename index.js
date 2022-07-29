function myEach (collection, funct) {
    Array.isArray(collection) ? arrayEach() : objectEach() 
    function arrayEach() {
        // console.log("I AM ARRAY EACH AND WORKING", collection)
        collection.forEach(val => funct(val))
    }
    function objectEach() {
        // console.log("I AM OBJECT EACH AND WORKING", collection)
        for (const key in collection) {
            funct(collection[key])
        }
    }
    return collection
}


function myMap (collection, funct) {
    function arrayMap() {
        let newArrayByMap = collection.map(val => funct(val))
        // console.log("MY MAP ====>", newArrayByMap)
        return newArrayByMap
    }
    function objectMap() {
        let newArrByObj = []
        for (let key in collection) {
            newArrByObj.push(funct(collection[key]))
        }
        // console.log("MY OBJ MAP ===>", newArrByObj)
        return newArrByObj
    }
    return Array.isArray(collection) ? arrayMap() : objectMap() 
}

//myReduce([1, 2, 3], function(acc, val, collection) { return acc + val; }, 10);
//myReduce({one: 1, two: 2, three: 3}, function(acc, val, collection) { return acc + val; });

function myReduce (collection, funct, acc) {
    let cleanCollection = [...collection]
    function arrayReduce() {
        if (acc > 2) {
            let newAns = collection.reduce(funct, acc)
            return newAns
        } else {
            let newAns = collection.reduce(funct)
            return newAns
        }
        console.log(newAns)
    }

    function objectReduce() {
        let newArrByObj = []
        for (let key in collection) {
            newArrByObj.push(collection[key])                    
        }
        // console.log("array ===>", newArrByObj)
        let ans = newArrByObj.reduce(funct);
        // console.log("answer===>", dave)
        return ans
    }
    return Array.isArray(collection) ? arrayReduce() : objectReduce()
}            //reduce(function(previousValue, currentValue, currentIndex) { /* … */ }, initialValue)

// function myReduce (collection, funct, acc) {
//     let copy = Array.isArray(collection) ? [...collection] : Object.values(collection)
//     acc = acc || copy.shift();
//     for (let accessor in copy) {
//         acc = funct(acc, copy[accessor], copy)
//         console.log(copy)
//     }
//     console.log(copy)
//     return acc;
// }

function myFind (collection, callback) {
    let iterable = Array.isArray(collection) ? [...collection] : Object.values(collection)
    return iterable.find(callback)
}

function myFilter(collection, callback) {
    let iterable = Array.isArray(collection) ? [...collection] : Object.values(collection)
    return iterable.filter(callback)
}

function mySize (collection) {
    let iterable = Array.isArray(collection) ? [...collection] : Object.values(collection)
    return iterable.length
}

function myFirst (array, num) {
    if (num === undefined) {
        return array.slice(0, 1).shift()
    } else {
        return array.slice(0, num)
    }
}

function myLast (array, num) {
    if (num === undefined) {
        return array.slice(-1).shift()
    } else {
        return array.slice(-num)
    }
}

function myKeys (obj) {
    return Object.keys(obj)
}

function myValues (obj) {
    return Object.values(obj)
}

function mySortBy (array, callback) {
    return array.sort((a,b) => (callback(a) - callback(b)))
}


// Return value:
// - A new array
// Behavior:
// Returns a sorted copy of `array`, ranked in ascending order by the results of
// running each value through `callback`. The **values from the original array**
// (not the transformed values) should be returned in the sorted copy, in
// ascending order by the value returned by `callback`.
// **Note:** The point of this exercise is not to write your own sorting algorithm
// and you are free to use the native [JS
// sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_non-ascii_characters).
// You **will**, however, need to construct your `compareFunction` (see the
// documentation) so that it will handle either numeric or string values.
// Example function calls:
// ```javascript
// mySortBy([1, 2, 3, 4, 5, 6], function(num){ return Math.sin(num) });
// => [5, 4, 6, 3, 1, 2];
// const stooges = [{name: 'moe', age: 40}, {name: 'larry', age: 50}, {name: 'curly', age: 60}];
// mySortBy(stooges, function(stooge){ return stooge.name });
// => [{name: 'curly', age: 60}, {name: 'larry', age: 50}, {name: 'moe', age: 40}];










