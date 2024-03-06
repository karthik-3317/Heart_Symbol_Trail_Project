const bodyE1 =document.querySelector("body")  //targets the document tags having the no classname

// console.log(typeof(bodyE1));

bodyE1.addEventListener("mousemove",(event)=>{
   const xPos =event.offsetX
   const yPos =event.offsetY
   const spanE1 =document.createElement("span")
   spanE1.style.left =xPos + "px";
   spanE1.style.top =yPos + "px";
   const size =Math.random()*100;
   spanE1.style.width =size + "px"
   spanE1.style.height=size + "px"
   bodyE1.append(spanE1);
   setTimeout(()=>{
    spanE1.remove()
   },3000)
})
