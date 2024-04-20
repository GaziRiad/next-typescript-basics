import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "@/app/page";

interface CourseGoalsListProps {
  goals: CourseGoalType[];
}

export default function CourseGoalsList({ goals }: CourseGoalsListProps) {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
}
