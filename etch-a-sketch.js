const container = document.querySelector('#container');

//const row1 = document.querySelector('#row1')
//const row2 = document.querySelector('#row2')
//const row3 = document.querySelector('#row3')
//const row4 = document.querySelector('#row4')
//const row5 = document.querySelector('#row5')
//const row6 = document.querySelector('#row6')
//const row7 = document.querySelector('#row7')
//const row8 = document.querySelector('#row8')
//const row9 = document.querySelector('#row9')
//const row10 = document.querySelector('#row10')
//const row11 = document.querySelector('#row11')
//const row12 = document.querySelector('#row12')
//const row13 = document.querySelector('#row13')
//const row14 = document.querySelector('#row14')
//const row15 = document.querySelector('#row15')
//const row16 = document.querySelector('#row16')


function generateContent(e) {
    let fragment = new DocumentFragment();
    let numberOfItems = 256;
  
    for (let i = 0; i < numberOfItems; i++) {
  
      let divElement = document.createElement("div");
      divElement.classList.add("item");
  
      let pElement = document.createElement("p");
  
      divElement.appendChild(pElement);
      fragment.appendChild(divElement);
    }
  
    container.appendChild(fragment);
  }

  container.appendChild(generateContent());

  

