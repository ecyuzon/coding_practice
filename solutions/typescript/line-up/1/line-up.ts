export function format(name: string, number: number): string {
  let suffix: string = 'th';
  let last2digit: number, last2digitNum: number;

  name = name[0].toUpperCase() + name.substr(1, name.length-1).toLowerCase();
  last2digit = Math.abs(number) % 100;//number.toString().substr(name.length - 1, -2);
  console.log(name);
  console.log(last2digit.toString().charAt(last2digit.toString().length-1));
  
    if ((last2digit < 11 || last2digit > 11 )&& last2digit.toString().charAt(last2digit.toString().length-1) === '1')
      suffix = 'st';
    else if ((last2digit < 12 || last2digit > 12) && last2digit.toString().charAt(last2digit.toString().length-1) === '2') 
      suffix = 'nd';
    else if ((last2digit < 13 || last2digit > 13) && last2digit.toString().charAt(last2digit.toString().length-1) === '3')
      suffix = 'rd';
    else
      suffix = 'th';
  
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
}
