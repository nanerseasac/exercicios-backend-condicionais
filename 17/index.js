//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorEmCentavos = valorPago * 100


const valorParcela = valorDoProduto / quantidadeDoParcelamento;

const restanteAPagar = (valorDoProduto - valorEmCentavos) / valorParcela;

console.log(`Restam ${restanteAPagar} parcelas de R$${valorParcela}`);
