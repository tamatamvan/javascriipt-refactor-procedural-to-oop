$(document).ready(function() {
  controller_.addDice();
  controller_.generateDiceValue();
})

class view {
  generate_dice(){
    return '<div class="die">0</div>';
  }
  appendDice(){
    $('.dice').append(this.generate_dice());
  }
  display_value(){
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  }
}

class controller {

  addDice() {
    $('#roller button.add').on('click', function() {
      view_.appendDice()
    })
  }
  generateDiceValue() {
    $('#roller button.roll').on('click', function() {
      console.log(`update dice value controller from public/javascripts/controller_object/controller.js`);
      view_.display_value()
    })
  }
}
var view_ = new view();
var controller_ = new controller();
