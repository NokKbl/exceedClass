$(function () {

    // $('#add-btn').on('click', function () {
    //     let title = $('#title').val()
    //     let info = $('#info').val()

    //     if (title !== '' && info !== '') {
    //         $('#show-box').append(`<h1>${title}</h1><p>${info}</p>`)
    //         $("#title").val('')
    //         $("#info").val('')
    //     } else {
    //         alert("Fill all fucking input textbox!!!")
    //     }
    // })



    setInterval(function(){
        $.ajax({
            type: "GET",
            url: "http://exceed.srakrn.me/api/jacky-group/view/",
            dataType: "text",
            success: function (response) {
                $('#result').html(`<h1>${response}</h1>`)
            },
            fail: function(response){
                console.log(response)
            }
        });
    }, 1000)

    $('#send-button').on('click', function(){
        $.ajax({
            type: "POST",
            url: "http://exceed.srakrn.me/api/jacky-group/set/",
            data: {
                value: $('#text-input').val()
            },
            dataType: "text",
            success: function (response) {
                console.log(response)
            }
        });
    })
})