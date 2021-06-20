 $(document).ready(function(){
    $("#design1").hide();
    $("#picture1").click(function(){
    if($("#design1").is(":visible")){
        $("#design1").hide();
    } else{
        $("#design1").show();
    }
      
    });

    $("#design2").hide();
    $("#picture2").click(function(){
    if($("#design2").is(":visible")){
        $("#design2").hide();
    } else{
        $("#design2").show();
    }
      
    });

    $("#design3").hide();
    $("#picture3").click(function(){
    if($("#design3").is(":visible")){
        $("#design3").hide();
    } else{
        $("#design3").show();
    }
      
    });
  });
