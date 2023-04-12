const user1 = {
    firstName: 'John',
    lastName: 'Doe',
    friends: [
      { firstName: 'Jane', lastName: 'Doe' },
      { firstName: 'Bob', lastName: 'Smith' },
      { firstName: 'Alice', lastName: 'Wonderland' },
    ],
    takeOutFriends() {
      this.friends.forEach((friend) => {
        console.log(`${friend.firstName} ${friend.lastName}`);
      });
    },
  };
  const user2 = {
    name: "Juan",
    surname: "Hernandez",
    friends: [
      { name: "Maria", surname: "Garcia" },
      { name: "Carlos", surname: "Rodriguez" },
      { name: "Ana", surname: "Lopez" }
    ],
    takeOutFriends() {
      this.friends.forEach((friend) => {
        console.log(`${friend.name} ${friend.surname}`);
      });
    },
  };
  user1.takeOutFriends(); 
  user2.takeOutFriends(); 
  user1.takeOutFriends.call(user2); 
  user2.takeOutFriends.apply(user1); 
  