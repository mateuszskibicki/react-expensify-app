import { createStore } from 'redux';

//action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  //incrementBy: incrementBy
  incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({setCount}) => ({
  type: 'SET',
  setCount
});

const resetCount = () => ({
  type: 'RESET',
});


// Reducers
//1. reducers are pure functions

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {

    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };

    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };

    case 'SET':
      return {
        count: action.setCount
      };

    case 'RESET':
      return {
        count: 0
      };

    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

//increment count
store.dispatch(decrementCount( {decrementBy: 99999} ));

//unsubscribe();

store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount( {setCount: 999} ));

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 1000 }));