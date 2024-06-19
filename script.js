function convertText(){
    const text = document.getElementById('text').value;
    let result = '';

    if(/^[01 ]+$/.test(text)){
        //binary to text
    const binaryarray = text.split(" ");
    for(let i=0; i<binaryarray.length;i++)
        {
            result += String.fromCharCode(parseInt(binaryarray[i], 2));
        }
    }
    else{
        // text to binary
        for(let i=0; i<text.length;i++){
            result+= text[i].charCodeAt(0).toString(2) + " ";
        }
    }
    document.getElementById('result').value = result.trim();
}