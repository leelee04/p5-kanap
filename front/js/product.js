// etape 1 recuperer l'identifiant du produit dans l'url de la page (à stoker dans une variable)
//utiliser la fonction url search param (etape 1)
//Etape 2 faire appelle a l'api pour demander les informations du produit. (voir identifiant étape 1)
//utiliser la fonction fetch et passer en parametre de l'identifiant du produit de l'étape 1

let paramsString = window.location.search;
let searchParams = new URLSearchParams(paramsString);
let idProduct = searchParams.get("id");

fetch(`http://localhost:3000/api/products/${idProduct}`)

  .then(function (reponse) {
    if (reponse.ok) {
      return reponse.json(); // Retour de la réponse au format json
    }
  })
  .then(function (product) { // REMPLIR ICI DYNAMIQUEMENT LE DOM PRODUCT.HTML



    //etape 2
    let titleProduct = document.getElementById("title"); 

    let colorProduct = document.getElementById("colors");
    let imgProduct = document.querySelector(".item__img");
    let descriptionProduct = document.getElementById("description");
    let priceProduct = document.getElementById("price");


    titleProduct.innerHTML = product.name;

    priceProduct.innerHTML = `${product.price}`;


    descriptionProduct.innerHTML = `${product.description}`;


    imgProduct.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    let tableau = product.colors;
   
	for (let i = 0; i < tableau.length; i++) {
      let color = document.createElement('option');
	  colorProduct.appendChild(color);
	  
	  color.textContent = tableau[i]; 
	  
      
 

    }
    let addbutton = document.getElementById("addToCart");

    addbutton.addEventListener("click", function () {
      addBasket(product);

    });


  })
  .catch(function (erreur) {
    console.log("Message d'erreur : \n" + erreur);
    alert("Une erreur est survenue lors du chargement");
  });


function saveBasket(basket) {
  localStorage.setItem("basket", JSON.stringify(basket));
  console.log(basket);
}
//- Récupération d'un panier dans le local
function getBasket() {
  let basket = (localStorage.getItem("basket"));
  if (basket == null) {
    return [];

  } else {
    return JSON.parse(basket);

  }

}
//- Ajout d'un produit au panier 
function addBasket(product) {
  let basket = getBasket();
  let productFound = basket.find(p => p.id == product.id);
  if (productFound != undefined) {

  } else {
    product.quantity = document.getElementById("quantity").value;

    //créé un objet ou un tableau contenant l'identifiant du produit la couleur selectionner dans la liste et la quantité saisie


let IDproduct = idProduct;
let COLORproduct = document.getElementById("colors").value;
let QUproduct = product.quantity;
console.log(IDproduct);
console.log(COLORproduct);
    let produit = { id :IDproduct, color:COLORproduct, quantity:QUproduct};
    basket.push(produit);
  }
  basket.push(product);
  saveBasket(basket);
  //redicrection page cart.html
  //window.location.href = 'file:///C:/p5%20javascript/P5-Dev-Web-Kanap-master/front/html/cart.html';

}

//- Suppression d'un produit au panier 
function removeFromBasket(product){
let basket = getBasket();
basket = basket.filter(p => p.id = product.id);
saveBasket(basket);
}
//- Modification de la quantité d'un produit 

function changeqty(product, quantity) {
  let basket = getBasket();
  let productFound = basket.find(p = p.id == product.id);
  if (productFound != undefined) {
    productFound.quantity + -quantity;
    if (productFound.quantity <= 0) {
      removeFromBasket(productFound);
    } else {
      saveBasket(basket);
    }
  }
}

