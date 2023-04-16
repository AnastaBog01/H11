let but1 = document.getElementById("but1")
let but2 = document.getElementById("but2")
let but3 = document.getElementById("but3")
let a = document.getElementById("i1")
let b = document.getElementById("i2")
let c = document.getElementById("i3")
let d = document.getElementById("i4")
let e = document.getElementById("i5")
let out1 = document.getElementById("out1")
let out2 = document.getElementById("out2")
let out3 = document.getElementById("out3")
const ex= 85

function f1() {
  let a1 = a.value
  let b1 = b.value
  let y = a1/b1
  let u=Math.floor(y)
  out1.innerHTML = "Вам нужно ехать со скоростью "+u+" км/ч"
}

function f2() {
let c1 = c.value
  let d1 = d.value
  let o = c1/d1
  let p=Math.floor(o)
  let f=c1%d1
  out2.innerHTML = "Вы можете себе позволить "+f+" шоколадок"
}

function f3(){
  let r = e.value
let q = r/ex
  let t=Math.floor(q)
  out3.innerHTML = "У вас будет "+t+ " евро"

}

but1.onclick = f1
but2.onclick = f2
but3.onclick = f3
