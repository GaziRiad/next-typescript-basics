"use client";

import CourseGoalsList from "@/components/CourseGoalsList";
// import goalsImg from "/goals.jpg";
import Header from "@/components/Header";
import { useState } from "react";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function Home() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    const newGoal: CourseGoal = {
      id: Math.random(),
      title: "Lean Typescript",
      description: "Learn it in depth",
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "A list of goals" }}>
        <h1>Your couse goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoalsList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
