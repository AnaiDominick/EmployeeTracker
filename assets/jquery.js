$( document ).ready(function() {

   

    $("#submit").click(function(event){
        event.preventDefault();
        clickCounter++;
        var employeename = $("#employeename").val().trim();
        var role = $("#role").val().trim();
        var startdate = $("#startdate").val().trim();
        var monthsworked =$("#monthsworked").val().trim();

        database.ref("/employees").push({
            name: employeename
        });

        database.ref("/role").push({
            role: role
        });

        database.ref("/startdate").push({
            startdate: startdate
        });

        database.ref("/monthsworked").push({
            monthsworked: monthsworked
        });


    });






    
});