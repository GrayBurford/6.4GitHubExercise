const child = document.getElementById('child');
const parent = document.getElementById('parent');
const grandparent = document.getElementById('grandparent');


// const change = function changeBackground (e) {
//     console.log(e.srcElement.id);
// }

child.addEventListener('click', function () {
    child.style.backgroundColor = 'purple';
});

parent.addEventListener('click', function () {
    parent.style.backgroundColor = 'pink';
});

grandparent.addEventListener('click', function () {
    grandparent.style.backgroundColor = 'magenta';
});

// document.addEventListener('click', function () {
//     console.log('This is the body')
// })