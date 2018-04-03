

class CalcCS {

    constructor() {

    }

    doCalc(dpi, sens) {

        var eeisus = 1,
            eetrue = "TRUE",
            eefalse = "FALSE",
            eedec = ".",
            eeth = ",",
            eedecreg = new RegExp("\\.", "g"),
            eethreg = new RegExp(",", "g"),
            eecurrencyreg = new RegExp("[$]", "g"),
            eepercentreg = new RegExp("%", "g"),
            jsonLocal = '{"eeisus":1,"eetrue":"TRUE","eefalse":"FALSE","eedec":".","eeth":",","eedecreg":["\\\\.","g"],"eethreg":[",","g"],"eecurrencyreg":["[$]","g"],"eepercentreg":["%","g"]}';


        function myIsNaN(x) {
            return isNaN(x) || typeof x == "number" && !isFinite(x)
        }

        function product3(arr, rt, ct, rb, cb) {
            for (var product = 1, ii = rt; ii <= rb; ii++)
                for (var jj = ct; jj <= cb; jj++) product *= arr[ii][jj];
            return product
        }

        function product(cnt, vsum, vcnt, x) {
            for (var product = vsum, ii = 0; ii < x.length; ii++) product *= product3(x[ii][0], x[ii][1], x[ii][2], x[ii][3], x[ii][4]);
            return product
        }

        function round(n, nd) {
            if (isFinite(n) && isFinite(nd)) {
                var sign_n = n < 0 ? -1 : 1,
                    abs_n = Math.abs(n),
                    factor = Math.pow(10, nd);
                return sign_n * Math.round(abs_n * factor) / factor
            } else return NaN
        }

        function eeparseFloat(str) {
            str = String(str).replace(eedecreg, ".");
            var res = parseFloat(str);
            if (isNaN(res)) return 0;
            else return res
        }
        var near0RegExp = new RegExp("[.](.*0000000|.*9999999)");

        function eedisplayFloat(x) {
            if (myIsNaN(x)) return Number.NaN;
            else {
                var str = String(x);
                if (near0RegExp.test(str)) {
                    x = round(x, 8);
                    str = String(x)
                }
                return str.replace(/\./g, eedec)
            }
        }



        for (var arr1xB3B3 = new Array(1), ii = 0; ii < 1; ii++) {
            arr1xB3B3[ii] = new Array(1);
            for (var jj = 0; jj < 1; jj++) arr1xB3B3[ii][jj] = 0
        }
        for (var arr1xB4B4 = new Array(1), ii = 0; ii < 1; ii++) {
            arr1xB4B4[ii] = new Array(1);
            for (var jj = 0; jj < 1; jj++) arr1xB4B4[ii][jj] = 0
        }
        for (var arr1xB5B5 = new Array(1), ii = 0; ii < 1; ii++) {
            arr1xB5B5[ii] = new Array(1);
            for (var jj = 0; jj < 1; jj++) arr1xB5B5[ii][jj] = 0
        }
        for (var arr1xB6B6 = new Array(1), ii = 0; ii < 1; ii++) {
            arr1xB6B6[ii] = new Array(1);
            for (var jj = 0; jj < 1; jj++) arr1xB6B6[ii][jj] = 0
        }
        var eecm1 = [
            [arr1xB3B3, 0, 0, 0, 0],
            [arr1xB4B4, 0, 0, 0, 0],
            [arr1xB5B5, 0, 0, 0, 0],
            [arr1xB6B6, 0, 0, 0, 0]
        ];



        arr1xB3B3[0][0] = dpi; //data.XLEW_1_3_2;
        arr1xB4B4[0][0] = 1; //data.XLEW_1_4_2;
        arr1xB5B5[0][0] = sens; // data.XLEW_1_5_2;
        arr1xB6B6[0][0] = 0.022; //data.XLEW_1_6_2;
        var cA10B = round(product(4, 1, 0, eecm1), 1),
            cA11B = round(product(4, 1, 0, eecm1) * (1 / 2.54), 1),
            cA12B = round(360 / cA10B, 1),
            cA13B = round(360 / cA11B, 1);
        // data.XLEW_1_10_2 = cA10B;
        // data.XLEW_1_11_2 = cA11B;
        // data.XLEW_1_12_2 = cA12B;
        // data.XLEW_1_13_2 = cA13B;

        return [cA10B, cA11B, cA12B, cA13B];

    }



}

export default CalcCS;