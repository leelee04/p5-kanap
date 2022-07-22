// récupérer le panier (l’array) via localStorage.
let productInLocalStorage = JSON.parse(localStorage.getItem("basket"));
console.log(productInLocalStorage);

//Affichage des éléments du panier
for (let i = 0; i < productInLocalStorage.length; i++) {


    let cartItems = document.getElementById("cart__items");
    
    // on ajoute l'element article
        
        
        //créé chaque élement séparément sans apenchild 

        // on ajoute l'element article
        let cartArticles = document.createElement("article");
       
        cartArticles.setAttribute("data-id", productInLocalStorage[i].id);
        cartArticles.setAttribute("data-color", productInLocalStorage[i].color)
        cartArticles.className = "cart__item";
        cartItems.appendChild(cartArticles);

// on ajoute l'element div cart__item__img
        let cartdiv_img = document.createElement("div");
        cartdiv_img.className = "cart__item__img";
        cartArticles.appendChild(cartdiv_img);
// on ajoute l'element img seul
let imgCard = document.createElement("img");
        imgCard.setAttribute('src', productInLocalStorage[i].imageurl);
        imgCard.setAttribute('alt', productInLocalStorage[i].altTxt);
        console.log(productInLocalStorage[i]);
        cartdiv_img.appendChild(imgCard);

//on ajoute une div (cart__item__content)
        let cartContent_item = document.createElement("div");
        cartContent_item.className = "cart__item__content";
        cartArticles.appendChild(cartContent_item)

//on ajoute une div (cart__item__content__description)
let divDescription_item = document.createElement("div");
divDescription_item.className = "cart__item__content__description";
cartArticles.appendChild(divDescription_item) ;   

// on ajoute h2 qui va contenir le nom du produit
let h2_nameProduit = document.createElement("h2");
divDescription_item.appendChild(h2_nameProduit);
h2_nameProduit.innerHTML = productInLocalStorage[i].name;

// on ajoute p qui va contenir le paragraphe (couleur du produit)
let color_p_Description = document.createElement("p");
divDescription_item.appendChild(color_p_Description);
color_p_Description.innerHTML = productInLocalStorage[i].color;

//on ajout p qui va contenir le prix 
let price_description = document.createElement("p");
divDescription_item.appendChild(price_description);
price_description.innerHTML = productInLocalStorage[i].price + "€";

// on rajoute une div de cart__item__content__settings

let divItem_settings = document.createElement("div");
divItem_settings.className = "cart__item__content__settings";

//on rajoute une div de cart__item__content__settings__quantity
let divQté_item = document.createElement("div");
divQté_item.className = "cart__item__content__settings__quantity";
divItem_settings.appendChild(divQté_item);

//on rajoute la quantité p
let qté_p = document.createElement("p");
divItem_settings.appendChild(qté_p);
qté_p.innerHTML = "Qté : ";

// dans l'input il va obtenir la quantité
let input_qté = document.createElement("input");
divItem_settings.appendChild(input_qté);
input_qté.value = productInLocalStorage[i].addQuantity; 
input_qté.className = "itemQuantity";
input_qté.setAttribute("type", "number");
input_qté.setAttribute("min", "1");
input_qté.setAttribute("max", "100");
input_qté.setAttribute("name", "itemQuantity");

//on rajoute une div (supprimer) (cart__item__content__settings__delete)
let cart_itemDelete = document.createElement("div");
cart_itemDelete.className= "deleteItem";
divItem_settings.appendChild(cart_itemDelete);


        
        //ajouter chaque élement dans son parent (element parent (class))


       


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