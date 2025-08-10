import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [habits, setHabits] = useState([]);
  const [habitName, setHabitName] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const saved = localStorage.getItem("habits");
    if(saved) {
      setHabits(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
      localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);


  const addHabit = () => {
    if(!habitName.trim()) return;
    const newHabit = {
      id: Date.now(),
      name: habitName.trim(),
      streak: 0,
      lastCompletedDate: null
    };
    setHabits([...habits, newHabit]);
    setHabitName("");
  };

  const markAsDone = (id) => {
    setHabits(
      habits.map((habit) => {
        if(habit.id === id) {
          if(habit.lastCompletedDate !== today) {
            return {
              ...habit,
              streak: habit.streak + 1,
              lastCompletedDate: today
            };
          }
        }
        return habit;
      })
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Habit Tracker</h1>

      <div className="flex gap-2 mb-4 text-gray-300">
        <input
          type="text"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          placeholder="Enter habit..."
          className="border p-2 rounded"
        />
        <button
          onClick={addHabit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add
        </button>
      </div>

    <ul>
      {habits.map((habit) => (
        <li key={habit.id} className="flex items-center gap-4 mb-2">
          <span className="font-medium">{habit.name}</span>
          <span>🔥 {habit.streak}</span>
          <button
            onClick={() => markAsDone(habit.id)}
            className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"  
          >
            Mark as Done
          </button>
        </li>
      ))}
    </ul>
    </div>
  );
}
