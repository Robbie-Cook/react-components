import produce from "immer";
import * as ActionTypes from "Redux/ActionTypes"

const themeReducer = produce((draft, action) => {
  switch (action.type) {
    case RECEIVE_PRODUCTS:
      action.products.forEach(product => {
        draft[product.id] = product;
      });
  }
});

export default themeReducer;
