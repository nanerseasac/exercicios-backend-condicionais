const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos

//seu código aqui

if(aposentada || portadoraDeDoenca) {
    console.log('**ISENTA**')
}
else if(!aposentada && !portadoraDeDoenca && totalDeRendimentos < 2855970) {
    console.log('**VAZA LEAO! JA TA DIFICIL SEM VOCE**')
}
else if(!aposentada && !portadoraDeDoenca && totalDeRendimentos > 2855970) {
    console.log('**PEGA LEAO**')
}
