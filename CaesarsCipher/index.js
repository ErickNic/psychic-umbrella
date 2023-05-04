const ci = {
    A:'N',
    B:'O',
    C:'P',
    D:'Q',
    E:'R',
    F:'S',
    G:'T',
    H:'U',
    I:'V',
    'J':'W',
    'K':'X',
    'L':'Y',
    'M':'Z',
    'N':'A',
    'O':'B',
    'P':'C',
    'Q':'D',
    'R':'E',
    'S':'F',
    'T':'G',
    'U':'H',
    'V':'I',
    'W':'J',
    'X':'K',
    'Y':'L',
    'Z':'M',
}
const rango = /[A-Z]/gi;
const rot13 = (str) =>{
    const strToArray = str.toUpperCase().split('');
    let result = [];
    strToArray.forEach(element => {
        const re = element.toString()
        if(element.toLowerCase().match(rango)){
            const pushableValue = ci[re];
            result.push(pushableValue)
        }else{
            result.push(element)
            console.log(result)
        }

        
    });
    result = result.toString().replaceAll(',','');
    return result
}

console.log(rot13('HOLA AMIGO'));