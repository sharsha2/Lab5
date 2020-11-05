$(document).ready(function () {
    //Contact Form START
    try {
        $('#characterLeft').text('140 characters left');
        $('#message').keydown(function () {
            var max = 140;
            var len = $(this).val().length;
            if (len >= max) {
                $('#characterLeft').text('You have reached the limit');
                $('#characterLeft').addClass('red');
                $('#btnSubmit').addClass('disabled');
            }
            else {
                var ch = max - len;
                $('#characterLeft').text(ch + ' characters left');
                $('#btnSubmit').removeClass('disabled');
                $('#characterLeft').removeClass('red');
            }
        });
    }
    catch (e) { }

    //required graphic form START
    try {
        $("#paymentType").on('change', function () {
            const paymentType = this.value;
            if (paymentType == 'PayPal') {
                $("#gEmail").prop('required', true);
            } else {
                $("#gEmail").prop('required', false);
            }
        });
    }
    catch (e) { }
    //required graphic form END

    //BaguetteBox START
    try {
        baguetteBox.run('.tz-gallery');
    } catch (e) { }
  //BaguetteBox ENd
