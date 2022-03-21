let product = [

{
    name: "Toothbrush ",
    description : "Nice toothbrush ",
    price: 100,
    image :

},

{

    name: "Toothbrush ",
    description : "Nice toothbrush ",
    price: 100,
    image :
},
   
];
    
let shoppingCart = JSON.parse(localStorage.getItem(shoppingCart))|| [];
function outputproduct(product){
    let newDiv = document.createElement("div");
    newDiv.classList.add("product");

    let newHeading = document.createElement("h2");
    newHeading.innerHTML= product.name;
    newDiv.append(newHeading);

    let newDesc= document.createElement("p");
    newDesc.innerHTML=product.name;
    newDiv.append(newHeading);

    let newBuyBotton = document.createElement("button");
    newBuyBotton.innerHTML= product.price;
    newDiv.append(newBuyButton);
    newBuyButton.addEventListener("click", buyItem);

    return newDiv;

}


function buyItem(event) {
    shoppingCart.push(event.target.getAttribute("data-product"));
    console.log(shoppingCart);
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }

let body = document.querySelector("body");

for (let i = 0; i< products.length; i ++);
{
    body.append(outputProduct(product[i]));
  }