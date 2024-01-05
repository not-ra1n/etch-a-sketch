const container = document.querySelector('#container');

let number = 16;

function generateContent(e) {
    let fragment = new DocumentFragment();
    let numberOfItems = number*number;
  
    for (let i = 0; i < numberOfItems; i++) {
  
      let divElement = document.createElement("div");
      divElement.classList.add("item");
  
      let pElement = document.createElement("p");
  
      divElement.appendChild(pElement);
      fragment.appendChild(divElement);
    }
  
    container.appendChild(fragment);
  }

generateContent();

function changeGlobal(newVal) {
  number = newVal; // updating the value of the global variable
}

const change = document.querySelector('#change-square');
  change.addEventListener('click', () => {
    changeSquare = prompt("How many squares do you want per side?");
    changeGlobal(changeSquare);
    generateContent();
  });
