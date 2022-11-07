function randomsito(cantidad){
    let numRandom = Math.floor(Math.random() * (10 - 1 + 1) + 1);

    let valorAparece = [];

    for(let i = 0; i <= 1000; i++){
        valorAparece.push({ valor: i, aparece: 0 });
    }

    for(let i = 0; i <= cantidad; i++){
        valorAparece[numRandom].aparece++;
    }

    return valorAparece;
}

process.on('message', msg => {
    const randoms = randomsito(msg);
    process.send(randoms);
    process.exit();
 })
 
 process.send('listo');