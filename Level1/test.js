// function solution(n) {
// 	let factor = new Set();
// 	if (n === 0) return 0;

// 	for (let i = 1; !factor.has(i) && i <= Math.sqrt(n); i++) {
// 		if (n % i === 0) {
// 			factor.add(i);
// 			factor.add(Math.floor(n / i));
// 		}
// 	}

// 	let answer = 0;
// 	console.log(factor);
// 	factor.forEach((item) => (answer += item));
// 	return answer;
// }

// console.log(solution(150));

function solution(n) {
	let factor = new Set();
	if (n === 0) return 0;

	for (let i = 1; !factor.has(i) && i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			factor.add(i);
			factor.add(Math.floor(n / i));
		}
	}

	let factorSum = 0;
	factor.forEach((f) => (factorSum += f));

	return factorSum;
}

console.log(solution(150));
