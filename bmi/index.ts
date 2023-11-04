const calculateBmi = (mitat: string[]): string => {
  const weight: number = Number(mitat[6]);
  const height: number = Number(mitat[5]);
  console.log(weight, height);
  const bmi: number = weight / (height / 100) ** 2;
  if (bmi < 18.5) {
    return "Alipainoinen";
  } else if (bmi < 25) {
    return "Normaalipainoinen";
  } else if (bmi < 30) {
    return "Ylipainoinen";
  } else {
    return "Merkittävästi ylipainoinen";
  }
};

console.log(calculateBmi(process.argv));
