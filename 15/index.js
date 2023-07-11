const primeiroNome = "Mario";
const sobrenome = "Bros";
const apelido = "";

if(primeiroNome && !sobrenome && !apelido) {
    console.log(primeiroNome)
}
else if(primeiroNome && !sobrenome && apelido) {
    console.log(apelido)
}
else if(primeiroNome && sobrenome && !apelido) {
    console.log(`${primeiroNome} ${sobrenome}`)
}