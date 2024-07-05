document.addEventListener('DOMContentLoaded', function () { 


    var regression_card = document.getElementById('linear_regression_card');

    var classification_card = document.getElementById('classification_card');
   

    regression_card.addEventListener('mouseup', function () {
        window.location = 'regression/regression.html';
    });

    classification_card.addEventListener('mouseup', function () {
        window.location = 'classification/classfication.html'
    });



});