// Validation-1
function validate(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  //if(isNaN(phone) || phone.length != 10)
  if(phone.length < 10){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  else{
    $(".sub-menu").hide(); 
    $("#HideItembtnsm").hide();
    $("#textHeroTwoItem").show(1000);
    $("#HideItembtnsm2").show();
    $("#coverLine").animate({
      height: "600px"
    }, 50 );
    window.location.replace("#textHeroTwoItem");
  }
}
// Validation-2
function validateMsg(){
  var message1 = document.getElementById("message1").value;
  var error_message1 = document.getElementById("error_message1");
  
  error_message1.style.padding = "10px";
  
  var text;
  if(message1.length <= 10){
    text = "Please Enter More Than 140 Characters";
    error_message1.innerHTML = text;
    return false;
  }
  else{
    $("#textHeroTenItem").hide(); 
    $("#HideItembtnsm10").hide();
    $("#textHero11Item").show(1000);
    $("#HideItembt13rd").show();
    $("#HideItembtnsm12").show();
    window.location.replace("#textHeroTenItem")
  }
}


/*Data Show & Hide*/
$(document).ready(function(){
  $("#HideItembtn3rd").css("display", "none");
  $("#textHeroTwoItem").css("display", "none");
  $("#HideItembtnsm2").css("display", "none");
  $("#HideItembtn4rd").css("display", "none");
  $("#textHeroThreeItem").css("display", "none");
  $("#HideItembtnsm3").css("display", "none");
  $("#HideItembtn5rd").css("display", "none");
  $("#textHeroFourItem").css("display", "none");
  $("#HideItembtnsm4").css("display", "none");
  $("#HideItembtn6rd").css("display", "none");
  $("#textHeroFiveItem").css("display", "none");
  $("#HideItembtnsm5").css("display", "none");
  $("#HideItembt7rd").css("display", "none");
  $("#textHeroSixItem").css("display", "none");
  $("#textHeroSixItem").css("display", "none");
  $("#HideItembtnsm6").css("display", "none");
  $("#textHeroSevenItem").css("display", "none");
  $("#HideItembt8rd").css("display", "none");
  $("#HideItembtnsm7").css("display", "none");
  $("#HideItembt9rd").css("display", "none");
  $("#textHeroEightItem").css("display", "none");
  $("#HideItembtnsm8").css("display", "none");
  $("#textHeroNineItem").css("display", "none");
  $("#HideItembt10rd").css("display", "none");
  $("#HideItembtnsm9").css("display", "none");
  $("#textHeroTenItem").css("display", "none");
  $("#HideItembt11rd").css("display", "none");
  $("#HideItembtnsm10").css("display", "none");
  $("#HideItembt12rd").css("display", "none");
  $("#HideItembt13rd").css("display", "none");
  $("#HideItembtnsm11").css("display", "none");
  $("#textHero11Item").css("display", "none");
  $("#textHero12Item").css("display", "none");
  $("#HideItembtnsm12").css("display", "none");
  
  //Change Width Progress Bar
  $("#ChangeWidth1").hide(); 
  $("#ChangeWidth2").hide();
  $("#ChangeWidth3").hide();
  $("#ChangeWidth4").hide();
  $("#ChangeWidth5").hide();
  $("#ChangeWidth6").hide();     
  $("#ChangeWidth7").hide();
  $("#ChangeWidth8").hide();
  $("#ChangeWidth9").hide();
  $("#ChangeWidth10").hide();
  $("#ChangeWidth11").hide();
  $("#ChangeWidth12").hide();



  $("#HideItembt13rd").click(function(){
    $("#ChangeWidth10").hide();
  });  
  $("#HideItembtnsm12").click(function(){
    $("#HideItembtnsm12").hide();
  });
  $("#HideItembtnsm12").click(function(){
    $("#textHero11Item").hide();
  });
  $("#HideItembtnsm12").click(function(){
    $("#textHeroTenItem").show(300);
  });
  $("#HideItembtnsm12").click(function(){
    $("#HideItembtnsm10").show();
  });
  $("#HideItembtnsm10").click(function(){
    $("#ChangeWidth11").hide();
  });
  $("#HideItembt13rd").click(function(){
    $("#HideItembtnsm12").hide();
  });
  $("#HideItembt13rd").click(function(){
    $("#coverLine").animate({
      height: "500px"
    }, 0 );
  });
  

  $("#HideItembtn3rd").click(function(){
    $("#HideItembtn4rd").show();
  });  
  $("#HideItembtnsm").click(function(){
    $("#ChangeWidth2").hide();
  });
  $("#HideItembtn4rd").click(function(){
    $("#HideItembtnsm").hide();
  });



  /// Go
  $("#HideItembtn").click(function(){
    $("#ChangeWidth1").show();
  });
  $("#HideItembtn").click(function(){
    $("#ChanheOne").hide();
  });
  $("#HideItembtn3rd").click(function(){
    $("#ChangeWidth2").show();
  });
  $("#HideItembtn3rd").click(function(){
    $("#ChangeWidth1").hide();
  });
  $("#HideItembtn3rd").click(function(){
    $("#ChangeWidth2").show();
  });
  $("#HideItembtn3rd").click(function(){
    $("#ChangeWidth1").hide();
  });
  $("#HideItembtn4rd").click(function(){
    $("#ChangeWidth3").show();
  });
  $("#HideItembtn4rd").click(function(){
    $("#ChangeWidth2").hide();
  });
  $("#HideItembtn5rd").click(function(){
    $("#ChangeWidth4").show();
  });
  $("#HideItembtn5rd").click(function(){
    $("#ChangeWidth3").hide();
  });
  $("#HideItembtn6rd").click(function(){
    $("#ChangeWidth5").show();
  });
  $("#HideItembtn6rd").click(function(){
    $("#ChangeWidth4").hide();
  });
  $("#HideItembt7rd").click(function(){
    $("#ChangeWidth6").show();
  });
  $("#HideItembt7rd").click(function(){
    $("#ChangeWidth5").hide();
  });
  $("#HideItembt8rd").click(function(){
    $("#ChangeWidth7").show();
  });
  $("#HideItembt8rd").click(function(){
    $("#ChangeWidth6").hide();
  });
  $("#HideItembt9rd").click(function(){
    $("#ChangeWidth8").show();
  });
  $("#HideItembt9rd").click(function(){
    $("#ChangeWidth7").hide();
  });
  $("#HideItembt10rd").click(function(){
    $("#ChangeWidth9").show();
  });
  $("#HideItembt10rd").click(function(){
    $("#ChangeWidth8").hide();
  });
  $("#HideItembt11rd").click(function(){
    $("#ChangeWidth10").show();
  });
  $("#HideItembt11rd").click(function(){
    $("#ChangeWidth9").hide();
  });
  $("#HideItembt12rd").click(function(){
    $("#ChangeWidth11").show();
  });
  $("#HideItembt12rd").click(function(){
    $("#ChangeWidth10").hide();
  });
  $("#HideItembt13rd").click(function(){
    $("#ChangeWidth12").show();
  });
  $("#HideItembt13rd").click(function(){
    $("#ChangeWidth11").hide();
  });



  //Back Progress 
  $("#HideItembtnsm").click(function(){
    $("#ChangeWidth1").hide();
  });
  $("#HideItembtnsm").click(function(){
    $("#ChanheOne").show();
  });
  $("#HideItembtnsm2").click(function(){
    $("#ChangeWidth2").hide();
  });
  $("#HideItembtnsm2").click(function(){
    $("#ChangeWidth1").show();
  });
  $("#HideItembtnsm3").click(function(){
    $("#ChangeWidth3").hide();
  });
  $("#HideItembtnsm3").click(function(){
    $("#ChangeWidth2").show();
  });
  $("#HideItembtnsm4").click(function(){
    $("#ChangeWidth4").hide();
  });
  $("#HideItembtnsm4").click(function(){
    $("#ChangeWidth3").show();
  });
  $("#HideItembtnsm5").click(function(){
    $("#ChangeWidth5").hide();
  });
  $("#HideItembtnsm5").click(function(){
    $("#ChangeWidth4").show();
  });
  $("#HideItembtnsm6").click(function(){
    $("#ChangeWidth6").hide();
  });
  $("#HideItembtnsm6").click(function(){
    $("#ChangeWidth5").show();
  });
  $("#HideItembtnsm7").click(function(){
    $("#ChangeWidth7").hide();
  });
  $("#HideItembtnsm7").click(function(){
    $("#ChangeWidth6").show();
  });
  $("#HideItembtnsm8").click(function(){
    $("#ChangeWidth8").hide();
  });
  $("#HideItembtnsm8").click(function(){
    $("#ChangeWidth7").show();
  });
  $("#HideItembtnsm9").click(function(){
    $("#ChangeWidth9").hide();
  });
  $("#HideItembtnsm9").click(function(){
    $("#ChangeWidth8").show();
  });
  $("#HideItembtnsm10").click(function(){
    $("#ChangeWidth10").hide();
  });
  $("#HideItembtnsm10").click(function(){
    $("#ChangeWidth9").show();
  });
  $("#HideItembtnsm11").click(function(){
    $("#ChangeWidth11").hide();
  });
  $("#HideItembtnsm11").click(function(){
    $("#ChangeWidth10").show();
  });
  $("#HideItembtnsm12").click(function(){
    $("#ChangeWidth12").hide();
  });
  $("#HideItembtnsm12").click(function(){
    $("#ChangeWidth11").show();
  });
  
 

$("#HideItembtnsm5").click(function(){
  $("#ChangeWidth6").hide();
});
$("#HideItembt7rd").click(function(){
  $("#ChangeWidth4").hide();
});
$("#HideItembt8rd").click(function(){
  $("#ChangeWidth4").hide();
});





  $("#HideItembtn").click(function(){
      $("p").hide(400);
  });
  $("#HideItembtn").click(function(){
    $("#HideItembtn").hide();
  });
  $("#HideItembtnsm").click(function(){
    $("#HideItembtn").show();
  });
  $("#HideItembtn").click(function(){
    $(".sub-menu").show(400);;
  });
  $("#HideItembtnsm").css("display", "none");
  $("#HideItembtn").click(function(){
    $("#HideItembtnsm").css("display", "block");
  });
  $("#HideItembtnsm").click(function(){
    $("p").show(1500);
  });
  $("#HideItembtnsm").click(function(){
    $(".sub-menu").hide(300);
  });
  $("#HideItembtnsm").click(function(){
    $("#HideItembtnsm").hide();
  });
  $("#HideItembtn").click(function(){
    $("#textHeroTwoItem").hide();
  });

  $("#HideItembtn").click(function(){
    $("#HideItembtn3rd").show();
  });

// Button System

//4th
  $("#HideItembtn4rd").click(function(){
    $("#textHeroTwoItem").hide();
  });
  $("#HideItembtn4rd").click(function(){
    $("#textHeroThreeItem").show(400);
  });

  $("#HideItembtnsm2").click(function(){
    $("#HideItembtn4rd").hide();
  });
  $("#HideItembtnsm2").click(function(){
    $("#HideItembtn3rd").show();
  });

  $("#HideItembtn4rd").click(function(){
    $("#HideItembtnsm3").show();
  });

  $("#HideItembtn4rd").click(function(){
    $("#HideItembtnsm2").hide();
  });
  $("#HideItembtnsm3").click(function(){
    $("#HideItembtnsm2").hide();
  });

  $("#HideItembtnsm3").click(function(){
    $("#textHeroThreeItem").hide();
  });
    $("#HideItembtnsm3").click(function(){
      $("#textHeroTwoItem").show(400);
    });
    $("#HideItembtnsm3").click(function(){
      $("#HideItembtnsm3").hide();
    });
    $("#HideItembtnsm3").click(function(){
      $("#HideItembtnsm2").show();
    });

    /// Final Code
    // Before btn
    $("#HideItembtn4rd").click(function(){
      $("#HideItembtn4rd").hide();
    });
    $("#HideItembtn4rd").click(function(){
      $("#HideItembtn5rd").show();
    });
    $("#HideItembtnsm3").click(function(){
      $("#HideItembtn4rd").show();
    });
    $("#HideItembtnsm3").click(function(){
      $("#HideItembtn5rd").hide();
    });

    //------------------
    $("#HideItembtn5rd").click(function(){
      $("#textHeroFourItem").show(400);
    });
    $("#HideItembtn5rd").click(function(){
      $("#textHeroThreeItem").hide();
    })

    $("#HideItembtn5rd").click(function(){
      $("#HideItembtnsm4").show();
    });
    $("#HideItembtn5rd").click(function(){
      $("#HideItembtnsm3").hide();
    });

    $("#HideItembtnsm4").click(function(){
      $("#HideItembtnsm3").show();
    });
    $("#HideItembtnsm4").click(function(){
      $("#HideItembtnsm4").hide();
    });


    $("#HideItembtnsm4").click(function(){
      $("#textHeroFourItem").hide();
    });
    $("#HideItembtnsm4").click(function(){
      $("#HideItembtn5rd").show();
    });
    $("#HideItembtnsm4").click(function(){
      $("#HideItembtn6rd").hide();
    });
    $("#HideItembtnsm4").click(function(){
      $("#textHeroThreeItem").show(400);
    });


    $("#HideItembtn5rd").click(function(){
      $("#HideItembtn5rd").hide();
    });
    $("#HideItembtn5rd").click(function(){
      $("#HideItembtn6rd").show();
    });
   
    //
    $("#HideItembtn6rd").click(function(){
      $("#textHeroFiveItem").show(400);
    });
    $("#HideItembtn6rd").click(function(){
      $("#textHeroFourItem").hide();
    });
    
    $("#HideItembtn6rd").click(function(){
      $("#textHeroFourItem").hide();
    });
    $("#HideItembtn6rd").click(function(){
      $("#HideItembtnsm5").show();
    });
    $("#HideItembtn6rd").click(function(){
      $("#HideItembtnsm4").hide();
    });
    $("#HideItembtn6rd").click(function(){
      $("#HideItembtn6rd").hide();
    });
    $("#HideItembtn6rd").click(function(){
      $("#HideItembt7rd").show();
    });

    $("#HideItembtnsm5").click(function(){
      $("#textHeroFiveItem").hide();
    });
    $("#HideItembtnsm5").click(function(){
      $("#textHeroFourItem").show(400);
    });
    $("#HideItembtnsm5").click(function(){
      $("#textHeroFourItem").show(400);
    });
    $("#HideItembtnsm5").click(function(){
      $("#HideItembtn6rd").show();
    });
    $("#HideItembtnsm5").click(function(){
      $("#HideItembt7rd").hide();
    });
    $("#HideItembtnsm5").click(function(){
      $("#HideItembtnsm4").show();
    });
    $("#HideItembtnsm5").click(function(){
      $("#HideItembtnsm5").hide();
    });

    //
    $("#HideItembt7rd").click(function(){
      $("#textHeroSixItem").show(400);
    });
    $("#HideItembt7rd").click(function(){
      $("#textHeroFiveItem").hide();
    });

    $("#HideItembt7rd").click(function(){
      $("#HideItembtnsm6").show();
    });
    $("#HideItembt7rd").click(function(){
      $("#HideItembtnsm5").hide();
    });

    $("#HideItembtnsm6").click(function(){
      $("#textHeroFiveItem").show(400);
    });
    $("#HideItembtnsm6").click(function(){
      $("#textHeroSixItem").hide();
    });

    $("#HideItembtnsm6").click(function(){
      $("#HideItembtnsm5").show();
    });
    $("#HideItembtnsm6").click(function(){
      $("#HideItembtnsm6").hide();
    });
    
    $("#HideItembtnsm6").click(function(){
      $("#HideItembt8rd").hide();
    });
    $("#HideItembtnsm6").click(function(){
      $("#HideItembt7rd").show();
    });

    $("#HideItembt7rd").click(function(){
      $("#HideItembt8rd").show();
    });
    $("#HideItembt7rd").click(function(){
      $("#HideItembt7rd").hide();
    });

    //
    $("#HideItembt8rd").click(function(){
      $("#textHeroSevenItem").show(400);
    });
    $("#HideItembt8rd").click(function(){
      $("#textHeroSixItem").hide();
    });

    $("#HideItembt8rd").click(function(){
      $("#HideItembt9rd").show();
    });
    $("#HideItembt8rd").click(function(){
      $("#HideItembt8rd").hide();
    });


    $("#HideItembt8rd").click(function(){
      $("#textHeroSixItem").hide();
    });

    $("#HideItembt7rd").click(function(){
      $("#HideItembtnsm6").show();
    });

    $("#HideItembt8rd").click(function(){
      $("#HideItembtnsm7").show();
    });
    $("#HideItembt8rd").click(function(){
      $("#HideItembtnsm6").hide();
    });

    $("#HideItembtnsm7").click(function(){
      $("#textHeroSixItem").show(400);
    });
    $("#HideItembtnsm7").click(function(){
      $("#textHeroSevenItem").hide();
    });
    $("#HideItembtnsm7").click(function(){
      $("#HideItembt9rd").hide();
    });
    $("#HideItembtnsm7").click(function(){
      $("#HideItembt8rd").show();
    });

    $("#HideItembtnsm7").click(function(){
      $("#HideItembtnsm7").hide();
    });
    $("#HideItembtnsm8").click(function(){
      $("#textHeroSevenItem").show();
    });
    $("#HideItembtnsm7").click(function(){
      $("#HideItembtnsm6").show();
    });
    $("#HideItembtnsm8").click(function(){
      $("#textHeroEightItem").hide(400);
    });
    $("#HideItembtnsm8").click(function(){
      $("#HideItembt9rd").hide();
    });
    $("#HideItembtnsm8").click(function(){
      $("#HideItembt8rd").show();
    });
    $("#HideItembtnsm8").click(function(){
      $("#HideItembtnsm8").hide();
    });
    $("#HideItembtnsm8").click(function(){
      $("#HideItembtnsm7").show();
    });



/// 9th
$("#HideItembt10rd").click(function(){
  $("#textHeroNineItem").show(400);
});
$("#HideItembtnsm8").click(function(){
  $("#HideItembtnsm8").hide();
});
$("#HideItembt10rd").click(function(){
  $("#textHeroEightItem").hide();
});

$("#HideItembt10rd").click(function(){
  $("#HideItembtnsm9").show();
});
$("#HideItembt10rd").click(function(){
  $("#HideItembtnsm8").hide();
});
$("#HideItembt10rd").click(function(){
  $("#HideItembt10rd").hide();
});

$("#HideItembtnsm9").click(function(){
  $("#textHeroEightItem").show(400);
});
$("#HideItembtnsm9").click(function(){
  $("#textHeroNineItem").hide();
});

$("#HideItembtnsm9").click(function(){
  $("#HideItembtnsm8").show();
});
$("#HideItembtnsm9").click(function(){
  $("#HideItembt10rd").show();
});
$("#HideItembtnsm9").click(function(){
  $("#HideItembtnsm9").hide();
});

$("#HideItembt10rd").click(function(){
  $("#HideItembt11rd").show();
});
$("#HideItembtnsm9").click(function(){
  $("#HideItembt11rd").hide();
});


//11th

$("#HideItembt11rd").click(function(){
  $("#textHeroTenItem").show(400);
});
$("#HideItembtnsm9").click(function(){
  $("#HideItembtnsm9").hide();
});
$("#HideItembt11rd").click(function(){
  $("#textHeroNineItem").hide();
});

$("#HideItembt11rd").click(function(){
  $("#HideItembtnsm10").show();
});
$("#HideItembt11rd").click(function(){
  $("#HideItembtnsm9").hide();
});
$("#HideItembt11rd").click(function(){
  $("#HideItembt11rd").hide();
});

$("#HideItembtnsm10").click(function(){
  $("#textHeroNineItem").show(400);
});
$("#HideItembtnsm10").click(function(){
  $("#textHeroTenItem").hide();
});

$("#HideItembtnsm10").click(function(){
  $("#HideItembtnsm9").show();
});
$("#HideItembtnsm10").click(function(){
  $("#HideItembt11rd").show();
});
$("#HideItembtnsm10").click(function(){
  $("#HideItembtnsm10").hide();
});

$("#HideItembt11rd").click(function(){
  $("#HideItembt12rd").show();
});
$("#HideItembtnsm10").click(function(){
  $("#HideItembt12rd").hide();
});


//13th
$("#HideItembt13rd").click(function(){
  $("#textHero12Item").show(400);
});
$("#HideItembt13rd").click(function(){
  $("#textHero11Item").hide(400);
});

$("#HideItembt13rd").click(function(){
  $("#HideItembt13rd").hide();
});
$("#HideItembt13rd").click(function(){
  $("#HideItembtnsm11").hide();
});

$("#HideItembtnsm11").click(function(){
  $("#HideItembtnsm11").hide();
});


$("#HideItembtnsm2").click(function(){
  $("#HideItembtnsm2").hide();
});
$("#HideItembtnsm2").click(function(){
  $("#HideItembtnsm").show();
});


////////////
$("#HideItembt9rd").click(function(){
  $("#textHeroSevenItem").hide();
});
$("#HideItembt9rd").click(function(){
  $("#textHeroEightItem").show(400);
});

$("#HideItembt9rd").click(function(){
  $("#HideItembtnsm7").hide();
});
$("#HideItembt9rd").click(function(){
  $("#HideItembtnsm8").show();
});

$("#HideItembt8rd").click(function(){
  $("#textHeroSevenItem").show(400);
});

$("#HideItembt9rd").click(function(){
  $("#HideItembt9rd").hide();
});
$("#HideItembt9rd").click(function(){
  $("#HideItembt10rd").show();
});
$("#HideItembtnsm8").click(function(){
  $("#HideItembt10rd").hide();
});
$("#HideItembtnsm8").click(function(){
  $("#HideItembt9rd").show();
});
$("#HideItembtnsm8").click(function(){
  $("#HideItembt8rd").hide();
});

//
$("#HideItembtnsm2").click(function(){
$("#textHeroTwoItem").hide(400);
});
$("#HideItembtnsm2").click(function(){
  $(".sub-menu").show(300);
});

$( "#coverLine" ).height(500);
$("#HideItembtnsm").click(function(){
  $("#coverLine").animate({
    height: "500px"
  }, 0 ); // how long the animation should be
});


// Button Working This Code-1
  $("#canUploadNow").click(function(){
      $("#textHeroFourItem").hide(400);
  });
  $("#canUploadNow").click(function(){
      $("#textHeroFiveItem").show(400);
  });
  $("#canUploadNow").click(function(){
      $("#HideItembtnsm4").hide();
  });
  $("#canUploadNow").click(function(){
    $("#HideItembt7rd").show();
  });
  $("#canUploadNow").click(function(){
    $("#HideItembtnsm5").show();
  });

  // Button Working This Code-2
  $("#canUploadNow1").click(function(){
    $("#textHeroFourItem").hide(400);
  });
  $("#canUploadNow1").click(function(){
      $("#textHeroSixItem").show(400);
  });
  $("#canUploadNow1").click(function(){
      $("#HideItembt8rd").show();
  });
  $("#canUploadNow1").click(function(){
    $("#HideItembtnsm4").hide();
  });
  $("#HideItembtnsm7").click(function(){
    $("#HideItembtnsm6").hide();
  });
  $("#HideItembt8rd").click(function(){
    $("#HideItembtnsm5").hide();
  });
  $("#HideItembtnsm5").click(function(){
    $("#textHeroSixItem").hide(400);
  });
  $("#canUploadNow1").click(function(){
    $("#HideItembtnsm5").show();
  });
  $("#HideItembtnsm7").click(function(){
    $("#HideItembtnsm5").show();
  });
  
  
  // Button Working This Code-3
  $("#canUploadNow2").click(function(){
    $("#textHeroFourItem").hide(400);
  });
  $("#canUploadNow2").click(function(){
      $("#textHeroSixItem").show(400);
  });
  $("#canUploadNow2").click(function(){
      $("#HideItembt8rd").show();
  });
  $("#canUploadNow2").click(function(){
    $("#HideItembtnsm4").hide();
  });
  $("#HideItembtnsm7").click(function(){
    $("#HideItembtnsm6").hide();
  });
  $("#HideItembt8rd").click(function(){
    $("#HideItembtnsm5").hide();
  });
  $("#HideItembtnsm5").click(function(){
    $("#textHeroSixItem").hide(400);
  });
  $("#canUploadNow2").click(function(){
    $("#HideItembtnsm5").show();
  });
  $("#HideItembtnsm7").click(function(){
    $("#HideItembtnsm5").show();
  });
  
  //background change size
  $("#HideItembtn").click(function(){
    $("#coverLine").animate({
      height: "800px"
    }, 0 );
  });
  $("#HideItembtn4rd").click(function(){
    $("#coverLine").animate({
      height: "600px"
    }, 50 ); 
  });
  $("#HideItembtn5rd").click(function(){
    $("#coverLine").animate({
      height: "900px"
    }, 50 ); 
  });
  $("#HideItembtn6rd").click(function(){
    $("#coverLine").animate({
      height: "600px"
    }, 50 ); 
  });
  $("#HideItembt7rd").click(function(){
    $("#coverLine").animate({
      height: "900px"
    }, 50 ); 
  });
  $("#HideItembt8rd").click(function(){
    $("#coverLine").animate({
      height: "700px"
    }, 50 );
  });
  $("#HideItembt9rd").click(function(){
    $("#coverLine").animate({
      height: "1300px"
    }, 50 ); 
  });
  $("#HideItembt10rd").click(function(){
    $("#coverLine").animate({
      height: "700px"
    }, 50 ); 
  });

  $("#HideItembtnsm9").click(function(){
    $("#coverLine").animate({
      height: "1300px"
    }, 50 ); 
  });
  $("#HideItembtnsm8").click(function(){
    $("#coverLine").animate({
      height: "700px"
    }, 50 );
  });
  $("#HideItembtnsm7").click(function(){
    $("#coverLine").animate({
      height: "900px"
    }, 50 ); 
  });
  $("#HideItembtnsm4").click(function(){
    $("#coverLine").animate({
      height: "600px"
    }, 50 ); 
  });
  $("#HideItembtnsm2").click(function(){
    $("#coverLine").animate({
      height: "800px"
    }, 50 ); 
  });
  $("#canUploadNow").click(function(){
    $("#coverLine").animate({
      height: "600px"
    }, 50 ); 
  });
  $("#HideItembtnsm5").click(function(){
    $("#coverLine").animate({
      height: "900px"
    }, 50 );
  });
  

    
});

