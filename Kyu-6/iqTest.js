function iqTest(numbers) {
  let numSplit = numbers.split(" ");
  let indexOfOddNum = null;
  let oddCount = 0;
  let indexOfEvenNum = null;
  let evenCount = 0;

  if (numSplit.length === 0) {
    return "Whoops, arr is empty";
  }
  let numArrToMap = numSplit.map((index) => {
    if (index % 2 !== 0) {
      oddCount++;
      indexOfOddNum = numSplit.indexOf(index) + 1;
    } else {
      evenCount++;
      indexOfEvenNum = numSplit.indexOf(index) + 1;
    }
  });
  if (oddCount < evenCount) {
    return indexOfOddNum;
  } else {
    return indexOfEvenNum;
  }
}
