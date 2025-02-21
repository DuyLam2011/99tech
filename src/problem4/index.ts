//time complexity: O(n)
//space complexity: O(1)
export function sum_to_n_a(n: number): number {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	console.log(sum);

	return sum;
}

// time complexity: O(1)
// space complexity: O(1)
export function sum_to_n_b(n: number): number {
	console.log((n * (n + 1)) / 2);
	return (n * (n + 1)) / 2;
}

// time complexity: O(n)
// space complexity: O(n)
export function sum_to_n_c(n: number): number {
	if (n <= 0) return 0;
	console.log(n + sum_to_n_c(n - 1));

	return n + sum_to_n_c(n - 1);
}

sum_to_n_a(5);
sum_to_n_b(5);
sum_to_n_c(5);
