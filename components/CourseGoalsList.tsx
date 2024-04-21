import React from "react";
import CourseGoal from "./CourseGoal";
import { type CourseGoal as CourseGoalType } from "@/app/page";
import InfoBox from "./InfoBox";

interface CourseGoalsListProps {
  goals: CourseGoalType[];
  onDelete: (id: number) => void;
}

export default function CourseGoalsList({
  goals,
  onDelete,
}: CourseGoalsListProps) {
  if (goals.length === 0)
    return (
      <InfoBox mode="hint">
        <p>You have no course goals yet. Start adding some!</p>
      </InfoBox>
    );

  return (
    <>
      {goals.length >= 4 && (
        <InfoBox mode="warning">
          <p>
            You're collecting a lot of goals. Don't put too much on your plate!
          </p>
        </InfoBox>
      )}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={onDelete} id={goal.id}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
