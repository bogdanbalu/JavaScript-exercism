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
  switch (name) {
    case 'Pure Strawberry Joy': {
      return 0.5;
    }
    case 'Energizer': {
      return 1.5;
    } 
    case 'Green Garden': {
      return 1.5;
    } 
    case 'Tropical Island': {
      return 3;
    }
    case 'All or Nothing': {
      return 5;
    }
    default: {
      return 2.5;
    }
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */

function getNumberOfWedgesFromLimeType(limeType) {
  switch (limeType) {
    case 'small': {
      return 6;
    }
    case 'medium': {
      return 8;
    }
    case 'large': {
      return 10;
    }
    default: {
      return 0;
    }
  }
}

export function limesToCut(wedgesNeeded, limes) {
    if (wedgesNeeded === 0) {
    return 0; // no wedges, no limes cut
  }
  
  let numberOfCuttedWedges = 0;
  
  for (let indice = 0; indice < limes.length; indice = indice + 1) {
    const wedgesFromLime = getNumberOfWedgesFromLimeType(limes[indice]);
    numberOfCuttedWedges = numberOfCuttedWedges + wedgesFromLime;

    if (numberOfCuttedWedges >= wedgesNeeded) {
      return indice + 1;
    }
  }
  return limes.length;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timePassed = 0;
  while (timeLeft > timePassed) {
    if(orders[0] === 'Pure Strawberry Joy') {
      timePassed += 0.5;
    } else if(orders[0] === 'Energizer') {
      timePassed += 1.5;
    } else if(orders[0] === 'Green Garden') {
      timePassed += 1.5;
    } else if(orders[0] === 'Tropical Island') {
      timePassed += 3;
    } else if(orders[0] === 'All or Nothing') {
      timePassed += 5;
    } else {
      timePassed += 2.5;
    }
    orders.shift();
  };
  return orders;
}
