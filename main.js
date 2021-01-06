	
        window.alert('Are You See My HW Page, Please click ok.');	
 	
        var x = "Volvo" + 16 + 4;
        document.getElementById("naz4").innerHTML = x;

        var x = 5;
        var y = 2;
        var z = x + y;
        document.getElementById("naz5").innerHTML = z; 

        var x = 5 + 5;
        var y = "5" + 5;
        var z = "Hello" + 5;
        document.getElementById("naz6").innerHTML =
        x + "<br>" + y + "<br>" + z;

        var txt1 = "Nazmol";
        var txt2 = "Hasan";
        document.getElementById("naz7").innerHTML = txt1 + " " + txt2;

        var x = "John";        // x is a string
        var y = new String("John");  // y is an object
        document.getElementById("naz8").innerHTML = (x==y);

		var str = "Please locate where 'locate' occurs!";
        var pos = str.lastIndexOf("locate");
        document.getElementById("naz9").innerHTML = pos;

		var x = 0.2 + 0.1;
        document.getElementById("naz10").innerHTML = "0.2 + 0.1 = " + x;
        var y = (0.2*10 + 0.1*10) / 10;
        document.getElementById("naz11").innerHTML = "0.2 + 0.1 = " + y;

               
          function myFunction() {
          var age, voteable;
          age = document.getElementById("age").value;
          voteable = (age < 18) ? "Too young":"Old enough";
          document.getElementById("naz12").innerHTML = voteable + " to vote.";}

          function myReset() {
           document.getElementById("naz12").innerHTML = "";}


           var day;
        switch (new Date().getDay()) {
          case 0:
            day = "Sunday";
            break;
          case 1:
            day = "Monday";
            break;
          case 2:
            day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case  6:
            day = "Saturday";}
        document.getElementById("naz13").innerHTML = "Today is " + day;

        var d = new Date();
        document.getElementById("naz14").innerHTML = d;

        var books = ["bangla", "english", "math", "science", "arts", "islam", "agriculture", "external"];
        var text = "";
        var i;
        var z = "";
        for (i = 0; i < books.length; i++) {
          text += books[i] + "<br>";
          z += i + ". " + "<br>";}
        document.getElementById("book2").innerHTML = text;
        document.getElementById("book1").innerHTML = z;


        var text = "";
        var i;
        for (i = 0; i < 10; i++) {
          if (i === 3) { continue; }
          else if (i === 6) { break; }
          text += "The number is " + i + "<br>";}
        document.getElementById("naz33").innerHTML = text;

        document.getElementById("naz44").innerHTML = 
          "john".constructor + "<br>" +
          (3.14).constructor + "<br>" +
          false.constructor + "<br>" +
          [1,2,3,4].constructor + "<br>" +
          {name:'john', age:34}.constructor + "<br>" +
          new Date().constructor + "<br>" +
          function () {}.constructor;

          function myFunction() {
          var y = "5";
          var x = + y;
          document.getElementById("naz55").innerHTML = typeof y + "<br>" + typeof x;}

        



        