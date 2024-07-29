let importar = require('./collectibles.js')
let hotToys = importar ("hot toys")
let bandai = importar ("bandai")
let starWars = importar("star wars")

//console.log(hotToys)
//console.log(bandai)
//console.log(starWars)

let unifiedCollectibles = [
    ...hotToys, ...bandai,...starWars
]
//console.log(unifiedCollectibles)

let figuras = {
    figuras:unifiedCollectibles,
    listFigure: function() {
        this.figuras.forEach((figuras,i) => {
            console.log(`${i + 1}_ ${figuras.marca}:${figuras.nombre} ==> $${figuras.precio} =>${figuras.stock}`)
        })
    },
    figuresByBrand:function(brand) {
    let figurasFiltradas = this.figuras.filter(({marca})=> {
        return marca.toLowerCase() == brand.toLowerCase()

    })
    return figurasFiltradas
}
}
//console.log(figuras.figuresByBrand("bandai"))
//figuras.listFigure()
//console.log(figuras)


//module.export = nombre