import React from 'react'

const ExpenseItem = ({ expense, onDelete }) => {
  const dateObj = new Date(expense.date)
  const formattedDate = dateObj.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
  return (
    <div className='flex justify-between items-center border p-2 rounded'>
      <div>
        <span className="font-medium">{expense.title + " "}</span>
        <span className="text-green-600 font-bold">₹{expense.amount}</span>
        <div className="text-xs text-gray-400">{formattedDate}</div>
      </div>
      <button
        onClick={() => onDelete(expense.id)}
        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    </div>
  )
}

export default ExpenseItem
