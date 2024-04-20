import CourseGoal from "@/components/CourseGoal";
// import goalsImg from "/goals.jpg";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header image={{ src: "/goals.jpg", alt: "A list of goals" }}>
        <h1>Your couse goals</h1>
      </Header>
      <CourseGoal title="Lean React + Ts">
        <p>Learn it from the ground up</p>
      </CourseGoal>
    </main>
  );
}
