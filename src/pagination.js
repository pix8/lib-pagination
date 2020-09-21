const NAME 			= "pagination",
		AUTHOR			= "j.brincat",
		VERSION			= "0.0.1";

/**
 * Generates an array to be used for rendering of pagination - suitable for use with adonisjs
 * @param {number} current - The current page
 * @param {number} total - Last page of the collection
 * @param {number} delta - Spread of indices to represent in the collection
 * @returns {array} Array of page indices within the scoped range complimented by first and last page and ellipsises used as separators
 */
export default function Pagination(current, total, delta = 5) {
  const noop = (v, indice) => (total === 1 || indice%total === 1) ? [] : (v === 1) ? [v, '...'] : ['...', v];

  if(delta > total) delta = total;

  let indice = current - Math.floor(delta / 2);
  indice = Math.max(indice, 1);
  indice = Math.min(indice, 1 + (total - delta));

  return [...noop(1, indice), ...Array.from({length: delta}, () => indice++), ...noop(total, indice)];
}
