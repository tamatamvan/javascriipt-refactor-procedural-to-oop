# Simple Javascript Refactor Procedural to Object Oriented

This is a simple implementation of Javascript Refactor Procedural to Object Oriented. This example is a really simple program to generate a dice using HTML and DOM Manipulation with JQuery. The file `app.js` in this root directory of this repo is the result of the refactor. I put the original procedural script down bellow, and you can also access it in the `original-procedural` directory.

### index.html
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Roll Dice</title>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js" charset="utf-8"></script>
    <script src="app.js" charset="utf-8"></script>
    <style media="screen">
    .die {
      text-align: center;
      float: left;
      border: 1px solid black;
      padding: 40px
    }
    </style>
  </head>
  <body>
    <div id="roller">
      <button class="add">Add dice!</button>
      <button class="roll">Roll dice!</button>
      <div class="dice"></div>
    </div>
  </body>
</html>

```

### original `app.js`

```
$(document).ready(function() {
  $('#roller button.add').on('click', function() {
    console.log("WAT")
    $('.dice').append('<div class="die">0</div>')
  })

  $('#roller button.roll').on('click', function() {
    $('.die').each(function(k, die) {
      var value = Math.floor((Math.random()*6)+1)
      $(die).text(value)
    })
  })
})

```
