interface Pessoa {
    nome: string;
    idade: number;
    sexo: string;
    andar(): string;
} 

let lukas: Pessoa = {
    nome: 'Lukas',
    idade: 20,
    sexo: 'Masculino',
    andar: () => {
        return 'andando'
    },
    falar: () => {
        return 'falando'
    }
}

// reabertura de interface
interface Pessoa {
    falar(): string;
}

// herança de interface
interface admin extends Pessoa {
    cargo: 'admin';
}

const Admin: admin = {
    nome: 'Lukas',
    idade: 20,
    sexo: 'Masculino',
    andar: () => {
        return 'andando'
    },
    falar: () => {
        return 'falando'
    },
    cargo: 'admin'
}