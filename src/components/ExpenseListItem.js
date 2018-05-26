//desc, amount, createdAt
import React from 'react';
import {Link} from 'react-router-dom';

const ExpenseListItem = ({description, amount, id, createdAt}) => (
  <div>
          <div>
            <h1>{description} ----- <Link to={'/edit/'+id}>EDIT</Link></h1>
            <h3>{amount}</h3>
            <p>Created at : {createdAt}</p>
          </div>
  </div>
);

export default ExpenseListItem;