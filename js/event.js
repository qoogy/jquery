$(document).ready(function() {
  // form event
  $('input#content').focus(function() {
    console.log('focusing to #content');
  });
  $('input#content').blur(function() {
    console.log('blur to #content')
  });
  $('select').change(function() {
    console.log('select value changed');
  });

  // keyboard event
  $('input#content').keydown(function() {
    console.log('keydown');
  });
  $('input#content').keyup(function() {
    console.log('keyup');
  });

  // mouse event
  $('input#act').click(function() {
    console.log('act button click');
  });
  $('input#act').hover(function() {
    console.log('act button mouse over');
  });
  $('input#toggle').click(function() {
    $('p.target').toggle(1000, function() {
      console.log('toggle it');
    });
    // slideToggle()
    // fadeToggle()
  });


});
