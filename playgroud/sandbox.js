let a = "123456789";
for (let i = 0; i <= a.length ; i++){
  console.log(a.slice(-i));
  console.log(this);
}