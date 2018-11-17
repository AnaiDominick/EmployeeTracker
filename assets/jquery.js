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

        database.ref("/employees").on("value", function(snapshot) {
          
            $("#employee-show").text(snapshot.val().name);      
       
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        database.ref("/role").on("value", function(snapshot) {
          
            $("#role-show").text(snapshot.val().role);      
       
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        database.ref("/startdate").on("value", function(snapshot) {
          
            $("#date-show").text(snapshot.val().startdate);      
       
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        database.ref("/monthsworked").on("value", function(snapshot) {
          
            $("#months-show").text(snapshot.val().monthsworked);      
       
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
        });

        database.ref().on("value", function(snapshot) {
            $("#rate-show")
            $("#total-show")
         
          }, function(errorObject) {
            console.log("The read failed: " + errorObject.code);
          });


    });






    
});