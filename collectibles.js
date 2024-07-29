let importar=(figuras) => {

    let fs=require('fs')
    let nombreFiguras= 0;

    if (figuras === "hot toys"){
        nombreFiguras = "figuras1"
    }
    else if (figuras === "bandai"){
        nombreFiguras = "figuras2"
    }
    else if (figuras === "star wars"){
        nombreFiguras = "figuras3"
    }

    let path=`./datos/${nombreFiguras}.json`
    let figurasJson = fs.readFileSync(path,'utf-8')
    let figurasParse = JSON.parse(figurasJson)
    return figurasParse
}

//console.log(importar("hot toys"))
module.exports = importar