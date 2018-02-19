function countDays(month, leapYear) {
switch (month) {
    
    case 'april':
    case 'june':
    case 'september':
    case 'november':
        result = `${month} has 30 days.`;
    break;

    case 'january':
    case 'march':
    case 'may':
    case 'july':
    case 'august':
    case 'october':
    case 'december':
        result = `${month} has 31 days.`;
    break;

    case 'february':
        if (leapYear) {
            result = `${month} has 29 days.`;
            break;
        } 
        
        else {
            result = `${month} has 28 days.`;
            break;
        };
    break;

    default:
        result = "Must provide a valid month."

};
return result;
};

console.log(countDays('february', true));
console.log(countDays('february', false));
console.log(countDays('december', true));