var $body = $('body');

var $btnShowHide = $('.btn-show-hide');
var $box = $('.box');

var $btnMove = $('.btn-move');
var $diamond = $('.diamond');

var $btnColEx = $('.btn-collapse-expand');
var $panel = $('.panel');

$btnShowHide.on('click', function () {
  $box.toggleClass('showbox');
});

$btnMove.on('click', function () {
  $diamond.toggleClass('btn-slide');
});

// do the collapse thingy test.
$btnColEx.on('click', function () {
  $panel.toggleClass('collapse-panel');

});
