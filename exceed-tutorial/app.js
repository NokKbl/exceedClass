// let x = 5 //variable
// let y = "hello"
// let z = function(){
//     if(x === "60"){
//         console.log('Yes 60 == "60"')
//     } else {
//         console.log('Yes 60 != "60"')
//     }
// }

// console.log("Hello world") //print

// console.log(z())


$(function() {
    let count = 0

    $('#append-button').on('click', function(){
        // $().append()
        $('#box').append('<h1>Hello</h1>')
    })

    $('#change-button').on('click', function(){
        // $().html()
        count++
        $('#header').html(`<h1>${count}</h1>`) //or ('<h1>' + count + '</h1>')
    })


})

