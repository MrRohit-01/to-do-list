// const myArray =[];
// function add(){
//   const input1 =document.querySelector('.js-input');
//   let name = input1.value
//   if(name!= ''){
//   myArray.push(name);
//   console.log(myArray);
// }
// input1.value='';
// }
// function enterKey(event){
//   if(event.key==='Enter'){
//     add()
//   }
// }
const myArray2 =[];
let toDoList= '';
function addList(){
    const input1 =document
    .querySelector('.js-input2');
    let name = input1.value
    if(name!= ''){
      myArray2.push(name);
      // console.log(myArray2);
      for(i=0;i<myArray2.length;i++){
        let toDocontent = myArray2[i];
        toDoList+=toDocontent;
        
      }
      document.querySelector('.js-content').innerHTML =`<p>${toDoList}</p>`;
      // console.log(toDoList)
    
      input1.value='';
}
}
function enterKey(event){
  if(event.key==='Enter'){
    addList()
  }
}