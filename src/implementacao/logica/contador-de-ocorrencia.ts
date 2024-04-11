function contadorDeOcorrencia(texto: string, letra: string) {
    
    let contador = 0;
    for (let i =0; i <texto.length; i++){
        let palavra = letra;
        if (texto[i] == palavra ){
            contador++
        }}
        return contador;
        
}
module.exports = contadorDeOcorrencia;