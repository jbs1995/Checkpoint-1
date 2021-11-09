function Microondas(opcao, tempo){
    switch(opcao){
        case "Pipoca":
            let ideal = 10
            if(tempo>=3*ideal){
                console.log("Kabum")
            }else if (tempo<ideal){
                console.log("Tempo insuficiente")
            }else if (tempo>2ideal){
                console.log("A comida queimou")
            }else{
            console.log("Prato pronto, bom apetite!")
            }
            break
case "Macarrão":
            ideal = 8
            if(tempo>=3*ideal){
                console.log("Kabum")
            }else if (tempo<ideal){
                console.log("Tempo insuficiente")
            }else if (tempo>2*ideal){
                console.log("A comida queimou")
            }else{
            console.log("Prato pronto, bom apetite!")
            }
            break
        case "Carne":
            ideal = 15
            if(tempo>=3*ideal){
                console.log("Kabum")
            }else if (tempo<ideal){
                console.log("Tempo insuficiente")
            }else if (tempo>2ideal){
                console.log("A comida queimou")
            }else{
            console.log("Prato pronto, bom apetite!")
            }
            break
        case "Feijão":
            ideal = 12
            if(tempo>=3*ideal){
                console.log("Kabum")
            }else if (tempo<ideal){
                console.log("Tempo insuficiente")
            }else if (tempo>2ideal){
                console.log("A comida queimou")
            }else{
            console.log("Prato pronto, bom apetite!")
            }
            break
        case "Brigadeiro":
            ideal = 8
            if(tempo>=3*ideal){
                console.log("Kabum")
            }else if (tempo<ideal){
                console.log("Tempo insuficiente")
            }else if (tempo>2ideal){
                console.log("A comida queimou")
            }else{
            console.log("Prato pronto, bom apetite!")
            }
            break
        default:
            console.log("Prato inexistente")
    }
}

Microondas("Pipoca",9)

