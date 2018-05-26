import React from 'react';
import {connect} from 'react-redux';
import ExpenseItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
  <div>
    <h1>Expense list</h1>
    {props.expenses.map((expense) => {
      return <ExpenseItem {...expense} key={expense.id}/>
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
}

export default connect(mapStateToProps)(ExpenseList);