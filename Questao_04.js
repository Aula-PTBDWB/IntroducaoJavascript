class Aluno{
    #primeiroNome;
    #segundoNome;
    #primeiraNota;
    #segundaNota;

    constructor(nome1, nome2, nota1, nota2){
        this.#primeiroNome = nome1;
        this.#segundoNome = nome2;
        this.#primeiraNota = nota1;
        this.#segundaNota = nota2;
    }

    nomeCompleto(){
        return this.#primeiroNome + " " + this.#segundoNome;
    }

    media(){
        return (this.#primeiraNota * 0.6) + (this.#segundaNota * 0.4);
    }

    situacao(){
        if(this.media() >= 6){
            return "Aprovado";
        }else{
            return "Reprovado";
        }
    }
}

let alunos = [
            new Aluno("Neymar", 'Junior', 10, 9),
            new Aluno("Cristiano", 'Ronaldo', 7, 8),
            new Aluno("Lebron", 'James', 6, 9),
            new Aluno("Maria", 'Joaquina', 7, 10),
            new Aluno("Romualdo", 'Muller', 4, 5),
            ];

alunos.forEach(aluno => alert(`Nome Completo: ${aluno.nomeCompleto()} \nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`));