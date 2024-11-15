// # Question 1

// **Vowel & Consonant Count Ended**

let str = 'jainam pokal';
let n = 11;
let vowels = 'aeiouAEIOU';
let count = 0;
for (let i = 0; i < n; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}
console.log(count);


// # Question 2

// **Identify Prime Ended**

function IdentifyPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(IdentifyPrime(10));


// # Question 3

// **Strings - Convert Ended**  note: Replace "A" with "a" and "B" with "b" and so on.

function ConvertStr(N, str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'A') {
            result += 'a';
        } else if (str[i] === 'B') {
            result += 'b';
        } else if (str[i] === 'C') {
            result += 'c';
        } else if (str[i] === 'D') {
            result += 'd';
        } else if (str[i] === 'E') {
            result += 'e';
        } else if (str[i] === 'F') {
            result += 'f';
        }
    }
    return result;
}
console.log(ConvertStr(5, "ABCD"));


// ## Question 4

// ### **Question - Find the Sum of Elements with Occurrence 2**Explanation:
// In the given array, the elements 1, 5, and 8 occur twice. The sum of these elements is 1 + 5 + 8 = 14. Therefore, the output is 14.

function SumOfElements(N,arr) {
    let count = {};
    for (let i = 0; i < arr.length; i++) {
        if (count[arr[i]]) {
            count[arr[i]]++;
            } else {
                count[arr[i]] = 1;
            }
        }
        let sum = 0;
        for (let key in count) {
            if (count[key] === 2) {
                sum += parseInt(key);
            }
        }
        return sum;
    }
    console.log(SumOfElements(10, [1, 1, 3, 4, 5, 5, 6, 7, 8, 8]));

