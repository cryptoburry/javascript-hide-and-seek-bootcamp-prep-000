function getFirstSelector(selector){
 return document.querySelector(selector);
}

function nestedTarget(){
  const a = document.getElementById("nested");
  const b = a.querySelector(".target");
  return b;
}

function increaseRankBy(n){
  const a = document.querySelectorAll(".ranked-list li");
  for(let i=0;i<a.length;i++){
    a[i].innerHTML=parseInt(a[i].innerHTML) + n;
  }
  return;
}

function deepestChild(){
  var elementA = document.getElementById("grand-node");
    while(elementA.firstElementChild){
      elementA = elementA.firstElementChild;
    }
    return elementA;
}