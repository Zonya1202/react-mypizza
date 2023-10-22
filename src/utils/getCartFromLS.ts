import { calcTotalPice } from './calcTotalPrice';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPice(items);

  return {
    items,
    totalPrice,
  };
};
