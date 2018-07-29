$(document).ready(function () {
    $('input[type=checkbox]').removeAttr('checked');
    $(':input[type="submit"]').prop('disabled', true);
});

jQuery('.js-counter').bind('input propertychange', function(){
                                    var $this = $(this);
                                    if ($('#count-'+$this.data('counter')).val() < 1){
                                        $('#count-'+$this.data('counter')).val(1)
                                    }
                                    if ($('#count-'+$this.data('counter')).val() > 65535){
                                        $('#count-'+$this.data('counter')).val(1)
                                    }
                                    if($('#enchant-'+$this.data('counter')).val() == 0 ) {
                                        $('#sub_price-' + $this.data('counter') + ' span').text(Number($('#count-' + $this.data('counter')).val() * $('#sub_price-' + $this.data('counter')).data('price')).toFixed(2)+ ' ₽')
                                    }
                                    if(!$('#enchant-'+$this.data('counter')).val()){
                                        $('#sub_price-' + $this.data('counter') + ' span').text(Number($('#count-' + $this.data('counter')).val() * $('#sub_price-' + $this.data('counter')).data('price')).toFixed(2) + ' ₽')
                                    }
                                    else{
                                        $('#sub_price-' + $this.data('counter') + ' span').text(Number(($('#enchant-'+$this.data('counter')).val()/20 +1) * $('#count-' + $this.data('counter')).val() * $('#sub_price-' + $this.data('counter')).data('price')).toFixed(0) + ' ₽')
                                    }
})

jQuery('.enchant').bind('input propertychange', function(){
                                    var $this = $(this);
                                    if ($('#enchant-'+$this.data('counter')).val() < 1){
                                        $('#enchant-'+$this.data('counter')).val(0)
                                    }
                                    if ($('#enchant-'+$this.data('counter')).val() > 65535){
                                        $('#enchant-'+$this.data('counter')).val(65535)
                                    }
                                    $('#sub_price-'+$this.data('counter')+' span').text(Number($('#count-' + $this.data('counter')).val() * ($('#enchant-'+$this.data('counter')).val()/20 +1) * $('#sub_price-'+$this.data('counter')).data('price')).toFixed(0) + ' ₽')

})

jQuery('.js-sum').on('DOMSubtreeModified',function () {
                                    var sum = 0;
                                    for (i = 0; i < $('.gds-buy-summ').data('count') +1;i++) {
                                        if ($('#customControlInline'+i).prop("checked")){
                                            sum += Number($('#sub_price-'+i+' span').text().replace(' ₽',''));
                                        }
                                    }
                                    $('#total_sum span').text(sum)
})

jQuery('.js-button').on('change', function(){
                                    var sum = 0;
                                    console.log($('.gds-buy-summ').data('count'))
                                    for (i = 0; i < $('.gds-buy-summ').data('count') +1 ;i++) {
                                        if ($('#customControlInline'+i).prop("checked")){
                                            sum += Number($('#sub_price-'+i+' span').text().replace(' ₽',''));
                                        }
                                    }
                                    $('#total_sum span').text(sum)
})

$('.order-summ').click(function(){
                                    $(':input[type="submit"]').prop('disabled', true);
})

jQuery('.order-summ').on('DOMSubtreeModified', function(){
                                    var $balance = Number($('.account-balance').text())
                                    var $order = Number($('.order-summ').text())

                                    if ($order > $balance){
                                        $('#buy button').prop('disabled', true).css("background-color","#7D2920")
                                    }
                                    else {
                                        $('#buy button').prop('disabled', false).css("background-color","#197d24")
                                    }
                                    if ($order == 0){
                                        $('#buy button').prop('disabled', true).css("background-color","#6c757d")
                                    }

})

$('#buy').on('submit', function(event){
    $(':input[type="submit"]').prop('disabled', true);
    event.preventDefault();
    console.log("form submitted!");  // sanity check
    buy_item();
});

function buy_item() {
    var item =[];
    var count = [];
    var enchant = [];

    jQuery($('.js-button:checkbox:checked').each(function () {
        item.push($(this).val())
        count.push($('#count-'+$(this).data('counter')).val())
        enchant.push($('#enchant-'+$(this).data('counter')).val())
        })
        );

    $.ajax({
        url : "/account/store/item", // the endpoint
        type : "POST", // http method
        data : { csrfmiddlewaretoken : document.getElementsByName("csrfmiddlewaretoken")[0].value,
                 character : $('#character option:selected').attr('value'),
                 item : item,
                 count : count,
                 enchant : enchant,
        }, // data sent with the post request

        // handle a successful response
        success : function(json) {
            console.log(json); // log the returned json to the console
            console.log("success"); // another sanity check

            if (json.error){
                var $error_list = []
                for (var item in JSON.parse(json)){
                    $('.'+item).css('background-color','#ffdbde8c')
                    $error_list.push(JSON.parse(json)[item][0]["message"])
                }
                $(':input[type="submit"]').prop('disabled', true).css('background-color','#6c757d');

            }
            else{
                $('.account-balance').text(json.balance)
                $('input[type=checkbox]').each(function () {
                    $(this).prop('checked',false)
                })
                $(':input[type="submit"]').prop('disabled', true).css('background-color','#6c757d');
                }
        },
        error : function(xhr,errmsg,err) {
            $('.operation-status').html('<span>'+JSON.parse(xhr.responseText).error+'</span>'); // add the error to the dom
            console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
        }

        // handle a non-successful response

    });
};