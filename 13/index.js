//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === 'credito') {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.05)
    console.log(valorFinal)
}
if(tipoDePagamento === 'cheque') {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.03)
    console.log(valorFinal)
}
if(tipoDePagamento === 'debito ou dinheiro') {
    const valorFinal = valorDoProduto - (valorDoProduto * 0.10)
    console.log(valorFinal)
}