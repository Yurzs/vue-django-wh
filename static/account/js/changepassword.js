jQuery('#changepassword').bind('input propertychange', function () {
    $('#changepassword button').prop('disabled', false);
})

$('#changepassword').on('submit', function(event){
    $(':input[type="submit"]').prop('disabled', true);
    event.preventDefault();
    console.log("form submitted!")  // sanity check
    change_password();
});

function change_password() {
    var height = $('.pas-control').height();
    var width = $('.pas-control').width();
    $('.pas-control form').css({'opacity':'0.1'})
    $('.spinner').html('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>').css({'top': $('.pas-control').height()/2 , 'left':  $('.pas-control').width()/2 - 35 ,'color': 'green','opacity': '1'})
    $.ajax({
        url : "/account/security/?security&password", // the endpoint
        type : "POST", // http method
        data : { csrfmiddlewaretoken : document.getElementsByName("csrfmiddlewaretoken")[0].value,
                 password : $('.password-reset').val(),
                 newpassword : $('.newpassword-reset').val(),
                 newrepass : $('.newrepass-reset').val(),
                 ajax : true,
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check
            $('.spinner ').html('')
            $('.pas-control form ').css({'opacity':'1'})
            if (json.error){
                var result = ''
                for (item in json.form.errors){
                    result = result + item+': '+ json.form.errors[item]+ '\n'
                }
                $('.status-message').text(result + json.form.non_field_errors).css('color','red')
                $(':input[type="submit"]').prop('disabled', true).css('background-color','#6c757d');

            }
            else{
                $('.status-message').text(json.result).css('color','green')
                $('input[type=password]').each(function () {
                    $(this).val('')
                })
                $(':input[type="submit"]').prop('disabled', true).css('background-color','#6c757d');
                }
        },
        error : function(xhr,errmsg,err) {
            $('.spinner ').html('')
            $('.pas-control form').css({'opacity':'1'})
            $('#results').html('<span>Данный логин уже занят</span>'); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }

        // handle a non-successful response

    });
}
