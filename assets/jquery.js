$( document ).ready(function() {

    var config = {
        apiKey: "AIzaSyDy8ZWJV-tJFieNqMRUqlu5Cc8WycxOMu4",
        authDomain: "gohan-e2ddf.firebaseapp.com",
        databaseURL: "https://gohan-e2ddf.firebaseio.com",
        projectId: "gohan-e2ddf",
        storageBucket: "gohan-e2ddf.appspot.com",
        messagingSenderId: "1010605377721"
    };
    
    firebase.initializeApp(config);
    var dataRef = firebase.database();
    var employeename = "";
    var role = "";
    var startdate = 0;
    var monthsworked = 0;
    var cont = 0;
    $("#submit").click(function(event){        
        event.preventDefault(); 

        employeename = $("#employeename").val().trim();
        role = $("#role").val().trim();
        startdate = $("#startdate").val().trim();
        monthsworked =$("#monthsworked").val().trim();        

        dataRef.ref().push({
            name: employeename,
            role: role,
            startdate: startdate,
            monthsworked: monthsworked,
            dateAdded: firebase.database.ServerValue.TIMESTAMP
        });
    });

    

        

        dataRef.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {
            // Change the HTML to reflect
            cont++;
            var newRow = $("<tr>").append(
                $("<td>").text(cont),
                $("<td>").text(snapshot.val().name),
                $("<td>").text(snapshot.val().role),
                $("<td>").text(snapshot.val().startdate),
                $("<td>").text(snapshot.val().monthsworked),
                $("<td>").text("empRate"),
                $("<td>").text("empBilled")
            );
            $("tbody").append(newRow);

            $("#name-display").text(snapshot.val().name);
            $("#email-display").text(snapshot.val().email);
            $("#age-display").text(snapshot.val().age);
            $("#comment-display").text(snapshot.val().comment);
        });

        
        
        // full list of items to the well
        // $("#full-member-list").append("<div class='well'><span class='member-name'> " +
        //   childSnapshot.val().name +
        //   " </span><span class='member-email'> " + childSnapshot.val().email +
        //   " </span><span class='member-age'> " + childSnapshot.val().age +
        //   " </span><span class='member-comment'> " + childSnapshot.val().comment +
        //   " </span></div>");
  
        // Handle the errors
      }, function(errorObject) {
        console.log("Errors handled: " + errorObject.code);
    });
        
        // var counter = 0;
        // database.ref("/employees").on("child_added", function(snapshot) {
        //     counter++;
        //     //alert(counter);
        //     //$("#employee-show").append(w);      
        //     console.log(snapshot.val().name);
        //     $("#employee-show").append(snapshot.val().name);

        //   }, function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });

        // database.ref("/role").on("value", function(snapshot) {
          
        //     $("#role-show").append(snapshot.val().role);      
       
        //   }, function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });

        // database.ref("/startdate").on("value", function(snapshot) {
          
        //     $("#date-show").append(snapshot.val().startdate);      
       
        //   }, function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });

        // database.ref("/monthsworked").on("value", function(snapshot) {
          
        //     $("#months-show").append(snapshot.val().monthsworked);      
       
        //   }, function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        // });

        // database.ref().on("value", function(snapshot) {
            
        //     //$("#rate-show").append(a);
        //     //$("#total-show").append(b);
         
        //   }, function(errorObject) {
        //     console.log("The read failed: " + errorObject.code);
        //   });









    
