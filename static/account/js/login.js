$(document).ready(function () {
    $(':input[type="submit"]').prop('disabled', true);
});

function LoginFormChecker() {
                                    if ($('.login-auth').val().length!=0 &&
                                        $('.password-auth').val().length !=0 &&
                                        $('.g-recaptcha-response').val().length>0){
                                        $(':input[type="submit"]').prop('disabled', false).css('border-color','#73A100');
                                    }
                                    else{
                                        $(':input[type="submit"]').prop('disabled', true).css('border-color','#6c757d')
                                    }
}
$(function () {
    setInterval(LoginFormChecker,250)})
