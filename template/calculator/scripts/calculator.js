'use strict';
/**
 * core
 */
var input = '';
var output = '';
var operator = '';

/*sum calc*/
function sum(a, b) {
    return a + b;
}

/*sub calc*/
function difference(a, b) {
    return a - b;
}

/*Mult calc*/
function product(a, b) {
    return a * b;
}

/*div calc*/
function quotient(a, b) {
   return a / b;
}

/*symbol handling*/
function calculate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (b == 0) {
        return 'Invalid Calculation'
    } else if (isNaN(a) || isNaN(b)) {
        return 'Invalid Calculation';
    } else {
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

    //click
    document.addEventListener('click', function (evnt) {
        //event shortcuts
        var myEventclass = evnt.target.attributes.getNamedItem('class');
        var myEventID = evnt.target.attributes.getNamedItem('id');
        /*button*/
        if (myEventclass !== null) {
            Welcome();

            /*number button*/
            if (myEventclass.nodeValue === 'number') {
                input += evnt.target.attributes.getNamedItem('value').nodeValue;
            }

            /*operator button*/
            if (myEventclass.nodeValue === 'operator') {
                var operatorid = myEventID.nodeValue;
                operator = document.getElementById(operatorid).innerHTML;
                if (output === '') {
                    output = input;
                    input = '';
                }
            }

            /*command button*/
            if (myEventclass.nodeValue === 'command') {
                var commandid = myEventID.nodeValue;
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

