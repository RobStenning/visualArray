console.log('welcome to array builder')
const myArray = new Array();
const visualArray = document.getElementById('array');
visualArray.innerHTML = 'use the buttons to amend the array'

const pushButton = document.getElementById('push');
pushButton.addEventListener("click", pushToArray)

function pushToArray(){
    myArray.push('x')
    console.log('push button')
    console.log(myArray)
    refreshArray();
}




function refreshArray(){
    visualArray.innerHTML = myArray
}
