interface User{
    id: number;
    name: string;
    age: number;
    isActive: boolean;
}

interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const userslist: User[] = [
  { id: 1, name: "Malak", age: 21, isActive: true },
  { id: 2, name: "Omar", age: 24, isActive: false },
  { id: 3, name: "Lina", age: 20, isActive: true }
];

const productslist = [ 
  { id: 101, name: "Laptop", price: 25000, inStock: true }, 
  { id: 102, name: "Headphones", price: 1800, inStock: false }, 
  { id: 103, name: "Mouse", price: 650, inStock: true } 
]; 
 
function getUserById(id : number): User | undefined { 
  return userslist.find(user => user.id === id); 
} 
 
function getActiveUsers(list: User[]): User[] { 
  return list.filter(user => user.isActive); 
} 
 
function getProductNames(items: Product[]): string[] { 
  return items.map(item => item.name); 
} 
 
function calculateTotal(price: number, quantity: number):number { 
  return price * quantity; 
} 
 
function printUser(user: User): string { 
  return `${user.name} is ${user.age} years old`; 
} 
 
let selectedUser : User|undefined = getUserById(1); 
let activeUsers : User[] = getActiveUsers(userslist); 
let productNames : string[] = getProductNames(productslist); 
let total = calculateTotal(650, 3); 

console.log(selectedUser);
console.log(activeUsers);
console.log(productNames);
console.log(total);

if (selectedUser) {
  console.log(printUser(selectedUser));
}