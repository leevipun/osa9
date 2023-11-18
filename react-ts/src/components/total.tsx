interface Totalpoints {
  totalpoints: number;
}

const Exercises = (total: Totalpoints): JSX.Element => {
  return <p>Total number of exercises: {total.totalpoints}</p>;
};

export default Exercises;
