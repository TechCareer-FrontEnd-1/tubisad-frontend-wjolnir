let date = () => {
    //alert("deneme")
  
    document.getElementById("date_id").innerHTML=new Date().toLocaleDateString();
    //$('#date_id').html( `tarih: ${new Date()}`);
  
    //document.getElementById("date_id").innerText=new Date();
    //$('#date_id').text(new Date());
  
    //document.getElementById("date_id").style.backgroundColor="blue";
    //document.getElementById("date_id").style.color="white";
   // $("#date_id").css("background-color","blue").css("color","white")
  
   const cssObject={
       "color":"white",
       "background-color":"transparent",
       "margin-bottom":"3rem",
       "padding":"1rem",
   }
   $("#date_id").css(cssObject);
  //autocomplete 
  //backtotop
  }

  // backtotop start
  let topFunction = () => {
    if(document.documentElement.scrollTop > 100 || document.body.scrollTop > 100){
        $("#back_top").css("display","block");
    }else{
        $("#back_top").css("display","none");
    }
  }

  window.onscroll = function() {topFunction()};
  // backtotop end

  // autocomplete start
  $( function() {
    var availableTags = [
        "hakkımda",
        "yetenekler",
        "çalışmalar",
        "deneyimler",
        "iletişim"
    ];
    // availableTags.push(document.getElementById("form2Example1").value);

    $("#tags").autocomplete({
      source: availableTags
    });
  } );

// autocomplete end