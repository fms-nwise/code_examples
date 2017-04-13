const myHeading = document.getElementById('myHeading');
const myButton = document.getElementById('myButton');
const myTextInput = document.getElementById('myTextInput');
const orangeThings = document.getElementsByClassName('orange');
const allUls = document.querySelectorAll('ul');
const firstUl = document.querySelector('ul');
const allError = document.querySelectorAll('.error');
const getTitle = document.querySelector('[title=subHead]');
const purpleThings = document.getElementsByTagName('li');
const evens = document.querySelectorAll('li:nth-child(even)');
//nested elements use the > to deliniate a child
const navigationLinks = document.querySelectorAll('nav > ul > li > a');
const thisInput = document.querySelector('input');
const getJank = document.querySelector('.jank');
const myP = document.querySelector('p.description');
const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

for (let i = 0; i < purpleThings.length; i += 1) {
    purpleThings[i].style.color = "purple";
}

for (let i = 0; i < orangeThings.length; i += 1) {
    orangeThings[i].style.color = "orange";
}

for (let i = 0; i < evens.length; i += 1) {
    evens[i].style.bacgroundColor = "lightgray";
}


myButton.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
  getTitle.textContent = getTitle.textContent + ": " + thisInput.value;
  getJank.innerHTML = getJank.innerHTML + "<li>" + thisInput.value + "</li>";
  myP.title = "List Description";
});

toggleList.addEventListener('click', () => {
    if (listDiv.style.display == 'none') {
        toggleList.textContent = 'Hide List';
        listDiv.style.display = 'block';
    } else {
        toggleList.textContent = 'Show List';
        listDiv.style.display = 'none';
    }
    
});

addItemButton.addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    getJank.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[1];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});



//to get or set an element's class you need to use .className
// let inputValue = document.querySelector('input[type=text]').value;
// Node.removeChild() is how you remove an item. ( assume also works as document.removeChild() )
