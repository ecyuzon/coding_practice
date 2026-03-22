// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  let minute = 0;
  switch (name) {
    case 'Pure Strawberry Joy':
      minute = 0.5;
      break;
    case 'Energizer':
    case'Green Garden':
      minute = 1.5;
      break;
    case 'Tropical Island':
      minute = 3;
      break;
    case 'All or Nothing':
      minute = 5;
      break;
    default:
      minute = 2.5;
      break;
  }

  return minute;
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
    let i = 0;
    while (i < limes.length && wedgesNeeded > 0) {
      switch (limes[i]) {
        case 'small':
          wedgesNeeded -= 6;
          break;
        case 'medium':
          wedgesNeeded -= 8;
          break;
        case 'large':
          wedgesNeeded -= 10;
          break;
      }
      
      i++;
    }

    return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let i = 0;
  let minute = 0;
  let order = '';
  do {
    order = orders.shift();
    
    minute = timeToMixJuice(order);
    
    timeLeft -= minute;      
    
    
    i++;
  } while(timeLeft > 0);

  console.log(orders);
  return orders;
  
}
