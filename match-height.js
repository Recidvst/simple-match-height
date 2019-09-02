export function matchSomeHeights(array) {
	if ( !array || !Array.isArray(array) ) return false; 
    setTimeout( (time) => { // allow for paint
        let heights = [];
        array.forEach( (top) => {
						// remove current height to allow recalculation
						if (top.style.removeProperty) {
							top.style.removeProperty('height');
						} else {
							top.style.removeAttribute('height');
						}
            const insideHeight = window.getComputedStyle(top, null).getPropertyValue('height');
            heights.push(parseInt(insideHeight));
        });
        // find max height
        const biggest = Math.max(...heights);
        array.forEach( (top) => {
            top.style.height = biggest + 'px';
        });
    }, 250);
}
