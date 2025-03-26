// Enum
var assento;
(function (assento) {
    assento[assento["JANELA"] = 10] = "JANELA";
    assento[assento["MEIO"] = 22] = "MEIO";
    assento[assento["CORREDOR"] = 99] = "CORREDOR";
})(assento || (assento = {}));
var meuAssento = assento.JANELA;
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
