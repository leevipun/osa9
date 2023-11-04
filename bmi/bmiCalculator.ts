const calculateBmi = (weight: number, height: number): string => {
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

export default calculateBmi;
