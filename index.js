function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget(classvar, idvar){
  return document.querySelector('#idvar.classvar')
}

function increaseRankBy(n){
  classElements = document.querySelectorAll('.ranked-list');
  for(let i=0;i<classElements.length();i++){
    classElements[i].innerHTML+=parseInt(n);
  }
  return;
}

function deepestChild(){
  broadElement = document.querySelector('#grand-node');
  
}