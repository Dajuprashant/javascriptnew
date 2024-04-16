let age = parseInt(<input type="Enter your age: " />)
let gender = <input type="enter your gender: " />

let discount;

if (gender===female) {
  discount= ' you are eligible for 50% discount'
console.log(discount)
}
else if(gender===female && (age <5 && age>=8)){
  discount='you are eligible for 100% discount'
  console.log(discount)
}
else if (gender===female && age >65){
  discount = 'you are eligible for 80% discount'
  console.log(discount)
}
