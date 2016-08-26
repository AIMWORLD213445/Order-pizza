//business logic

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
};

Pizza.prototype.price = function(){
  var price = 10;
  if (this.toppings > 0 && this.size === 1){
      price = (price += (this.toppings))*.75;
    } else if (this.toppings > 0 && this.size === 2) {
      price = price += (this.toppings);
    } else if (this.toppings > 0 && this.size ===3 ) {
      price = (price += (this.toppings))*1.5;
    }else if (this.toppings === 0 && this.size ===1 ) {
      price = price*.75;
    }else if (this.toppings === 0 && this.size ===3 ) {
      price = price*1.5;
    }else {
      price = price;
    }
    return price;
};

//front end logic

$(document).ready(function() {
  $("form#newPizza").submit(function(event) {
    event.preventDefault();
    var inputtedToppings=0

    var inputtedSize = parseInt($("input:radio[name=newSize]:checked").val());

    var myPizza = new Pizza(inputtedToppings, inputtedSize);
    console.log(myPizza);
    $("#showPrice").append("<li>" + myPizza.price() + "</li>");
  });
});
