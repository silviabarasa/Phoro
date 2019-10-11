// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function checkForm(form)
    {
      if(form.username.value == "") {
        alert("Error: Username cannot be blank!");
        form.username.focus();
        return false;
      }
      re = /^\w+$/;
      if(!re.test(form.username.value)) {
        alert("Error: Username must contain only letters, numbers and underscores!");
        form.username.focus();
        return false;
      }
  
      if(form.pwd1.value != "" && form.pwd1.value == form.pwd2.value) {
        if(form.pwd1.value.length < 6) {
          alert("Error: Password must contain at least six characters!");
          form.pwd1.focus();
          return false;
        }
        if(form.pwd1.value == form.username.value) {
          alert("Error: Password must be different from Username!");
          form.pwd1.focus();
          return false;
        }
        re = /[0-9]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: password must contain at least one number (0-9)!");
          form.pwd1.focus();
          return false;
        }
        re = /[a-z]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: password must contain at least one lowercase letter (a-z)!");
          form.pwd1.focus();
          return false;
        }
        re = /[A-Z]/;
        if(!re.test(form.pwd1.value)) {
          alert("Error: password must contain at least one uppercase letter (A-Z)!");
          form.pwd1.focus();
          return false;
        }
      } else {
        alert("Error: Please check that you've entered and confirmed your password!");
        form.pwd1.focus();
        return false;
      }
  
      alert("You entered a valid password: " + form.pwd1.value);
      return true;
    }
    $(document).ready(function() { 
      $(".port").click(function(){
        $("#team").click();
      });
    $(".phoro").hover(function(){
      $(".jpg").css({"opacity":"0.2","transition":"1s"});
      $("#team").show();
  },
     function(){
    $(".jpg").css("opacity","1");
    $("#team").hide();
  });
  $(".phoro1").hover(function(){
    $(".jpg1").css({"opacity":"0.2","transition":"1s"});
    $("#team1").show();
},
   function(){
  $(".jpg1").css("opacity","1");
  $("#team1").hide();
  
  $(".phoro2").hover(function(){
    $(".jpg2").css({"opacity":"0.2","transition":"1s"});
    $("#team2").show();
},
   function(){
  $(".jpg2").css("opacity","1");
  $("#team2").hide();
   });

  $(".phoro3").hover(function(){
    $(".jpg3").css({"opacity":"0.2","transition":"1s"});
    $("#team3").show();
},
   function(){
  $(".jpg3").css("opacity","1");
  $("#team3").hide();
   });
   $(".phoro4").hover(function(){
    $(".jpg4").css({"opacity":"0.2","transition":"1s"});
    $("#team4").show();
},
   function(){
  $(".jpg4").css("opacity","1");
  $("#team4").hide();
   });
   $(".phoro5").hover(function(){
    $(".jpg5").css({"opacity":"0.2","transition":"1s"});
    $("#team5").show();
},
   function(){
  $(".jpg5").css("opacity","1");
  $("#team5").hide();
   });
   $(".phoro6").hover(function(){
    $(".jpg6").css({"opacity":"0.2","transition":"1s"});
    $("#team6").show();
},
   function(){
  $(".jpg6").css("opacity","1");
  $("#team6").hide();
   });
   $(".phoro7").hover(function(){
    $(".jpg7").css({"opacity":"0.2","transition":"1s"});
    $("#team7").show();
},
   function(){
  $(".jpg7").css("opacity","1");
  $("#team7").hide();
   });
   $(".phoro8").hover(function(){
    $(".jpg8").css({"opacity":"0.2","transition":"1s"});
    $("#team8").show();
},
   function(){
  $(".jpg8").css("opacity","1");
  $("#team8").hide();
   });
});
});

