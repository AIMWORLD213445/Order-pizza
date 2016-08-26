//business logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(){
  var price = 10
  if (this.toppings <  ){
      price = price += 1
    } else if (this.size < 3) {
      price = price * .75
    } else {
      price = price
    }
    return price;
};

//front end logic

$(document).ready(function() {
  $("#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedToppings = $("input#newToppings").val();
    var inputtedSize = $("input#newSize").val();

    var myPizza = new Pizza(inputtedToppings, inputtedSize);
    console.log(myPizza);
    $("#showPrice").append("<li>" + myPizza.price() + "</li>");
  });
});
