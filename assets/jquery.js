$( document ).ready(function() {

    var clickCounter = 0;

    $("#submit").click(function(event){
        event.preventDefault();
        clickCounter++;
        var employeenme = $("#employeename").val().trim();
        var role = $("#role").val().trim();
        var startdate = $("#startdate").val().trim();
        var monthsworked =$("#monthsworked").val().trim();



    });






    
});