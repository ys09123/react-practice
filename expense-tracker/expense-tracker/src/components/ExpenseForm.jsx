import React from 'react';
import { useState } from  "react";

export default function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title || !amount) return;

        const newExpense = {
            id: Date.now(),
            title,
            amount: parseFloat(amount),
            date
        };

        onAddExpense(newExpense);
        setTitle("");
        setAmount("");
        setDate("");
    };

  return (
    <form onSubmit={handleSubmit} className='flex gap-2 mb-4'>
        <input
            type="text" 
            placeholder='Title'
            className="border rounded px-2 py-1 flex-1"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
        />
        <input
            type="number" 
            placeholder='Amount'
            className='border rounded px-2 py-1 w-24'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        <input
            type="date"
            className='border rounded px-2 py-1'
            value={date}
            onChange={(e) => setDate(e.target.value)}
        />
        <button
            type="submit"
            className='bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-800'
        >
            Add
        </button>
    </form>
  )
}

