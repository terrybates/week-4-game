  
  
  $(document).ready(function() {
  //Setting all variables.
  var counter=0;
  var loss= 0;
  var win = 0;
  var flag = "false";
  var randNumberHold = randNumber();
  $('#win').text(win);
  $('#loss').text(loss);

  
  //This is the target number that you need to guess.It returns the number 
  //that will be compare to your generated number.
  function randNumber(){
      var rand = Math.floor(Math.random() * 101) + 19;        
      $("#randomNumber").text(rand);
      console.log(rand);
      return rand;
  }
//This is applying a random number value to each crystal.
  
$("#red").attr("data-random-value", Math.floor(Math.random()*10)+1);
$("#blue").attr("data-random-value", Math.floor(Math.random()*10)+1);
$("#yellow").attr("data-random-value", Math.floor(Math.random()*10)+1);
$("#green").attr("data-random-value", Math.floor(Math.random()*10)+1);
//This is the total after each click function.
var runningtotal = 0;

$(".click").click(function(event){
  if (flag === "false"){
      runningtotal+= parseInt($(event.target).attr("data-random-value"));
      console.log(runningtotal);      
      $("#score").html(runningtotal);
      
    
        if (runningtotal === randNumberHold) {
            win++;
            $(".win").html("win: " + win);
            flag="true";
            }
        else if(runningtotal > randNumberHold){
            loss++;          
            $(".loss").html("loss: " + loss);
            flag="true";
            }            
}
 
})

  
});  
    