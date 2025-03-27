//função
function nomeDaFuncao(parametro) {
    return parametro;
}
function somar(a, b) {
    return a + b;
}
somar(2, 3);
//arrow function
var somar2 = function (a, b) {
    return a + b;
};
//numero
var numero;
var numero2 = 3;
//string
var nome;
var nome2 = "Chora-dev";
//boolean
var ativo;
var ativo2 = true;
//undefined
var indefinido;
var indefinido2 = undefined;
//null
var nulo;
var nulo2 = null;
//void
var semRetorno;
function semRetornoFuncao() {
    console.log('sem retorno');
}
//any
var qualquerCoisa;
var qualquerCoisa2;
qualquerCoisa = 3;
qualquerCoisa = 'string';
//unknown
var desconhecido;
desconhecido = 3;
function fazAlgo(parametro) {
    if (typeof parametro === 'string') {
        console.log(parametro.toUpperCase());
    }
    else {
        console.log('não é uma string');
    }
}
//array
var arrayNumeros;
var arrayNumeros2;
var arrayNumeros3 = [1, 2, 3];
//tupla
var tupla;
var tupla2;
// Objeto
var objeto;
var objeto2;
var objeto3;
// Enum
var assento;
(function (assento) {
    assento[assento["JANELA"] = 0] = "JANELA";
    assento[assento["MEIO"] = 1] = "MEIO";
    assento[assento["CORREDOR"] = 2] = "CORREDOR";
})(assento || (assento = {}));
var meuAssento = assento.MEIO;
console.log(meuAssento);
var diaDaSemana;
(function (diaDaSemana) {
    diaDaSemana["SEGUNDA"] = "segunda";
    diaDaSemana["TERCA"] = "ter\u00E7a";
    diaDaSemana["QUARTA"] = "quarta";
    diaDaSemana["QUINTA"] = "quinta";
    diaDaSemana["SEXTA"] = "sexta";
    diaDaSemana["SABADO"] = "s\u00E1bado";
    diaDaSemana["DOMINGO"] = "domingo";
})(diaDaSemana || (diaDaSemana = {}));
var hojeEh = diaDaSemana.SEXTA;
console.log(hojeEh);
