'use strict';
/**
 * core
 */
/*sum calc*/
function sum(a, b) {
    if (isNaN(a + b)) {
        return 'Invalid Calculation';
    }
    return a + b;
}

/*sub calc*/
function difference(a, b) {
    if (isNaN(a - b)) {
        return 'Invalid Calculation';
    }
    return a - b;
}

/*Mult calc*/
function product(a, b) {
    if (isNaN(a * b)) {
        return 'Invalid Calculation';
    }
    return a * b;
}

/*div calc*/
function quotient(a, b) {
    if (!isFinite(a / b) || (isNaN(a / b))) {
        return 'Invalid Calculation';
    }
    return a / b;
}

/*symbol handling*/
/*TODO put this in UI or Core?*/
function calculate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    switch (operation) {
        case "+":
            return sum(a, b);
        case "−":
            return difference(a, b);
        case "∗":
            return product(a, b);
        case "÷":
            return quotient(a, b);
        default:
            return 'Invalid Calculation';
    }
}

/**
 * UI
 */
/*Welcome*/
function Welcome() {
    if (document.getElementById('output').innerHTML === 'Welcome') {
        document.getElementById('output').innerHTML = '';
    }
}

window.addEventListener('load', function () {
    document.getElementById('output').innerHTML = 'Welcome';
    //for calculations
    var input = '';
    var output = '';
    var operator = '';
    document.addEventListener('click', function (evnt) {
        /*button*/
        if (evnt.target.attributes.getNamedItem('class') !== null) {
            Welcome();

            /*number button*/
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'number') {
                input += evnt.target.attributes.getNamedItem('value').nodeValue;
            }

            /*operator button*/
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'operator') {
                var operatorid = evnt.target.attributes.getNamedItem('id').nodeValue;
                operator = document.getElementById(operatorid).innerHTML;
                if (output === '') {
                    output = input;
                    input = '';
                }
            }

            /*command button*/
            if (evnt.target.attributes.getNamedItem('class').nodeValue === 'command') {
                var commandid = evnt.target.attributes.getNamedItem('id').nodeValue;
                var command = document.getElementById(commandid).innerHTML;

                /*c button*/
                if (command === 'C') {
                    input = '';
                    output = '';
                    operator = '';
                } else {
                    /*start calc at "=" button*/
                    input = calculate(output, input, operator);
                    output = '';
                    operator = '';
                }
            }

            /*output*/
            document.getElementById('input').innerHTML = input;
            document.getElementById('output').innerHTML = output + " " + operator;
        }
    });
});
