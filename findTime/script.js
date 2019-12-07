
$('#di').hide();

var  min1 = 5;
var  max1 = 30;
var  seconds = Math.floor(Math.random() * (max1 - min1)) + min1;

$('.dialog-text p:eq(1)').append(' ' + seconds + ' метров в секунду');
$('#dano h3:eq(1)').append(seconds);

var min2 = 50;
var max2 = 200;
var way  = Math.floor(Math.random() * (max2 - min2)) + min2;
var r = Math.floor(way / seconds);
console.log(r);

$('.dialog-text p:eq(0)').append(' ' + way + ' метров');
$('#dano h3:eq(0)').append('' + way);

function closedialog() {
  $('.gin').hide();
}

$('#check').on('click', function() {
  var a = +($('input').val());
  console.log(a);
  console.log(r);
  $(this).off('click');
    if (a == r) {
      $('img').animate({left: "+=90%"}, r * 1000)
      setTimeout( function () {
        $('#di').show();
        $('.dialog-text1').prepend('<h2 style="z-index: 66665656565656">Молодец</h2>');
      }, (r + 1) * 1000)}
    else {
      $('img').animate({left: "+=90%"}, a * 1000)
      setTimeout(
        function() {
          $('#di').show();
        $('.dialog-text1').html('<h2>Неправильно, попробуй ещё раз</h2>');
      }, (a + 1) * 1000);
    }
    delete a;
    return false;
});
