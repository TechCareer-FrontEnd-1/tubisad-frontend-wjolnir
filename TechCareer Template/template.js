let date = () => {
    //alert("deneme")
  
    document.getElementById("date_id").innerHTML=new Date();
    //$('#date_id').html( `tarih: ${new Date()}`);
  
    //document.getElementById("date_id").innerText=new Date();
    //$('#date_id').text(new Date());
  
    //document.getElementById("date_id").style.backgroundColor="blue";
    //document.getElementById("date_id").style.color="white";
   // $("#date_id").css("background-color","blue").css("color","white")
  
   const cssObject={
       "color":"red",
       "background-color":"black",
       "box-shadow":"1px 1px 3px 1px rgba(255,255,255,.8)",
       "margin-bottom":"3rem"
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
        "hlyollu@gmail.com",
        "mehmet@gmail.com",
        "ahmet@gmail.com"
    ];
    // availableTags.push(document.getElementById("form2Example1").value);

    $("#tags").autocomplete({
      source: availableTags
    });
  } );

// autocomplete end

// autocomplete i kendim yapmayı denedim, yapamayınca netten araştırdım. Birebir aynısını yapmama rağmen çalışmıyor. Araştırdım ancak sebebini bulamadım.