import { getCartProductFromLS } from "../getCartProductFromLS"

export const updateCartProductTotal = () =>{


    let productSubTotal = document.querySelector(".productSubTotal");
    let productFinalTotal = document.querySelector(".productFinalTotal");


    let LocalCartProduct = getCartProductFromLS();

    let initialvalue = 0;

    let totalProductPrice = LocalCartProduct.reduce((accum, curElem) => {

        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialvalue);

    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;
}