function random(cantidad) {
    if(cantidad){
        return Math.floor((Math.random() * (cantidad - 1 + 1)) + 1);
    }else{
        return Math.floor((Math.random() * (100000000 - 1 + 1)) + 1);
    }
}
  
process.on("message", (msg,cant) => {
    if (msg[0] == "start") {
        const numRand = random(msg[1]);
        process.send(numRand);
    }
});
