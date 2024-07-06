document.addEventListener('DOMContentLoaded', function () {


    var menu_options = document.querySelectorAll('.menu_option');


    var regression_card = document.getElementById('linear_regression_card');

    var classification_card = document.getElementById('classification_card');

    regression_card.addEventListener('mouseup', function () {
        window.location = 'regression/regression.html';
    })

    classification_card.addEventListener('mouseup', function () {
        window.location = 'classification/classfication.html'
    })

    function changeColor(color, factor = .5) {

        //get numbers from regex
        let color_arr = color.match(/\d+/g).map(Number);

        //darken by factor
        for (var i = 0; i < color_arr.length; i++){
            if (color_arr[i] < 5) {
                color_arr[i] += 10;
            }
            color_arr[i] = Math.floor(color_arr[i] * (1 + factor));
        }
        
        //color_arr = [r,g,b]

        return 'rgb(' + color_arr[0] + ',' + color_arr[1] + ',' + color_arr[2] + ')';
    }

    


    var lightened = false;

    menu_options.forEach(function (menu_option) {

        var originalColor = window.getComputedStyle(menu_option).backgroundColor

        function mouseOver() {
            if (!lightened) {
                let lightenedColor = changeColor(window.getComputedStyle(menu_option).backgroundColor, 1);
                menu_option.style.backgroundColor = lightenedColor;
            }
            lightened = true;
        }
    
        function mouseLeave() {
            menu_option.style.backgroundColor = originalColor;
            lightened = false;
        }
    
        menu_option.addEventListener('mouseover', mouseOver);
        menu_option.addEventListener('mouseleave', mouseLeave);
    });

});