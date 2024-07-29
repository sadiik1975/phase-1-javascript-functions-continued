// code your solution here
// index.js

// Define the saturdayFun function declaration
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define the mondayWork function expression
  const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Define the wrapAdjective function
  function wrapAdjective(wrapper = '*') {
    return function(adjective = 'special') {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    }
  }
  
  // Export the functions for testing
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
  };
  