export function isLeap(year: number) {
  console.log((year / 100) % 4);
  return ((year % 4 == 0 && (year / 100) % 4 == 0) 
          || ((year % 4 == 0 && year % 5 == 0) && year % 100 != 0)
          || ((year % 4 == 0) && year % 100 != 0)) ? true : false;
}
