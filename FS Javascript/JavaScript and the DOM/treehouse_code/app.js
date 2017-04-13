const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const listUl = listDiv.querySelector('ul');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
// const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const lis = listUl.children;


function attachListItemButtons(li) {
  let up = document.createElement('button');
  up.className = 'up';
  up.textContent = 'Up';
  li.appendChild(up);
  let down = document.createElement('button');
  down.className = 'down';
  down.textContent = 'Down';
  li.appendChild(down);
  let remove = document.createElement('button');
  remove.className = 'remove';
  remove.textContent = 'Remove';
  li.appendChild(remove);
}

for (let i = 0; i < lis.length; i += 1) {
  attachListItemButtons(lis[i]);
}

// for (let i = 0; i < listItems.length; i += 1) {
//     listItems[i].addEventListener('mouseover', () => {
//       listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });

//     listItems[i].addEventListener('mouseout', () => {
//       listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// };

    listUl.addEventListener('click', (event) => {
      if (event.target.tagName == 'BUTTON') {
        // event.target.textContent = event.target.textContent = event.target.textContent.toUpperCase();
        if (event.target.className == 'remove') {
          let li = event.target.parentNode;
          let ul = li.parentNode;
          ul.removeChild(li);
        }
         if (event.target.className == 'up') {
          let li = event.target.parentNode;
          let prevLi = li.previousElementSibling;
          let ul = li.parentNode;
            if(prevLi) {
              ul.insertBefore(li, prevLi);
            }
          }
          if (event.target.className == 'down') {
          let li = event.target.parentNode;
          let nextLi = li.nextElementSibling;
          let ul = li.parentNode;
            if(nextLi) {
              ul.insertBefore(nextLi, li);
            }
          }
      }
    });

    // listDiv.addEventListener('mouseout', () => {
    //   if (event.target.tagName == "LI") {
    //     event.target.textContent = event.target.textContent.toLowerCase();
    //   }
    // });

  // document.addEventListener('click', (event) => {
  //   console.log(event.target);
  // });

  //event.target.tagName

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'Hide list';
    listDiv.style.display = 'block';
  } else {
    toggleList.textContent = 'Show list';                        
    listDiv.style.display = 'none';
  }                         
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0];
  let li = document.createElement('li');
  // li.innerHTML = addItemInput.value + "<button class='up'>Up</button><button class='down'>Down</button><button class='remove'>Remove</button>";
  li.textContent = addItemInput.value;
  attachListItemButtons(li);
  ul.appendChild(li);
  addItemInput.value = '';
});
  
// removeItemButton.addEventListener('click', () => {
//   let ul = document.getElementsByTagName('ul')[0];
//   let li = document.querySelector('li:last-child');
//   ul.removeChild(li);
// });  
  

//function exec(func, arg) {func(arg);}

//Above is passing function in function

//exec(say, 'Hi, there');

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

//https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout


//There are also....

//ParentNode.firstElementChild
//ParentNode.lastElementChild
  
  
  
  