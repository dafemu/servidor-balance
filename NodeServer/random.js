function random(cantidad) {
    if(cantidad){
        return Math.floor((Math.random() * (cantidad - 1 + 1)) + 1);
    }else{
        return Math.floor((Math.random() * (100000000 - 1 + 1)) + 1);
    }
}
  
process.on("message", (msg,cant) => {
    if (msg == "start") {
        const numRand = random(cant);
        process.send(numRand);
    }
});
