let friends = ['Bob', 'John', 'Mary', 'Joe', 'David'];

for ( let i = 0; i < friends.length; i++) {
    console.log("Hello " + friends[i]);
}

friends[0] = 'Kevin';
friends[1] = 'Linda';
friends[2] = 'Kasie';

for ( let i = 0; i < friends.length; i++) {
    console.log("Hello " + friends[i]);
}