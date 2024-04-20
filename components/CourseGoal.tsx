import { type ReactNode } from "react";

interface CourseGoalProps {
  title: string;
  id: number;
  children: ReactNode;
  onDelete: (id: number) => void;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  title,
  id,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
//   return (
//     <article>
//       <div>
//         <h2>{title}</h2>
//         {children}
//       </div>
//       <button>Delete</button>
//     </article>
//   );
// };
// export default CourseGoal;
