import Header from "./components/header";
import Exercises from "./components/total";
import Part from "./components/content";

interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartWithDescription extends CoursePartBase {
  description: string;
}

interface CoursePartBasic extends CoursePartWithDescription {
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CoursePartWithDescription {
  backgroundMaterial: string;
  kind: "background";
}

interface CoursePartWithRequirements extends CoursePartWithDescription {
  requirements: string[];
  kind: "requirements";
}

type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartWithRequirements;

const App = () => {
  const courseName = "Half Stack application development";

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      kind: "basic",
      description: "This is an awesome course part",
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group",
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      kind: "basic",
      description: "How to go from unknown to string",
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      kind: "background",
      description: "Confusing description",
      backgroundMaterial:
        "https://type-level-typescript.com/template-literal-types",
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      kind: "basic",
      description: "a hard part",
    },
    {
      name: "Advanced TypeScript",
      exerciseCount: 21,
      kind: "requirements",
      description: "This is an advanced course part",
      requirements: [
        "You should know basic TypeScript",
        "You should have read the TypeScript handbook",
      ],
    },
  ];

  const totalExercises = courseParts.reduce(
    (sum, part) => sum + part.exerciseCount,
    0
  );

  return (
    <div>
      <Header name={courseName} />
      {courseParts.map((part, index) => (
        <Part key={index} part={part} />
      ))}
      <Exercises totalpoints={totalExercises} />
    </div>
  );
};

export default App;
