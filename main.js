//1교시

//과제 리뷰 - 자릿수 더하기
function solution(n) {
    while (n >= 1) {
        answer += n % 10;
        n = Math.floor(n/10);
    }
    return answer;
}

//없는 숫자 더하기
function solution(numbers) {
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let arr2;
    let answer = 0;

    arr2 = arr.filter(x => !numbers.included(x));

    for(let i = 0; i < arr2.length; i++) {
        answer += arr2[i];
    }
    return answer;
}

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
    var answer = [];

    for(let i = 0; i <= arr.length; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        }
    }

    if(answer.length === 0) {
        answer.push(-1);
    }

    return answer.sort(((a,b) => a - b));
}

//JSON
const user = {
    id: 1,
    name: "tetz",
    email: ["xenosign@naver.com", "tetz@spreatics.com"],
};

//문자열로 바꿔준다.
const str = JSON.stringify(user);
console.log(str);
console.log(typeof str);

//JSON 형태로 다시 바꿔준다.
const obj = JSON.parse(str);
console.log(obj);
console.log(typeof obj);

