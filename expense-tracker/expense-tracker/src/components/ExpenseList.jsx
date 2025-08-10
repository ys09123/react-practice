import React from 'react'
import ExpenseItem from "./ExpenseItem"

const ExpenseList = ({ expenses, onDelete }) => {
  return (
    <div className='space-y-2'>
      {expenses.length === 0 ? (
        <p className="text-gray-500 text-center">No expenses yet!</p>
      ) : (
        expenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                expense={expense}
                onDelete={onDelete} 
            />
        ))
      )}
    </div>
  )
}

export default ExpenseList
