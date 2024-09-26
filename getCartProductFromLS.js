import { UpdateCartValue } from "./UpdateCartValue";

export const getCartProductFromLS = () =>{
    let CartProducts = localStorage.getItem('CartProductLS')

    if(!CartProducts){
        return [];
    }

    CartProducts = JSON.parse(CartProducts);

    UpdateCartValue(CartProducts)

    return CartProducts;
}