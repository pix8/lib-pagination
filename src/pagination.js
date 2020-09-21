const 	NAME 			= "pagination",
		AUTHOR			= "j.brincat",
		VERSION			= "0.0.1";

/**
* @node {HTMLElement} DOM Element node
*/
/*
export default function Pagination(current, {total, delta = 5}) {
  const noop = (v, indice) => {
      //console.log('TOTAL =',total, 'v =', v, ' indice=', indice); //(v == indice%total) ? v : v + '...'
    //if(total === 1) return [];

        //1%10 = 1
        //11%10 = 1
        //indice%total should equal 1

        //console.log('test :: ', indice%total );
        //console.log('test :: ', (indice%total === 1));

        //if(indice%total > 1) {
        //  console.log('v =', v, ' indice=', indice);
        //}

        //return (indice%total === 1) ? v + 'a' : v;//(indice%total > 1) ? v + 'b' :  v;

        //return v;
        //return (indice%total === 1) ? v + 'a': v;
        //return (indice%total === 1) ? v : (v === 1) ? `${v} ...` : `... ${v}`;
        return (total === 1 || indice%total === 1) ? [] : (v === 1) ? [v, '...'] : ['...', v];
    };

    // ensure we don't have overspill and create spare pages
    if(delta > total) delta = total;

    // sets a starting indice
    let indice;
    indice = current - Math.floor(delta / 2);
    indice = Math.max(indice, 1);
    indice = Math.min(indice, 1 + (total - delta));

    //indice = Math.max(indice, 2);
    //indice = Math.min(indice, (total - delta));


    //return Array.from({length: delta}, () => indice++);
    //return Array.from({length: (delta)+1}, (a, i) => i+(current-Math.floor(delta/2)));
    //return Array.from({length: (delta*2)+1}, (a, i) => i+(current-delta));
    //return [1].concat(Array.from({length: delta}, () => indice++).concat(total));
    //return [1, '...',...Array.from({length: delta}, () => indice++), '...', total];
    //return [1, ...Array.from({length: delta}, () => indice++), total];
    //https://stackoverflow.com/questions/9229645/remove-duplicate-values-from-js-array
    //uniq = [...new Set(array)];
    //return [...new Set( [noop(1, indice), ...Array.from({length: delta}, () => indice++), noop(total, indice)] )];
    //return [...new Set( [...noop(1, indice), ...Array.from({length: delta}, () => indice++), ...noop(total, indice)])];
    return [...noop(1, indice), ...Array.from({length: delta}, () => indice++), ...noop(total, indice)];
}
*/

/**
 * Generates an array to be used for rendering of pagination
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

	// Public methods
  /*return {
    pagination() {
      return this; // Permit function chaining
    },

    isActive() {
      return this; // Permit function chaining
    }
  }*/
}
