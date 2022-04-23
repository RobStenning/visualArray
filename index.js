console.log('welcome to array builder')
const myArray = new Array();
const visualArray = document.getElementById('array');
visualArray.innerHTML = 'use the buttons to amend the array'
const visualLength = document.getElementById('length');
visualLength.innerHTML = myArray.length;

//add items buttons
const pushButton = document.getElementById('push');
pushButton.addEventListener("click", pushToArray)

const unshiftButton = document.getElementById('unshift');
unshiftButton.addEventListener("click", unshiftArray)

const insertButton = document.getElementById('insert');
insertButton.addEventListener("click", insertArray)

function pushToArray(){
    myArray.push('x');
    console.log('push button');
    refreshArray();
}

function unshiftArray(){
    console.log('unshift button');
    myArray.unshift('1');
    refreshArray();
}

function insertArray(){
    console.log('insert button');
    refreshArray();
}

//remove items buttons
const popButton = document.getElementById('pop');
popButton.addEventListener("click", popFromArray)

const shiftButton = document.getElementById('shift');
shiftButton.addEventListener("click", shiftArray)

const removeButton = document.getElementById('remove');
removeButton.addEventListener("click", removeFromArray)

function popFromArray(){
    myArray.pop();
    console.log('pop button')
    refreshArray();
}

function shiftArray(){
    myArray.shift();
    console.log('shift button')
    refreshArray();
}

function removeFromArray(){
    //myArray.shift();
    console.log('remove button')
    refreshArray();
}


//general functionality

function refreshArray(){
    visualArray.innerHTML = myArray
    visualLength.innerHTML = myArray.length
}
