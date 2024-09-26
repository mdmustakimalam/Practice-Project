const cartValue = document.querySelector("#cartValue");

export const UpdateCartValue = (cartProducts) => {

    return cartValue.innerHTML = `<i class="fa-solid bi bi-cart">${cartProducts.length}</i>`
}