$(function () {
    let previous = ''
    let inputVal = ''

    setInterval(function () {
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view/",
            dataType: "text",
            success: function (response) {
                if (previous !== response & response !== inputVal) {
                    $('#result').append(`
                    <h2>Others:</h2>
                    <div class="alert alert-primary" role="alert" style="width: 400px;">${response}</div>
                    `)
                }
                previous = response
            }
        });

        // $('#result').animate({scrollTop: '800px'});
        // if ($('#result').scrollTop() !== $('#result').scrollHeight()) {
            
        // }else{
            $('#result').animate({ scrollTop: $('#result')[0].scrollHeight});
        // }
    }, 1000)

    $('#text-input').on('keyup', function (event) {
        if (event.keyCode == 13){
            $('#send-button').click()
        }
    });

    $('#send-button').on('click', function () {
        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/jacky-group/set/",
            data: {
                value: $('#text-input').val()
            },
            dataType: "text",
            success: function (response) {
                $('#result').append(`
                <div style="text-align: right">
                <h2>Me:</h2>
                <div class="alert alert-success" role="alert" style="width: 400px;">${$('#text-input').val()}</div>
                </div>
                `)
                inputVal = $('#text-input').val()
                $('#text-input').val('')
            }
        });
    })
})