export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find( cartItem => 
    cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map( cartItem => 
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
      )
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
 };

 export const removeItemFromCart = (cartItems, cartItemToARemove) => {
  const existingCartItem = cartItems.find( cartItem => 
    cartItem.id === cartItemToARemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter( cartItem => cartItem.id !== cartItemToARemove.id);
  }

  return cartItems.map( cartItem =>
    cartItem.id === cartItemToARemove.id 
    ? { ...cartItem, quantity: cartItem.quantity - 1 }
    : cartItem
  );
};
