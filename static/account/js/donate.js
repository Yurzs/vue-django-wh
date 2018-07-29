var form = 'yandex-money'
var account = $('#in-account').val()

jQuery('.yandexmoney').click(function(){
    form = 'yandex-money'
    $("#logo").attr('src','/static/account/img/donate/yandexmoney.png')
    $('#'+form).find('#donationtype').val('PC')
})

jQuery('.paypal').click(function(){
    form = 'paypal'
    $("#logo").attr('src','/static/account/img/donate/paypal.png')
})

jQuery('.mobile').click(function(){
    form = 'yandex-money'
    $("#logo").attr('src','/static/account/img/donate/mobile.png')
    $('#'+form).find('#donationtype').val('MC')
})

jQuery('.visamastercard').click(function(){
    form = 'yandex-money'
    $("#logo").attr('src','/static/account/img/donate/visamastercard.png')
    $('#'+form).find('#donationtype').val('AC')
})

$('.submit').click(function(){
    $('#'+form).submit()
})


$('#in-account').bind('input propertychange',function(){
    $('#paypal').find("input[name='label']").val($(this).val())
    $('#yandex-money').find("input[name='label']").val($(this).val())
    $('#yandex-money').find("input[name='targets']").val($(this).val())
})

$('#checkbox-account').on('change',function () {
    if ($(this).is(':checked')){
        $('#in-account').removeAttr('readonly')
        $('#in-account').css({'opacity':'1'})
        $('#in-account').val('')
    }
    else{
        $('#in-account').attr('readonly','readonly')
        $('#in-account').text(account)
        $('#in-account').val(account)
        $('#in-account').css({'opacity':'0.6'})
    }
});

$('#in-amount').inputmask("numeric", {
    radixPoint: ".",
    groupSeparator: ",",
    digits: 2,
    autoGroup: true,
    suffix: ' ₽',
    rightAlign: false,
    oncleared: function () {
        $(this).val('');
    }
});

$('#in-amount').bind('input propertychange',function(){
    $('#paypal').find("input[name='amount']").val($(this).val().replace(' ₽','').replace(',',''))
    $('#yandex-money').find("input[name='sum']").val($(this).val().replace(' ₽','').replace(',',''))
})