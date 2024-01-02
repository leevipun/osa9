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

interface CoursePartSpecial extends CoursePartBase {
  description: string;
  requirements: string[];
  kind: "special";
}

type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartSpecial;

const Part = ({ part }: { part: CoursePart }) => {
  switch (part.kind) {
    case "basic":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>Description: {part.description}</p>
        </div>
      );
    case "group":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>Group projects: {part.groupProjectCount}</p>
        </div>
      );
    case "background":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>Description: {part.description}</p>
          <p>Background material: {part.backgroundMaterial}</p>
        </div>
      );
    case "special":
      return (
        <div>
          <h3>
            {part.name} {part.exerciseCount}
          </h3>
          <p>Description: {part.description}</p>
          <p>Requirements:</p>
          <ul>
            {part.requirements.map((req, i) => (
              <li key={i}>{req}</li>
            ))}
          </ul>
        </div>
      );
    default:
      return assertNever(part);
  }
};

const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};

export default Part;
