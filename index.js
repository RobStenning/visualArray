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
    myArray.push('X');
    refreshArray();
}

function unshiftArray(){
    myArray.unshift('Y');
    refreshArray();
}

function insertArray(){
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
    refreshArray();
}

function shiftArray(){
    myArray.shift();
    refreshArray();
}

function removeFromArray(){
    refreshArray();
}


//general functionality

const addRange = document.getElementById('addRange');
const removeRange = document.getElementById('removeRange');
const range = document.getElementsByName('range')

function selectRange(){
    addRange.innerHTML = '';
    removeRange.innerHTML = '';
    let i = 0;
    do {
        let addOption = new Option(`${i}`, `${i}`);
        let removeOption = new Option(`${i}`, `${i}`);
        i += 1;
        removeRange.appendChild(addOption);
        addRange.appendChild(removeOption);      
    } while (i < myArray.length)
}

function refreshArray(){
    visualArray.innerHTML = myArray
    visualLength.innerHTML = myArray.length
    console.log(`my array is ${myArray.length} long`)
    selectRange();
}