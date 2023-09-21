const amount = 12; //this is motager amount  = 12

if (amount < 10) {
  //this Czech smaller than 10  :: OK, small Number message will be printed
  console.log("small Number");
} else {
  //otherwise :: OK, normall Number message will be printed
  console.log("normall Number");
}

console.log(`hey it's my first node app!!!`); //message fake

console.log(__dirname); //addres folder project

console.log(__filename); //addres file project

setInterval(() => {
  //It receives a function and a port that calls this function infinitely within itself
  // console.log('hello world')
}, 1000);
