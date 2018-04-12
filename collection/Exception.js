function CollectionException({ code, message }) {
	this.code = code;
	this.message = message;
}
CollectionException.prototype.toString = function() {
	return `[${this.code}] ${this.message}`;
}

module.exports = CollectionException;