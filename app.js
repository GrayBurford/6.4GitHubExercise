const child = document.getElementById('child');
const parent = document.getElementById('parent');
const grandparent = document.getElementById('grandparent');


const change = function changeBackground (e) {
    console.log(e.srcElement.id)
}

child.addEventListener('click', change);
parent.addEventListener('click', change);
grandparent.addEventListener('click', change);
document.addEventListener('click', function () {
    console.log('This is the body')
})