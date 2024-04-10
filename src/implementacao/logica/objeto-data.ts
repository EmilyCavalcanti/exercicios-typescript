type dato = {
    dia: string, 
    mes: string,
    ano: string
    }

function criaObjeto(data:string):dato { 
    const date:dato = { 
        dia:data.split("/")[0],
        mes:data.split("/")[1],
        ano:data.split("/")[2]
    }
    return date
}



module.exports = criaObjeto;