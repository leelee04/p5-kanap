//- Calcul du total panier
function getNumberProduct() {
    let basket = getBasket();
    let number = 0;
    for (let product of basket) {
      number += product.quantity;
    }
    return number;
  }
  
  function getNumberPrice() {
    let basket = getBasket();
    let total = 0;
    for (let product of basket) {
      total += product.quantity * product.price;
    }
    return total;
  }
  