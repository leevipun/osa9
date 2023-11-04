interface ExerciseResult {
  periodLength: number;
  trainingDays: number;
  target: number;
  average: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
}

const calculateExercises = (
  hours: Array<number>,
  targetValue: number
): ExerciseResult => {
  const periodLength = hours.length;
  const trainingDays = hours.filter((h) => h > 0).length;
  const average = hours.reduce((s, o) => s + o, 0) / periodLength;
  const target = targetValue;
  const success = average >= target;
  const rating = success ? 3 : average >= target - 1 ? 2 : 1;
  const ratingDescription =
    rating === 3
      ? "Great job!"
      : rating === 2
      ? "Not bad but could be better"
      : "You need to work harder";
  return {
    periodLength,
    trainingDays,
    target,
    average,
    success,
    rating,
    ratingDescription,
  };
};

const hours = process.argv.slice(5).map(Number);
console.log(hours.length);
const target = hours.pop();

console.log(calculateExercises(hours, target));
console.log(target);
console.log(hours);
