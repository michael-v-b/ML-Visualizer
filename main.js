document.addEventListener('DOMContentLoaded', function () {


    var cards = document.querySelectorAll('.section_card');

    function darkenColor(color, factor = 0.2) {
        console.log(color)

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
        card.addEventListener('mouseover', function () {
            console.log("mouseover")
            let darkenedColor = darkenColor(window.getComputedStyle(card).backgroundColor,-.1);
            console.log(darkenedColor)
            card.style.backgroundColor = darkenedColor;
        });
        
        card.addEventListener('mouseleave', function () {
            card.style.backgroundColor = originalColor;
        })

    });

});