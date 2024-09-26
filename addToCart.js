import { getCartProductFromLS } from './getCartProductFromLS';
import { UpdateCartValue } from './UpdateCartValue';
import { showToast } from './vite-project/showToast';


getCartProductFromLS();


export const addToCart = (event, id, stock) => {

    let arrLocalStorageProduct = getCartProductFromLS();


    const currentProductElem = document.querySelector(`#card${id}`);

    let quantity = currentProductElem.querySelector(".productQuantity").innerText;

    let price = currentProductElem.querySelector(".productPrice").innerText;

    price = price.replace("₹", "");

    let existingProd = arrLocalStorageProduct.find((curprod) => curprod.id === id);

    if (existingProd && quantity > 1) {

        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);
        let updatedCart = { id, quantity, price, };


        updatedCart = arrLocalStorageProduct.map((curProd) => {

            return curProd.id === id ? updatedCart : curProd;

        });
        localStorage.setItem('CartProductLS', JSON.stringify(updatedCart));

        // show toast when product added to the cart

        showToast("add", id);


    }

    if (existingProd) {
        return false;
    }
    price = Number(price * quantity);
    quantity = Number(quantity);



    arrLocalStorageProduct.push({ id, quantity, price });
    localStorage.setItem('CartProductLS', JSON.stringify(arrLocalStorageProduct));



    //update the cart button value

    UpdateCartValue(arrLocalStorageProduct);

    // show toast when product added to the cart
    showToast("add", id);
};