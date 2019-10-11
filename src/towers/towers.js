'use strict';

$(document).ready(function() {
  let $block = null;
  
  $('[data-row]').click(function() {
    if ($block) {
      $(this).append($block);
      $block = null;
    } else {
      let children = $(this).children()
      $block = $(this).children().last().detach();
    }
  })
})