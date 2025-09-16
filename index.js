// Code your solution in this file!

const companyName = 'Scuber';

let mostProfitableNeighborhood = 'Chelsea';

let companyCeo = 'Susan Smith';

// Define saturdayFun using function declaration
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Define mondayWork using function expression
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

// Define wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}


