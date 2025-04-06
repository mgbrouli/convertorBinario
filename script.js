let mode = 'binToDec'

const elements = {
    convertBtn: document.querySelector("#convert"),
    binToDec : document.querySelector("#binToDec"),
    decToBin : document.querySelector("#decToBin"),
    textToBin : document.querySelector("#textToBin"),
    binToText : document.querySelector("#binToText"),
    title : document.querySelector("#title"),
    input: document.querySelector("#binaryInput"),
    result: document.querySelector("#result")
}

const modeTitles={
    binToDec: "Binário para Decimal",
    decToBin: "Decimal para Binário",
    textToBin: "Texto para Binário",
    binToText: "Binário para Texto"
}


function setMode(selectMode){
    mode = selectMode
    elements.title.textContent = modeTitles[mode]

    elemets.input.value = "";
    elements.result.textContent = ""
}




function convertToDecimal(txt){
    
    if(/^[01]+$/.test(txt)){
        let decimal = parseInt(txt, 2);
        elements.result.textContent = decimal;

    }else{
        elements.result.textContent = "Entrada inválida";
    }
}

function convertToBinary(txt){
    
    let decimal = parseInt(txt)
    if(!isNaN(decimal)){
        binary = decimal.toString(2);
        elements.result.textContent = binary

    }else{
        elements.result.textContent = "Entrada inválida";
    }
}

function binToText(txt){
    const text = txt.split(' ').map(byte => String.fromCharCode(parseInt(byte, 2))).join('')
    elements.result.textContent = text
}

function textToBin(txt){
    const bin = txt.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
    elements.result.textContent = bin
}

function handleConvert(){
    const value = elements.input.value.trim();
    if(mode === "binToDec") return convertToDecimal(value)
    if(mode === "decToBin") return convertToBinary(value)
    if(mode === "textToBin") return textToBin(value)
        else return binToText(value)
}

elements.convertBtn.addEventListener("click",handleConvert)
elements.binToDec.addEventListener("click", ()=> setMode("binToDec"));
elements.decToBin.addEventListener("click", ()=>setMode("decToBin"));
elements.textToBin.addEventListener("click", ()=> setMode("textToBin"))
elements.binToText.addEventListener("click", ()=>setMode("binToText"))