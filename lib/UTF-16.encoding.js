class encode {
    constructor(ascii, binary, hexa) {
        
        this.ascii = ascii;
        this.binary = binary;
        this.hexa = hexa;

    }
    static hexaToASCII(x) {
            let b = x.toString();
            let k = '';

            for(let i = 0; i < b.length; i += 2) {
                k += String.fromCharCode(parseInt(b.substr(i, 2), 16));

            }
            return k;

    }
    static binaryToASCII(x) {
            let string = parseInt(x, 2).toString(16);
            let response = "";

            for(let i = 0; i < string.length; i +=2) {
                response += String.fromCharCode(parseInt(string.substr(i, 2), 16));

            }
            return response;

    }
}

module.exports = encode;