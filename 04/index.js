const isBucha = (a, b) => {
    if(a !== b) return 'Não é uma bucha';
    if(a && b === 0) {
        console.log('Branco');
    }
    if(a && b === 1) {
        console.log('Ás');
    }
    if(a && b === 2) {
        console.log('Duque');
    }
    if(a && b === 3) {
        console.log('Terno');
    }
    if(a && b === 4) {
        console.log('Quadra');
    }
    if(a && b === 5) {
        console.log('Quina');
    }
    if(a && b === 6) {
        console.log('Sena');
    }
}

console.log(isBucha(3, 3));
