const convert = require('../utils/convert');

module.exports = {
    calculate: (operation, n1, n2) => {
        let convertedValue1 = parseInt(convert.bin2dec(n1));
        let convertedValue2 = parseInt(convert.bin2dec(n2));
        let result;
        switch (operation) {
            case '+':
                result = convertedValue1 + convertedValue2;
                break;
            case '-':
                result = convertedValue1 - convertedValue2;
                break;
            case '*':
                result = convertedValue1 * convertedValue2;
                break;
            case '/':
                result = convertedValue1 / convertedValue2;
                break;
            case '%':
                result = convertedValue1 % convertedValue2;
                break;
            default: 
                result = 0;
                break;
        }
        return result;
    }
};