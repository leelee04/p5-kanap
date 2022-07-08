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

    let colorProduct = document.getElementById("color");
    let imgProduct = document.querySelector(".item__img");
    let descriptionProduct = document.getElementById("description");
    let priceProduct = document.getElementById("price");


    titleProduct.innerHTML = product.name;

    priceProduct.innerHTML = `${product.price}`;


    descriptionProduct.innerHTML = `${product.description}`;


    imgProduct.innerHTML = `<img src="${product.imageUrl}" alt="${product.altTxt}">`;
    for (let i = 0; i < colorProduct.length; i++) {
      let color = document.createElement(colorProduct);
      colorProduct.appendChild(color);



    }

  })
  .catch(function (erreur) {
    console.log("Message d'erreur : \n" + erreur);
    alert("Une erreur est survenue lors du chargement");
  });

    
    //Enregistrement d'un panier dans le localstorage 
    function saveBasket(basket){
      localStorage.setItem("basket",Json.stringfy (basket));
    }
    //- Récupération d'un panier dans le local
      function getBasket(){
        let basket = (localStorage.getItem("basket"));
        if(basket == null){
          return [];
  
        }else{
          return Json.parse(basket);
  
        }
        
      }  
      //- Ajout d'un produit au panier 
      function addBasket(produit){
        let basket = getBasket();
        basket.push(produit);
        saveBasket(basket);
  
      }
    
  
  
    //- Suppression d'un produit au panier 
    //- Modification de la quantité d'un produit 
    //- Calcul du total panier
  
  



















