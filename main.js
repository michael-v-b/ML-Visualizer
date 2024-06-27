document.addEventListener('DOMContentLoaded', function () {


    var cards = document.querySelectorAll('.section_card');

    var regression_card = document.getElementById('linear_regression_card');

    var classification_card = document.getElementById('classification_card');

    regression_card.addEventListener('mouseup', function () {
        window.location = 'regression/regression.html';
    })

    classification_card.addEventListener('mouseup', function () {
        window.location = 'classification/classfication.html'
    })

    function darkenColor(color, factor = 0.2) {

        //get numbers from regex
        let color_arr = color.match(/\d+/g).map(Number);

        //darken by factor
        for (var i = 0; i < color_arr.length; i++){
            color_arr[i] = Math.floor(color_arr[i] * (1 - factor));
        }
        
        //color_arr = [r,g,b]

        return 'rgb(' + color_arr[0] + ',' + color_arr[1] + ',' + color_arr[2] + ')';
    }

    
    cards.forEach(function (card) {

        var originalColor = window.getComputedStyle(card).backgroundColor

        function mouseOver() {
            let darkenedColor = darkenColor(window.getComputedStyle(card).backgroundColor,-.1);
            card.style.backgroundColor = darkenedColor;
        }
    
        function mouseLeave() {
            card.style.backgroundColor = originalColor;
        }
    
        card.addEventListener('mouseover', mouseOver);
        
        card.addEventListener('mouseleave', mouseLeave);
    });

});