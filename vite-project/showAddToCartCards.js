
const cartElement = document.querySelector("#productCartContainer");
const TemplateContainer = document.querySelector("#productCartTemplate");
import { getCartProductFromLS } from "../getCartProductFromLS";
import products from "./api/products.json";
import {fetchQuantityFromCartLS} from './fetchQuantityFromCartLS';
import { removeProductFromCart } from './removeProductFromCart';
import { IncrementDecrement } from './IncrementDecrement';
import { updateCartProductTotal } from './updateCartProductTotal';

let cartProducts = getCartProductFromLS();

let filterProducts = products.filter((curProd)=>{
    return cartProducts.some((curElem)=> curElem.id === curProd.id);
});


const showCartProduct = () =>{
    filterProducts.forEach((curProd)=>{

        const {  category, id, image, name, price, stock } = curProd;
       
        let productClone = document.importNode(TemplateContainer.content, true);

        let LSActualData = fetchQuantityFromCartLS(id, price)


        productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
        productClone.querySelector(".category").textContent = category;
        productClone.querySelector(".productName").textContent = name;
        productClone.querySelector(".productImage").src = image;
        productClone.querySelector(".productPrice").textContent = LSActualData.price;
        productClone.querySelector(".productQuantity").textContent = LSActualData.quantity;


        productClone.querySelector(".stockElement").addEventListener("click", (event) =>{

            IncrementDecrement(event, id, stock, price);
        });


        productClone.querySelector('.remove-to-cart-button').addEventListener("click", () =>{

            removeProductFromCart(id);
        })
        cartElement.appendChild(productClone);
    });
};

// To update the addTocart Page 


showCartProduct();

updateCartProductTotal();