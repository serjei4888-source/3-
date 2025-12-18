//1 задание
function execute1(a, b, c) {
    const numbers = [a, b, c];
    numbers.sort((x, y) => y - x);
    return numbers[0] * numbers[1];
}

console.log(execute1(10, 8, 7));
console.log(execute1(1, 5, 4));
console.log(execute1(3, 6, 2));
//2 задание
function execute2(name, rank = 'рядовой') {
    return rank + " " + name;
}
console.log(execute2("Иван"));
console.log(execute2("Петр", "Капитан"));
//3 задание
const fn = function (a, b) {
    return a / b;
}

function execute3(funExp, a, b = 2) {
    return funExp(a, b);
}

console.log(fn(10, 2)); //Ответ 5 потому что функция возвращается
console.log(execute3(fn, 10, 2));//Ответ 5 потому что параметр fn возвращается как функция с параметрами из более старшей функцией
console.log(execute3(fn, 10));//Ответ 5 потому что параметр b уже имеет значение и происходит то же самое что в примепе выше
//4 задание

function execute4(a) {
    if (!Number.isInteger(a)) {
        console.log("Число не целое");
        return;
    }
    if (a % 2 == 0) {
        return (x) => x * x;
    } else {
        return (x) => Math.pow(x, 3);
    }
}


console.log(execute4(11, 2));
console.log(execute4(3));
console.log(execute4(2));
console.log(execute4(10)(10));
console.log(execute4(5)(5));
//5 задание
function execute5(n) {
    if (n < 1) return;
    if (n == 1) return 1;
    return n * execute5(n - 1);

}
console.log(execute5(-5));
console.log(execute5(1));
console.log(execute5(6));
console.log(execute5(7));