module.export = uid;

/**
 * Create an alphanumeric UID
 *
 * @param {Number} [length=16] Length of returned UID. The longer the UID the less chance of collision
 * @returns {string} UID
 */
function uid(length) {
	let result = '';
	length = length || 16;

	do {
		result += Math.random().toString(36).slice(2);
	} while (result.length < length);

	return length ? result.slice(0, length) : result;
}
