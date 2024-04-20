import { CourseGoal } from "@/app/page";
import React, { type FormEvent, useState, useRef } from "react";

interface NewGoalProps {
  onAdd: (title: string, description: string) => void;
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  // const [title, setTitle] = useState("");
  // const [summary, setSummary] = useState("");

  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const title = goal.current!.value;
    const description = summary.current!.value;

    e.currentTarget.reset();

    onAdd(title, description);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your goal</label>
        <input
          id="goal"
          type="text"
          ref={goal}
          // value={title}
          // onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label htmlFor="summary">Short summary</label>
        <input
          id="summary"
          type="text"
          ref={summary}
          // value={summary}
          // onChange={(e) => setSummary(e.target.value)}
        />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
