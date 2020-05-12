# ascii-encoding

> This package will be used to encode or decode binary or hexadecimal code to ascii encoding or from the ascii encoding

## Contact me

If you have any questions do not hesitate to join me on my [`discord server`](https://discord.gg/ES52WDg)

## API

* <a href = '#hexa'><code>encode<b>.hexaToASCII()</b></code></a>
* <a href = '#binaryOBS'><code>encode<b>.binaryToASCII()</b></code></a>
* <a href = '#decodeHEX'><code>decode<b>.ASCII_To_Hexa()</b></code></a>
* <a href = '#decodeBIN'><code>decode<b>.ASCII_To_Binary()</b></code></a>

<a name = "decodeHEX"></a>

## Decode the ASCII encoding to the hexadecimal code

```js
const { decode } = require('ascii-encoding');
const csl = console.log;

csl(decode.ASCII_To_Hexa('the house')); /* () => Do not translate, the hexadecimal code we get will be just for "the house"
                                            * () => "74686520686f757365" */
```
<a name = "hexa"></a>

## Encode the hexadecimal code to the ASCII encoding

```js
const { encode } = require('ascii-encoding');
let x = '74686520686f757365';

console.log(encode.hexaToASCII(x)); /* () => Again, do not translate else it will not be worth anything anymore
                                        * () => "the house" */
```
<a name = "decodeBIN"></a>

## Decode the ASCII encoding to binary code

```js
const { decode } = require('ascii-encoding');
let x = "the house";

console.log(decode.ASCII_To_Binary(x)); /* () => "0111010001101000011001010110100001101111011101010111001101100101" */
```
<a name = "binaryOBS"></a>

## Obsolete method (for encode the binary code to the ASCII encoding)

```js
const { encode } = require('ascii-encoding');
let x = "0111010001101000011001010110100001101111011101010111001101100101"; /* () => Do not put space in the binary code */

console.log(encode.binaryToASCII(x)); /* () => "thehout\u0000" */
```

## MIT License

Copyright (c) 2019 wazabix

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
"# ascii-encoding" 
