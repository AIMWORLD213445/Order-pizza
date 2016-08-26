//business logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(){
  var price = 10;
  if (this.toppings > 0 && this.size === 1){
      price = (price*.75) + this.toppings;
    } else if (this.toppings > 0 && this.size === 2) {
      price = price + (this.toppings);
    } else if (this.toppings > 0 && this.size ===3 ) {
      price = (price*1.5) + this.toppings;
    }else if (this.toppings === 0 && this.size ===1 ) {
      price = price*.75;
    }else if (this.toppings === 0 && this.size ===3 ) {
      price = price*1.5;
    }else {
      price = price;
    }
    price = price.toFixed(2);
    return price;
};

//front end logic

$(document).ready(function() {
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedToppingsArray=[]
    $("input:checkbox[name=newToppings]:checked").each(function(){
         inputtedToppingsArray.push(parseInt($(this).val()));
       });
    console.log(inputtedToppingsArray);
    var inputtedToppings = inputtedToppingsArray.reduce(function(last, next){
      return last + next;
    });

    var inputtedSize = parseInt($("input:radio[name=newSize]:checked").val());

    var myPizza = new Pizza(inputtedToppings, inputtedSize);

      $("#add-newPizza").hide();
      $(".results").show();


    $("#resetBtn").click(function() {
      $(".results").hide();
      $("#add-newPizza").show();
    	});

    $("#showPrice").text("$" + myPizza.price());
  });
});
