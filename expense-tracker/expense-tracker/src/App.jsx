import { useState, useEffect } from 'react';
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
  });

  const [filterMonth, setFilterMonth] = useState("")

  // Save to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])


  const addExpense = (expense) =>{
    setExpenses([expense, ...expenses]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((e) => e.id !== id))
  }

  // Filter expenses based on month
  const filteredExpenses = filterMonth 
    ? expenses.filter((e) => e.date.startsWith(filterMonth))
    : expenses;

  const total = filteredExpenses.reduce((sum, e) => sum + e.amount, 0);

  return (
      <div className='max-w-md mx-auto p-4'>
        <h1 className="text-3xl font-bold text-center mb-4">Expense Tracker</h1>
        <ExpenseForm onAddExpense={addExpense} />

        {/* Month Filter */}
        <div className="mb-4 flex items-center gap-2">
          <label className="font-semibold">Filter by month:</label>
          <input 
            type="month" 
            className='border rounded px-2 py-1'
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
          />
          {filterMonth && (
            <button
              onClick={() => setFilterMonth("")}
              className='bg-gray-300 px-2 py-1 rounded'
            >
              Clear
            </button>
          )}
        </div>

        {/* Total */}
        <div className="bg-gray-100 p-3 rounded mb-4 flex justify-between items-center">
          <span className="font-semibold">Total:</span>
          <span className="text-green-700 font-bold text-lg">₹{total}</span>
        </div>
        <ExpenseList expenses={expenses} onDelete={deleteExpense} />
      </div>
  );
}

export default App