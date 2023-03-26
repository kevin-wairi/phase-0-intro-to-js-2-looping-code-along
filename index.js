const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

names = ["Charlie", "Samip", "Ali"]
function writeCards(namesArray,event){
    let messages = [];
    for (let index = 0; index < namesArray.length; index++) {
        messages.push(`Thank you, ${namesArray[index]}, for the wonderful ${event} gift!`);
        
    }
    console.log(messages)
    return messages;
}
writeCards(names, "Holiday");

function countDown(){
   let numb = 10
    while (numb !==-1) {
        console.log(numb)
        numb--
        
    }
}
countDown()