var form = document.querySelector('.formWithValidation')
var validateBtn = form.querySelector('.validateBtn')
var fields = form.querySelectorAll('.field')




var generateError = function (text) {
    var error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text
    return error
}

var removeValidation = function () {
    var errors = form.querySelectorAll('.error')

    for (var i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}

var checkFieldsPresence = function () {
    for (var i = 0; i < fields.length; i++) {
        if (!fields[i].value) {
            console.log('field is blank', fields[i])
            var error = generateError('Необходимо заполнить')
            form[i].parentElement.insertBefore(error, fields[i])
        }
    }
}


var radioButtonFill = function() {
    var radios = document.getElementsByName("rb");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) alert("Must check some option!");
    return formValid;
    
}
    
    


form.addEventListener('submit', function (event) {
    event.preventDefault()

    removeValidation()

    checkFieldsPresence()

    radioButtonFill()

    
})