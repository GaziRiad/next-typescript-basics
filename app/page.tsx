import CourseGoal from "@/components/CourseGoal";
// import goalsImg from "/goals.jpg";
import Header from "@/components/Header";
import { useState } from "react";

interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function Home() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals([
      { title: "Learn Typescript", description: "From the ground up", id: 1 },
    ]);
  }

  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "A list of goals" }}>
        <h1>Your couse goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Lean React + Ts">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
