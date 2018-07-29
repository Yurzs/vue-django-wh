$(document).ready(function () {
    $('input[type=checkbox]').removeAttr('checked');
    $(':input[type="submit"]').prop('disabled', true);
});

$('.login').change(function () {
                                    if ($('.login').val().length < 4){
                                        $('.login-check').css({'color':'grey'})
                                    }
})

$('.login').bind('input propertychange',function () {
                                    if ($('.login').val().length >= 4){
                                        $('.login-check').css('color','#73A100')
                                    }
})
$('.email').bind('input propertychange',function () {
                                    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                    if (re.test(String($('.email').val()).toLowerCase())){
                                        $('.email-check').css({'color':'#73A100'})
                                    }
                                    else{
                                        $('.email-check').css('color','grey')
                                    }

})

$('.password').bind('input propertychange',function () {
                                    var pass = $('.password').val()
                                    var strength = 0;
                                    var gradient = ['grey','#a15a00','#9fa100','#83b000','#73A100']
                                    var arr = [/.{8,}/, /[a-z]+/, /[0-9]+/, /[A-Z]+/, /[А-я]+/,/[$-/:-?{-~!"^_`\[\]]/];
                                    jQuery.map(arr, function(regexp) {
                                        if (pass.match(regexp))
                                            strength++;

                                    })
                                    $('.password-check').css({'color': gradient[strength]})
});
$('.password').change(function () {
    $('.repass-check').val('').css('color', 'grey')
});

$('.repass').bind('input propertychange',function () {
                                    if ($('.password').val() == $('.repass').val()){
                                        $('.repass-check').css({'color':'#73A100'})
                                    }
});

$('.repass').change(function () {
                                    if ($('.password').val() != $('.repass').val()){
                                        $('.repass-check').css({'color':'grey'})
                                    }

});

function RegisterFormChecker() {
    var pass = $('.password').val()
                                    var strength = 0;
                                    var gradient = ['#FFFFFF','#A18F00','#9FA100','#73A100']
                                    var arr = [/.{8,}/, /[a-z]+/, /[0-9]+/, /[A-Z]+/, /[А-я]+/,/[$-/:-?{-~!"^_`\[\]]/];
                                    jQuery.map(arr, function(regexp) {
                                        if (pass.match(regexp))
                                            strength++;

                                    })
                                    if ($('.password').val().length!=0 &&
                                        $('.password').val() == $('.repass').val() &&
                                        strength >=3 &&
                                        $('.login').val().length>= 4&&
                                        $('.g-recaptcha-response').val().length>0&&
                                        $('.rules').is(':checked')){
                                        $('.btn').css({'border-color':'#73A100'})
                                        $(':input[type="submit"]').prop('disabled', false);
                                    }
                                    else{
                                        $(':input[type="submit"]').prop('disabled', true).css('border-color','#6c757d')
                                    }
}
$(function () {
    setInterval(RegisterFormChecker,250)})


$('#reg').on('submit', function(event){
    $(':input[type="submit"]').prop('disabled', true);
    event.preventDefault();
    console.log("form submitted!")  // sanity check
    create_user();
});

function create_user() {
    var height = $('.auth-panel').height();
    var width = $('.auth-panel').width();
    $('.auth-panel button').prop('disabled', true);
    $('.auth-panel form').css({'opacity':'0.1'})
    $('.spinner ').html('<i class="fa fa-spinner fa-spin fa-3x fa-fw">').css({'top': $('.auth-panel form').height()/2.5 , 'left':  $('.auth-panel form').width()/2.5  ,'color': 'green','opacity': '1'})
    $.ajax({
        url : "/account/register/", // the endpoint
        type : "POST", // http method
        data : { csrfmiddlewaretoken : document.getElementsByName("csrfmiddlewaretoken")[0].value,
                 prefix : $('#prefix option:selected').attr('value'),
                 login : $('.login').val(),
                 email : $('.email').val(),
                 password : $('.password').val(),
                 repass : $('.repass').val(),
                 g_recaptcha : $('.g-recaptcha-response').val(),
                 rules : $('.rules').val(),
                 ajax : 1
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            grecaptcha.reset();
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
            $('.auth-panel form').css({'opacity':'1'});
            $(':input[type="submit"]').prop('disabled', true).css('border-color','#6c757d');
            $('.email-check').val('').css('color','grey'),
            $('.login-check').val('').css('color','grey'),
            $('.password-check').val('').css('color','grey'),
            $('.repass-check').val('').css('color','grey')
            $('#results').html('<div class="status-message" style="color:green;">'+json.result.message+'</div>');
            $('.spinner ').html('')

        },
        error : function(xhr,errmsg,err) {
            $('.auth-panel form').css({'opacity':'1'})
            $('.spinner ').html('')
            grecaptcha.reset();
            if ('login' in JSON.parse(xhr.responseText).errors){
                $('.login-check').css('color','#a11000')
            }
            var ajax_error_result = ''
            for (error in JSON.parse(xhr.responseText).errors){
                ajax_error_result += JSON.parse(xhr.responseText).errors[error] +'<p>'
            };
            $('#results').html('<div class="status-message" style="color:red;">'+ ajax_error_result+'</div>'); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }

        // handle a non-successful response

    });
};
