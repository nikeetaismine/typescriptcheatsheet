"use strict";
let numbers = [1, 2, '3'];
let numbers1 = [];
numbers1[0] = '1';
numbers1[1] = 2;
numbers.forEach(n => n.toString, 2);
console.log(numbers);
let numbers2 = [];
let user = [21, "Denise"];
console.log(user);
user.push(1);
console.log(user);
;
let mySize = "m";
console.log(mySize);
;
let yourSize = 2;
console.log(yourSize);
function calculateTax(income, taxYear) {
    if (taxYear < 2024)
        return income * 0.39;
    return income * 0.49;
}
calculateTax(10_000, 2022);
function calculateTax1(income, taxYear) {
    if ((taxYear || 2022) < 2024)
        return income * 0.39;
    return income * 0.49;
}
calculateTax1(10_000);
function calculateTax2(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 0.39;
    return income * 0.49;
}
calculateTax2(10_000);
let employee1 = { id: 1, name: "" };
let employee2 = { id: 2, name: "" };
let employee = {
    id: 1,
    name: "Denise"
};
let employee3 = { id: 1, name: "Mosh" };
let employee4 = {
    id: 4,
    name: "Mosh",
    retire: (date) => {
        console.log(date);
    }
};
let employee5 = {
    id: 1,
    name: 'Mosh',
    retire: (date) => {
        console.log(date);
    }
};
function kgToPounds(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToPounds(10);
kgToPounds('10kg');
let textbox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let quantity1 = 100;
let metric = 'cm';
function greet(name) {
    console.log(name.toUpperCase());
}
function greeting(name) {
    if (name)
        console.log(name.toUpperCase());
    else
        console.log("Hola!");
}
greeting(null);
greeting(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday);
console.log(customer?.birthday.getFullYear());
console.log(customer?.birthday?.getFullYear());
//# sourceMappingURL=index.js.map