"use client";

import CourseGoalsList from "@/components/CourseGoalsList";
// import goalsImg from "/goals.jpg";
import Header from "@/components/Header";
import NewGoal from "@/components/NewGoal";
import { useState } from "react";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function Home() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal(title: string, description: string) {
    const newGoal: CourseGoal = { title, description, id: Math.random() };
    setGoals((prevGoals) => [...prevGoals, newGoal]);
  }

  function handleDeleteGoal(id: number) {
    setGoals((goals) => goals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "A list of goals" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAdd={handleAddGoal} />
      <CourseGoalsList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
