import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adiciona(negociacao: Negociacao) {
        this.negociacoes.push(negociacao);
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;
    }

    // lista(): Array<Negociacao> {
    //     // retorna uma cópia da lista original - para imutabilidade da original
    //     return [...this.negociacoes];
    // }
}
