/**
 * Returns a unique array of objects based on a desired key.
 * @param {array} arr - array of objects.
 * @param {string|int} key - key to filter objects by
 */
export const uniqueBy = (arr, key) => {
	let keys = [];
	return arr.filter(item => {
		if (keys.indexOf(item[key]) !== -1) {
			return false;
		}

		return keys.push(item[key]);
	});
};

/**
 * Returns a unique array of objects based on the id property.
 * @param {array} arr - array of objects to filter.
 * @returns {*}
 */
export const uniqueById = arr => uniqueBy(arr, 'id');

/**
 * Debounce a function by limiting how often it can run.
 * @param {function} func - callback function
 * @param {Integer} wait - Time in milliseconds how long it should wait.
 * @returns {Function}
 */
export const debounce = (func, wait) => {
	let timeout = null;

	return function () {
		const context = this;
		const args = arguments;

		const later = () => {
			func.apply(context, args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
	}
};
