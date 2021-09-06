let bobsFollowers = ['Jeff', 'Dylan', 'Gary', 'Jemima'];
let tinasFollowers = ['Jemima', 'Dylan', 'Freddy'];
let mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i])
    }
  }
}