//react
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// don't need when don't use in this file import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
//routes
import AppRouter from './routers/AppRouter';

//----
// ------REDUX------
//----

//store
import configureStore from './store/configureStore';
//actions expenses and filters
import { addExpense, removeExpense, editExpense } from './actions/expenses.js';
import { setTextFilter, sortByDate, sortByAmount ,setStartDate, setEndDate } from './actions/filters.js';
//selectors
import getVisibileExpenses from './selectors/expenses.js'

// ------CS------
//css
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.subscribe(() => {
  const state = store.getState();
  const visibleExtenses = getVisibileExpenses(state.expenses, state.filters);
  console.log(visibleExtenses);
});

store.dispatch(addExpense({description: 'Water bill', amount: 500}));
store.dispatch(addExpense({description: 'Gas bill', amount: 300}));
store.dispatch(addExpense({description: 'Cat bill', amount: 900}));
store.dispatch(addExpense({description: 'Rent bill', amount: 1250, createdAt: 199999}));

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

