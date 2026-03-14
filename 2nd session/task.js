//Assingment A
//Q1:
let sutdents = [{ name: "Ali", grade: 75 }, { name: "Sara", grade: 92 }, { name: "Mona", grade: 88 }];
let s1 = sutdents.filter(function (item){
    return item.grade>80;
});
console.log(s1)

//Q2:
let users = [{ name: "Malak", role: "Student" }, { name: "Omar", role: "Mentor" }];
let u1 = users.map(function (user){
    return user.name + " - " + user.role;
});
console.log(u1);

//Q3
let products = [{ id: 1, name: "Mouse" }, { id: 2, name: "Keyboard" }, { id: 3, name: "Screen" }];
let p1 = products.find(function(element){
    return element.id == 3;
});
console.log(p1);

//Q4:
let persons = { name: "Laila", age: 21, city: "Cairo" };
let {name, age} = persons;
console.log(name, ' , ' ,age)

//Q5:
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let merged = [arr1, arr2];
console.log(merged);

//Q6:
let Student = { name: "Hana", grade: 84, level: 2 };
let scopy = {
    ...Student,
    grade : 88
}
console.log(scopy);

//Q7:
let nums = [1, 2, 3, 4, 5, 6];
let dub = nums.map(function(num){
    return num*2;
});
console.log(dub);

//Q8:
let eve = nums.filter(function(num){
    return num%2 == 0;
});
console.log(eve);

//Q9:
let employees = [{ name: "Nour", department: "HR" }, { name: "Youssef", department: "IT" }];
let e1 = employees.find(function(member){
    return member.department == "IT";
});
console.log(e1);

//Q10:
let words = ["js", "ts", "js", "react", "js", "ts"];
let cnt = words.reduce(function(acc, current){
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});
console.log(cnt);

