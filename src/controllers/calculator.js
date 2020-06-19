const convert = require('../utils/convert');
const calculatorService = require('../services/calculator');

module.exports = {
    async calculate(req, res) {
        let { operation, value1, value2 } = req.body;
        
        if (!operation) {
            return res.status(400).json({
                success: false,
                message: 'Operation is required'
            });
        }
        if (!['+','-','*','/','%'].includes(operation)) {
            return res.status(400).json({
                success: false,
                message: 'Operation must be +,-,*,/,% operators'
            });
        }
        if (!value1 || !value2) {
            return res.status(400).json({
                success: false,
                message: 'Values 1 and 2 are required'
            });
        }
        if (!/^[01]+$/.test(value1) || !/^[01]+$/.test(value2)) {
            return res.status(400).json({
                success: false,
                message: 'Values 1 and 2 must be binary number. Eg: 00000011'
            });
        }

        let result = calculatorService.calculate(operation, value1, value2);
        
        return res.status(200).json({
            success: true,
            result: convert.dec2bin(result).padStart(8, '0')
        });
    }
};
