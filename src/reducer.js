export const initialState = {
  basket: [
    {
      id: "12423423",
      title:
        "Patek Philippe Nautilus 40MM Perpetual Calendar White Gold Men’s Watch 5740/1G-001",
      price: 200000.0,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61fqFDomAnL._AC_UL480_FMwebp_QL65_.jpg",
    },
    {
      id: "12423423",
      title:
        "Patek Philippe Nautilus 40MM Perpetual Calendar White Gold Men’s Watch 5740/1G-001",
      price: 200000.0,
      rating: 5,
      image:
        "https://m.media-amazon.com/images/I/61fqFDomAnL._AC_UL480_FMwebp_QL65_.jpg",
    },
  ],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn("Cant remove product (id: ${action.id})");
      }
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;
