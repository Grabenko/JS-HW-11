const person = {
  name: 'John',
  balance: 1000,
  addMoney() {
    let bonus = 500;
    this.balance += bonus;
    console.log(`${this.name} до вашого балансу, нараховано: ${bonus}$`);
  },
  showTheBalance() {
    console.log(`На рахунку клієнта ${this.name}, знаходеться: ${this.balance}$,`);
  },
};

const users = [
  { name: 'Alice', balance: 500 },
  { name: 'Bob', balance: 200 },
  { name: 'Charlie', balance: 1000 }
];

users.push(person);
console.log(users);

users.forEach(user => {
  person.addMoney.call(user);
  person.showTheBalance.call(user);
});



const filterUsers = users.filter(user => user.balance >= 1000);
console.log(filterUsers);

const usersBalance = users.map(user => user.balance);
console.log(usersBalance);