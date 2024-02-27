(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        //------------ File Upload -------------

        $('.file-input').change(function () {
            var curElement = $('.image');
            console.log(curElement);
            var reader = new FileReader();

            reader.onload = function (e) {
                // get loaded data and render thumbnail.
                curElement.attr('src', e.target.result);
            };

            // read the image file as a data URL.
            reader.readAsDataURL(this.files[0]);
        });



        //------------ Nice Number -------------

        $('input[type="number"]').niceNumber();





    }); //---document-ready-----

}(jQuery));