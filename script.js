console.log('hello')

let title=document.getElementById('title')

console.log(title.innerText)

let meassage ='GoodBye'
title.innerText=meassage;

console.log('after: ',title.innerText)

title.innerHTML=`<p>${meassage}</p>`

title.style.color="red"
console.log(title.style.color)

const reddiv = document.getElementById('red')
const yellowdiv = document.getElementById('yello')
const greendiv = document.getElementById('green')


const square =document.querySelectorAll('.colorsquare')
// console.log(square)


// console.log(square[0].value)
// console.log(square[1].value)
// console.log(square[2].value)


// reddiv.onclick=()=> {
//   console.log('you clicke red so now you are in danger ')
//   console.log('you c in danger ')
// }
// reddiv.onclick=()=>{
//   console.log('user choose: rock  ')
// }


// yellowdiv.onclick=()=>{
//   console.log('user choose: paper  ')
// }


// greendiv.onclick=()=>{
//   console.log('user choose: scissor  ')
// }

// or


//for loop
const timeclicked={'rock':0,'paper':0,'scissor':0}

square.forEach(square =>{
  square.onclick =() => {

    timeclicked[square.value] += 1
    square.innerText = timeclicked[square.value]
    console.log(square.value)
  }
})


function clear(){
  timeclicked.rock=0
  timeclicked.paper=0
  timeclicked.scissor=0
  square.forEach(square =>{
    square.innerText =''
  })
}
const cleargame= document.getElementById('clear')
cleargame.onclick=()=> clear()