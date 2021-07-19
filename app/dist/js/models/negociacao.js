export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    static criaDe(dataParam, quantidadeParam, valorParam) {
        const exp = /-/g;
        const data = new Date(dataParam.replace(exp, ','));
        const quantidade = parseInt(quantidadeParam);
        const valor = parseFloat(valorParam);
        return new Negociacao(data, quantidade, valor);
    }
}
