$(document).ready(function(){

    $(".copyright").mouseover(function(){
        $(".copyright").hide()
        $(".info").show()
    })
    $(".info").mouseout(function(){
        $(".copyright").show()
        $(".info").hide()
    })
    
    $(".teamName").mouseover(function(){
        $(".teamName").hide()
        $(".gitSite").show()
    })
    $(".gitSite").mouseout(function(){
        $(".teamName").show()
        $(".gitSite").hide()
    })


})