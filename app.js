function JediName (firstName, lastName) {
    let newFN = firstName.split('');
    let newLN = lastName.split('');
    let jediN = [];
    jediN.push(newLN[0], newLN[1], newLN[2], newFN[0], newFN[1]);
    return jediN.join('');
};

console.log(JediName('Anya', 'Nguyen'));
console.log(JediName('Megan', "Leonardo"));