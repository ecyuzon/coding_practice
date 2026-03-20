export function decodedValue(color : string[]) {
    // console.log(COLORS.indexOf(color[0]) + COLORS.indexOf(color[1]));
    let colorString: string = COLORS.indexOf(color[0]).toString().concat(COLORS.indexOf(color[1]).toString());
    let colorNum: number = 0;
    colorNum = parseInt(colorString);
    

    return colorNum;
}

export const COLORS : string[] = [
    'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'
];
