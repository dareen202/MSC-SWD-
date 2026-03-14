var userslist = [
    { id: 1, name: "Malak", age: 21, isActive: true },
    { id: 2, name: "Omar", age: 24, isActive: false },
    { id: 3, name: "Lina", age: 20, isActive: true }
];
var productslist = [
    { id: 101, name: "Laptop", price: 25000, inStock: true },
    { id: 102, name: "Headphones", price: 1800, inStock: false },
    { id: 103, name: "Mouse", price: 650, inStock: true }
];
function getUserById(id) {
    return userslist.find(function (user) { return user.id === id; });
}
function getActiveUsers(list) {
    return list.filter(function (user) { return user.isActive; });
}
function getProductNames(items) {
    return items.map(function (item) { return item.name; });
}
function calculateTotal(price, quantity) {
    return price * quantity;
}
function printUser(user) {
    return "".concat(user.name, " is ").concat(user.age, " years old");
}
var selectedUser = getUserById(1);
var activeUsers = getActiveUsers(userslist);
var productNames = getProductNames(productslist);
var total = calculateTotal(650, 3);
console.log(selectedUser);
console.log(activeUsers);
console.log(productNames);
console.log(total);
if (selectedUser) {
    console.log(printUser(selectedUser));
}
