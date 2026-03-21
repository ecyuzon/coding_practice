export function decodedResistorValue(color: string[]) {
  // let colors = COLORS.map((color, index) => {
  //   return {[index+1]: color};
  // });
  
  let firstNum = COLORS.indexOf(color[0]);
  let secondNum = COLORS.indexOf(color[1]);
  let multiplier = COLORS.indexOf(color[2]);
  let colorString: string = firstNum.toString() + secondNum.toString();
    
  let colorNum: number = parseInt(colorString);
  let length = colorString.length;

  if (multiplier !== 0) {
    colorString = colorString.padEnd(length+multiplier, '0');
    console.log(colorString);
  }

  if (colorString.startsWith('0')) {
      colorString = colorString.substr(1, 1) + " ohms";

      return colorString;
  }
  
  if (colorString.endsWith('0')) {
    if (length == 2 && colorNum === 0) {
      colorString = colorString.substr(0, 1) + " ohms";
    } 
    
    if (multiplier == 1) {
      colorString = colorString + " ohms";
    }

    if (multiplier >= 2 && multiplier <= 5) {
      colorString = colorString.slice(0, -3) + " kiloohms";
    } else if (multiplier == 6) {
      colorString = colorString.slice(0, -6) + " megaohms";
    } else if (multiplier > 6) {
      colorString = colorString.slice(0, -9) + " gigaohms";
    }
  } else {
    colorString = colorString + " ohms";
  }
 
  
  



  return colorString;
  
}

export const COLORS = [
  'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
];

