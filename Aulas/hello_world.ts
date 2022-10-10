// 1.0 - TIPAGEM NO TYPESCRIPT

// 1.1 - TIPAGEM IMPLICITA

let username = 'shaolin_matador_de_porco'
//username = 678
username = 'jeniferAlicate'

// 1.2 - TIPAGEM EXPLICITA
let pi: number = 3.1415
//pi = 'Suco Tang'
pi = 57.6

let login: boolean = true
//login = 'permissao'
login = false

// UNION TYPES - uma variavel pode assumir mais de um tipo (pipe)
let rg: number | string | boolean = 99010342965
rg = '99010342965'

// tipo any: variavel que guardar qualquer tipo de valor
let generico: any = []
generico = {
    a: "",
    b: 8,
    c: true
}
generico = "Eu sou generico"
generico = 6.89

const listaDeNomes: string[] = ['João Pedro', 'Vitória', 'Claudia']
listaDeNomes.push('Tibério')

const notas: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//notas.push('oi')

const valores: Array<string | number> = ['oi', 44, 'gf40505', 23543]
const arr: Array<boolean> = [true, false, true, false, false]
const lista: Array<any> = [1, true, {}, 'e agora?']
const lista2: any [] = [1, true, {}, 'e agora?']
