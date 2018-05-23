import {createStore, cobineReducers, combineReducers} from 'redux';
import uuid from 'uuid';
// ACTIONS

// ADD_EXPENSE
const addExpense = (
  { 
    description = '',
    note = '', 
    amount = 0, 
    createdAt = 0
  } = {}
) => ({
  type:'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});


// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});


// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
  sortBy: 'date'
});

// SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
  sortBy: 'amount'
});

// SET_START_DATE
const setStartDate = (startDate = undefined) => ({
  type: 'SET_START_DATE',
  startDate
});

// SET_END_DATE
const setEndDate = (endDate = undefined) => ({
  type: 'SET_END_DATE',
  endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {

    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];

    case 'REMOVE_EXPENSE':
      return state.filter(({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

const filtersReducerDefaultStore = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultStore, action) => {
  switch(action.type) {
    case 'SET_TEXT_FILTER':
      return {... state, text: action.text}

    case 'SORT_BY_DATE':
      return {... state, sortBy: action.sortBy}

    case 'SORT_BY_AMOUNT':
      return {... state, sortBy: action.sortBy}

    case 'SET_START_DATE':
      return {... state, startDate: action.startDate}

    case 'SET_END_DATE':
      return {... state, endDate: action.endDate}

    default:
      return state;
  }
};

//Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

const getVisibileExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

    const descriptionLowercase = expense.description.toLowerCase();

    const textMatch = descriptionLowercase.includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }

    if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

store.subscribe(() => {
  const state = store.getState();
  const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);
  console.log(visibileExpenses);
});

const expenseOne = store.dispatch(addExpense({description: 'hejka mamejka xd', amount: 10000, createdAt: 999}));
const expenseTwo = store.dispatch(addExpense({description: 'rent22', amount: 300, createdAt: -600}));
const expenseThree = store.dispatch(addExpense({description: 'rent33', amount: 800, createdAt: 10000}));


// store.dispatch(removeExpense({ id: expenseThree.expense.id }));


// store.dispatch(editExpense(expenseOne.expense.id, { amount: 99999 }));

// store.dispatch(setTextFilter('EnT')); // text rent
// store.dispatch(setTextFilter('')); // text empty string

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());


// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());


// store.dispatch(setEndDate(1250));
// store.dispatch(setEndDate());



// const demoState = {
//   expenses: [{
//     id: 'asdadsa',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amout: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'date', //date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'papuk',
//   age: 22
// };

// console.log({
//   ...user,
//   location: 'burnley'
// });