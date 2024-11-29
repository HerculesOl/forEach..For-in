const meuObj = new XMLHttpRequest();

meuObj.open("GET", "https://raw.githubusercontent.com/DS-Senai/json/refs/heads/main/tecnologias.json");
meuObj.responseType = "json";
meuObj.send();



meuObj.onload = () =>{
var tec = meuObj.response
const bibli = tec

tec.tecnologias.forEach((element) => {
//     console.log(element.nome) 
//     console.log(element.tipo) 
//     console.log(element.categoria) 
//     console.log(element.descricao) 
//     console.log(element.popularidade) 
//     console.log(element.ano_lancamento) 
//     console.log(element.criador) 
// });

for(let chave in element ){
    console.log(`${chave}: ${element[chave]}`)
    if(chave == "bibliotecas_populares")
element.bibliotecas_populares.forEach((bibliotecas)=>{
    for(let y in bibliotecas){
        console.log(`${y}: ${bibliotecas[y]}`)
    }
})

}
}
)
}