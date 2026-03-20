//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//1st
//2nd
//3rd 
export const format = (name, rank) => {
  let sentence = "";
  let suffix = "th";
  let last2digit = rank.toString().substr(rank.toString().length - 2, 2);
  let last2DigitNum = parseInt(last2digit);
  // console.log(rank);
  // if (rank.toString().endsWith("1") && (rank < 11 || rank > 11)) {
  //   suffix = "st";
  // } else if (rank.toString().endsWith("2") && (rank > 13 || rank < 10)) {
  //   suffix = "nd";
  // } else if (rank.toString().endsWith("3") && (rank > 13 || rank < 10)) {
  //   suffix = "rd";
  // } else {
  //   suffix = "th";
  // }

  if (last2digit.endsWith("1") && (last2DigitNum < 11 || last2DigitNum > 11)) {
    console.log(last2DigitNum);
    suffix = "st";
  } else if (last2digit.endsWith("2") && (last2DigitNum < 12 || last2DigitNum > 12)) {
    suffix = "nd";
  } else if (last2digit.endsWith("3") && (last2DigitNum < 13 || last2DigitNum > 13)) {
    suffix = "rd";
  }
  // console.log(rank.substr(rank.toString().length - 1, 2));
    
  sentence = name + ", you are the " + rank + suffix + " customer we serve today. Thank you!";
  
  return sentence;
};
