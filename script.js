function solve() {
    var intervalAInput = document.getElementById("intervalA").value;
    var intervalBInput = document.getElementById("intervalB").value;
    var iterationsInput = document.getElementById("iterations").value;
    
    var a = parseFloat(intervalAInput);
    var b = parseFloat(intervalBInput);
    var iterations = parseInt(iterationsInput);
    
    if (isNaN(a) || isNaN(b) || isNaN(iterations)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }
    
    var result = bisectionMethod(a, b, iterations);
    
    document.getElementById("result").value = result.toFixed(6);
}

function bisectionMethod(a, b, iterations) {
    var fa = Math.pow(a, a) - 100;
    var fb = Math.pow(b, b) - 100;
    
    if (fa * fb >= 0) {
        alert("El intervalo no cumple con los requisitos del método de la bisección.");
        return NaN;
    }
    
    for (var i = 0; i < iterations; i++) {
        var c = (a + b) / 2;
        var fc = Math.pow(c, c) - 100;
        
        if (Math.abs(fc) < 1e-6) {
            return c;
        }
        
        if (fa * fc < 0) {
            b = c;
            fb = fc;
        } else {
            a = c;
            fa = fc;
        }
    }
    
    return (a + b) / 2;
}