class decode {
    constructor(ascii, hexa, binary) {
        
        this.hexa = hexa;
        this.binary = binary;
        this.ascii = ascii;

    }
    static ASCII_To_Hexa(x) {
            let content = "";

            for(let i = 0; i < x.length; i++) {
                content += x.charCodeAt(i).toString(16);

            }
            return content;

    }
    static ASCII_To_Binary(x) {
            let content = "";

            for(let i = 0; i < x.length; i++) {
                content += x.charCodeAt(i).toString(2);

            }
            return content;

    }
}

module.exports = decode;