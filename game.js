function Winner(p1) {
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (randomNo === 1 && p1 === 1) {
        return "It's a tie."
    }
    if (randomNo === 1 && p1 === 2) {
        return "I won!"
    }
    if (randomNo === 1 && p1 === 3) {
        return "Comp won..."
    }
    if (randomNo === 2 && p1 === 1) {
        return "Comp won..."
    }
    if (randomNo === 2 && p1 === 2) {
        return "A tie."
    }
    if (randomNo === 2 && p1 === 3) {
        return "I won!"
    }
    if (randomNo === 3 && p1 === 1) {
        return "I won!"
    }
    if (randomNo === 3 && p1 === 2) {
        return "Comp won..."
    }
    else if (randomNo === 3 && p1 === 3) {
        return "A tie."
    }
};

console.log(Winner(1));