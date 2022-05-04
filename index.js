console.log('welcome to array builder')
const myArray = new Array();
const visualArray = document.getElementById('array');
visualArray.innerHTML = '[use the buttons to amend the array]'
const visualLength = document.getElementById('length');
visualLength.innerHTML = myArray.length;

//tippy global
tippy.setDefaultProps({delay: [300, 0]});

//add items buttons
const pushButton = document.getElementById('push');
pushButton.addEventListener("click", pushToArray)

//all tool tips handeled by Tippy
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
    console.log(`inserting at index of ${insertAt}`)
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

function testScript(){
    myArray.forEach((item) => {
        let div = document.createElement('div');
        div.innerText = item;
        document.getElementById('testarea').appendChild(div)
    })
}

function refreshArray(){
    visualArray.innerHTML = `[ ${myArray} ]`
    visualLength.innerHTML = myArray.length
    console.log(`my array is ${myArray.length} long`)
    selectRange();
    indexOf();
    testScript();
}