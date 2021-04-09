// o functie care returneaza alta functie unde este setat tipul de delay pentru request astfel incat sa nu se faca request dupa fiecare key press
const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		if (timeoutId) {
			clearInterval(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
