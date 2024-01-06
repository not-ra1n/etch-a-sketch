const container = document.querySelector('#container');

let number = 16;

    let fragment = new DocumentFragment();
    let numberOfItems = number;
  
  for (let j = 0; j < number; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < numberOfItems; i++) {
  
      let divElement = document.createElement("div");
      divElement.classList.add("item");
  
      let pElement = document.createElement("p");
  
      divElement.appendChild(pElement);
      fragment.appendChild(divElement);
    }
  
    row.appendChild(fragment);
    container.appendChild(row);
   }


    


function changeGlobal(newVal) {
  number = newVal; // updating the value of the global variable
}

const change = document.querySelector('#change-square');
  change.addEventListener('click', () => {
    changeSquare = prompt("How many squares do you want per side?");
    if (!(changeSquare >= 0 && changeSquare <= 100)) return prompt;
    changeGlobal(changeSquare);
    let items = document.querySelectorAll('.item');
    for (const item of items) {
      item.remove();
    }
    let fragment = new DocumentFragment();
    let numberOfItems = number;
  
  for (let j = 0; j < number; j++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let i = 0; i < numberOfItems; i++) {
  
      let divElement = document.createElement("div");
      divElement.classList.add("item");
  
      let pElement = document.createElement("p");
  
      divElement.appendChild(pElement);
      fragment.appendChild(divElement);
    }
  
    row.appendChild(fragment);
    container.appendChild(row);
   }
  });

  