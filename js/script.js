$(document).ready(function () {

    $(".copyright").mouseover(function () {
        $(".copyright").hide()
        $(".info").show()
    })
    $(".info").mouseout(function () {
        $(".copyright").show()
        $(".info").hide()
    })
        (type = "text/javascript");

    // $(".teamName").mouseover(function(){
    //     $(".teamName").hide()
    //     $(".gitSite").show()
    // })
    // $(".gitSite").mouseout(function(){
    //     $(".teamName").show()
    //     $(".gitSite").hide()
    // })


})

document.querySelectorAll('.container').forEach(function (container) {
    const overlay = container.querySelector('.overlay')

    container.addEventListener('mousemove', function (e) {
        const x = e.offsetX
        const y = e.offsetY
        const rotateY = -1 / 5 * x + 20
        const rotateX = 4 / 30 * y - 20

        overlay.style = `background-position : ${x / 5 + y / 5}%`

        container.style = `transform : perspective(350px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    })

    container.addEventListener('mouseout', function () {
        overlay.style = 'filter : opacity(1)'
        container.style = 'transform : perspective (350px) rotateY(0deg) rotateX(0deg)'
    })
})
