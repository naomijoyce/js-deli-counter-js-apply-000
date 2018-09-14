var counter = 0;
function takeANumber(deliLine){
   counter++;
 return "Welcome, You are number " + counter +  " in line."; 
}

function nowServing(deliLine){
  if (deliLine.length <= 0){
      return "There is nobody waiting to be served!";
  } else {
      return "Currently serving " + deliLine.shift() + 
      ".";
  }
}

function currentLine(deliLine){
  const statement = [];
  
  if (deliLine.length > 0){
  
    for (var i = 0; i < deliLine.length; i ++){
      statement.push(" " + (i+1) + ". " + deliLine[i]);
    }
  return "The line is currently:" + statement;
  
  }else {
    return "The line is currently empty."
  }
}