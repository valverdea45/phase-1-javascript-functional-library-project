function myEach(collection, callback) {
    const collectionArray = checkIfArray(collection)

   for(const individualElement of collectionArray){
    callback(individualElement)
   }
   return collection
}

function checkIfArray(collection) {
    let collectionArray
    if(typeof collection === `object`){
        collectionArray = Object.values(collection)
    } else {
        collectionArray = collection
    }
    return collectionArray
}

function myMap(collection, callback){
    const collectionArray = checkIfArray(collection)
    let newTransformedArray = []
    for(const individualElement of collectionArray){
        const newElements = callback(individualElement)
        newTransformedArray.push(newElements)
    }
    return newTransformedArray
}

// Action Plan:
// 1. In the case when there is NO acc:
// a. We take the first element of the array and set that as the acc
// b. 
// 2. In the case when there IS acc:
// a. allow callback to do w/e it wants with each element on array
// b. save the single modified element to a variable
// c. save element outside the for of loop
// d. use same element in the for of loop again as accum

function myReduce(collection, callback, accum){
    const collectionArray = checkIfArray(collection)
    if(accum === undefined) {
        accum = collectionArray[0]
        collectionArray.shift();
    }
    for(const individualElement of collectionArray){
        accum = callback(accum, individualElement, collectionArray)
    }
    return accum
}
// console.log(myReduce([1,2,3,4],(acc, val, collection) => (acc + (val * 3),10)))

function myFind(collection, predicate) {
    const collectionArray = checkIfArray(collection)
  for(const individualElement of collectionArray){
    const newElement = predicate(individualElement)
    if(newElement === true){
        return individualElement
    }
  }
}

function myFilter(collection, predicate){
    const collectionArray = checkIfArray(collection)
    const newUpdatedArray = []
    for(const individualElement of collectionArray){
        const newElement = predicate(individualElement)
        if(newElement === true){
            newUpdatedArray.push(individualElement)
        }
    }
    return newUpdatedArray
}

function mySize(collection){
    const collectionArray = checkIfArray(collection)
    const lengthOfArray = collectionArray.length
    return lengthOfArray
}

function myFirst(collectionArray, n){
    if(n === undefined){
        const firstElement = collectionArray[0]
        return firstElement
    } else {
        const firstElements = collectionArray.slice(0,n)
        return firstElements
    }
}

function myLast(collectionArray, n){
    if(n === undefined){
        const lastElement = collectionArray[collectionArray.length - 1]
        return lastElement
    } else {
        const lastElement = collectionArray.slice(collectionArray.length - 3, collectionArray.length)
        return lastElement
    }
}

function myKeys(object){
    const arrayOfObjectKeys = Object.keys(object)
    return arrayOfObjectKeys
}

function myValues(object){
    const arrayOfObjectValues = Object.values(object)
    return arrayOfObjectValues
}

// const array = [1,2,3,10,5,2]
// const arrayLength = array.length
// const lastElement = array.slice(array.length - 3, arrayLength)
// console.log(lastElement)