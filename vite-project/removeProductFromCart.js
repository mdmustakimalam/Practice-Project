import { UpdateCartValue } from "../UpdateCartValue";
import { getCartProductFromLS } from '../getCartProductFromLS';
import { showToast } from './showToast';

export const removeProductFromCart = (id) =>{

    let cartProducts = getCartProductFromLS();

    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem('CartProductLS', JSON.stringify(cartProducts));

    
    let removeDiv = document.getElementById(`card${id}`)

    if(removeDiv){
        removeDiv.remove();

        showToast("delete", id);
    }

    UpdateCartValue(cartProducts);
};