import { createStore } from "redux";

const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

export const deposit = amount => ({
  type: DEPOSIT,
  amount
});

export const withdraw = amount => ({
  type: WITHDRAW,
  amount
});

const intialState = { balance: 0 };

export const reducer = (state = intialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount }
    case WITHDRAW:
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
}

const store = createStore(reducer)

export default store;
