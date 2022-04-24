console.log('welcome to array builder')
const myArray = new Array();
const visualArray = document.getElementById('array');
visualArray.innerHTML = '[use the buttons to amend the array]'
const visualLength = document.getElementById('length');
visualLength.innerHTML = myArray.length;

//add items buttons
const pushButton = document.getElementById('push');
pushButton.addEventListener("click", pushToArray)

const unshiftButton = document.getElementById('unshift');
unshiftButton.addEventListener("click", unshiftArray)

const insertButton = document.getElementById('insert');
insertButton.addEventListener("click", insertArray)

const addRange = document.getElementById('addRange');

function pushToArray(){
    myArray.push('&#9748');
    refreshArray();
}

function unshiftArray(){
    myArray.unshift('&#9889');
    refreshArray();
}

function insertArray(){
    let insertAt = addRange.options[addRange.selectedIndex].innerHTML
    console.log(`inserting at index of ${insertAt}`)
    myArray.splice(insertAt, 0, '&#9924')
    refreshArray();
}

//remove items buttons
const popButton = document.getElementById('pop');
popButton.addEventListener("click", popFromArray)

const shiftButton = document.getElementById('shift');
shiftButton.addEventListener("click", shiftArray)

const removeButton = document.getElementById('remove');
removeButton.addEventListener("click", removeFromArray)

const removeRange = document.getElementById('removeRange');

function popFromArray(){
    myArray.pop();
    refreshArray();
}

function shiftArray(){
    myArray.shift();
    refreshArray();
}

function removeFromArray(){
    let removeAt = removeRange.options[removeRange.selectedIndex].innerHTML
    console.log(`removing at index of ${removeAt}`)
    myArray.splice(removeAt, 1)
    refreshArray();
}


//general functionality

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
    } while (i < myArray.length + 1)
}

function indexOf(){
    let i = 0;
    const indexArray =new Array();
    indexArray.length = 0;
    do {
        const indexOf = document.getElementById('indexOf')
        indexArray.push(i);
        i += 1;
        indexOf.innerHTML = `[${indexArray}]`;
    } while (i < myArray.length)
}

function refreshArray(){
    visualArray.innerHTML = `[ ${myArray} ]`
    visualLength.innerHTML = myArray.length
    console.log(`my array is ${myArray.length} long`)
    selectRange();
    indexOf();
}