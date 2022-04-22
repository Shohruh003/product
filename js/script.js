elInput = document.querySelector(".input");
elSendBtn = document.querySelector(".sendBtn");
elUpdateBtn = document.querySelector(".updateBtn");
elList = document.querySelector(".list");


let market = [];



elSendBtn.addEventListener("click", function(e){
  e.preventDefault();

  let products = elInput.value.trim();

  if (products.length > 2){
    market.unshift(products);

    for (let product of products){
      let newLi = document.createElement("li");
      newLi.textContent = product;
      elList.appendChild(newLi);
      newLi.style.fontSize = "30px";
      newLi.style.listStyleType = "none";
      newLi.style.display = "inline-block";
    }
    
  }
  elInput.value = null;
  

})


