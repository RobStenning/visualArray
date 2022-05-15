console.log('welcome to array builder')
const myArray = new Array();
const visualArray = document.getElementById('arrayNote');
visualArray.innerHTML = `this is your array: [use the buttons to amend the array]`
const visualLength = document.getElementById('length');
visualLength.innerHTML = myArray.length;

//tippy global - all tool tips handeled by Tippy
tippy.setDefaultProps({delay: [300, 0]});

//add items buttons
const pushButton = document.getElementById('push');
pushButton.addEventListener("click", pushToArray)
tippy('#push', {
    content: '.push inserts an umbrella emoji at the end of the array',
});

const unshiftButton = document.getElementById('unshift');
unshiftButton.addEventListener("click", unshiftArray)
tippy('#unshift', {
    content: '.unshift inserts a lightning bolt emoji at the beggining of the array',
});

const insertButton = document.getElementById('insert');
insertButton.addEventListener("click", insertArray)
tippy('#insert', {
    content: 'Insert at uses the .splice method to insert a snowman emoji at the chosen index (use the dropdown selector)',
});

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
    myArray.splice(insertAt, 0, '&#9924')
    refreshArray();
}

//remove items buttons
const popButton = document.getElementById('pop');
popButton.addEventListener("click", popFromArray)
tippy('#pop', {
    content: '.pop removes from the end of the array',
});

const shiftButton = document.getElementById('shift');
shiftButton.addEventListener("click", shiftArray)
tippy('#shift', {
    content: '.shift removes from the beginning of the array',
});

const removeButton = document.getElementById('remove');
removeButton.addEventListener("click", removeFromArray)
tippy('#remove', {
    content: 'Remove at uses the .splice to remove from the chosen index (use the dropdown selector)',
});

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
    myArray.splice(removeAt, 1)
    refreshArray();
}


//general functionality
function arrayNote(){
    if(myArray.length === 0) {
    visualArray.innerHTML = `this is your array: [use the buttons to amend the array]`
    document.getElementById('indexOf').innerHTML = ''
} else {
    visualArray.innerHTML = `this is your array:`
}}

const range = document.getElementsByName('range')

function updateSelectRange(){
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
    document.getElementById('indexOf').innerHTML = ''
    do {
        const indexOf = document.getElementById('indexOf')
        indexArray.push(i);
        let div = document.createElement('div');
        div.className = "column";
        document.getElementById('indexOf').appendChild(div)
        div.innerHTML = i
        i += 1;
    } while (i < myArray.length)
}

function testScript(){
    document.getElementById('testarea').innerHTML = ''
    
    myArray.forEach((item) => {
        let div = document.createElement('div');
        div.className = "column";
        div.innerHTML = `${item}`;
        document.getElementById('array').appendChild(div)
        let divIndex = document.createElement('divIndex');
        document.getElementById('indexOf').appendChild(divIndex)
    })
}

function disableAddButtons(){
    pushButton.removeEventListener("click", pushToArray)
    unshiftButton.removeEventListener("click", unshiftArray)
    insertButton.removeEventListener("click", insertArray)
}

function enableAddButtons(){
    pushButton.addEventListener("click", pushToArray)
    unshiftButton.addEventListener("click", unshiftArray)
    insertButton.addEventListener("click", insertArray)
}

function windowChecker(){
    if (size === 'medium' && myArray.length > 15) {
        disableAddButtons()
    } else if(size === 'large' && myArray.length > 20) {
        disableAddButtons()
    } else if(size === 'extraLarge' && myArray.length > 30){
        disableAddButtons()
    } else {
        enableAddButtons()
    }
    console.log(size)
}
let size = null;

window.addEventListener('resize', windowSize);
function windowSize(){
    if (window.outerWidth < 640) {
        size = 'small'
    } else if (window.outerWidth < 800) {
        size = 'medium'
    } else if (window.outerWidth < 1050){
        size = 'large'
    } else {
        size = 'extraLarge'
    }
windowChecker()
}

function refreshArray(){
    visualLength.innerHTML = myArray.length
    document.getElementById('array').innerHTML = ''
    myArray.forEach((item) => {
        let div = document.createElement('div');
        div.className = "column";
        div.innerHTML = `${item}`;
        document.getElementById('array').appendChild(div)
        let divIndex = document.createElement('divIndex');
        document.getElementById('indexOf').appendChild(divIndex)
    })
    updateSelectRange();
    indexOf();
    arrayNote();
    windowSize();
}