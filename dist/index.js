"use strict";
var _a;
let num1 = [1, 2, 3];
let num3 = [];
let num2 = [1, 5, 6];
let someValue = 4;
num2.forEach(n => {
    if (n >= someValue) {
        n += 10;
    }
});
let user = [1, 'vara'];
user[0].valueOf();
user[1].valueOf();
let num4 = 2;
console.log(num4);
function calculator(income, taxYear = 2023) {
    if (taxYear < 2023) {
        return income * 1.30;
    }
    else {
        return income * 2.30;
    }
}
let employee = {
    id: 1,
    name: 'vara',
    retire: (date) => {
        console.log(date);
    }
};
function printId(id) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    }
    else {
        console.log(id);
    }
}
printId('uday');
printId(10);
let exam = {
    book: () => { },
    movie: () => { }
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
//# sourceMappingURL=index.js.map