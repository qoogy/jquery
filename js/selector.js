$(document).ready(function() {
  // 다양한 셀렉터 문법
  // $('a');
  // $('#myId');
  // $('.myClass');
  // $('input[name="email"]');
  // $('#header h1.title');
  // $('div.myClass, ul.fruits');

  var a = $('a');
  a.attr('href', 'http://www.naver.com');
  a.html('Naver');
  // 아래처럼 길게 작성하는 것보다 위처럼 간단히 작성할 수 있다.
  // $('#header h1.title').attr('href', 'http://www.naver.com');
  // $('#header h1.title').html('Naver')

  // filtering 해주는 jquery 메소드
  $('ul li').has('p');
  $('ul li').not('.selected');
  $('ul li').first();
  $('ul li').eq(2);

  // fruits class 이름을 갖는 요소를 찾고
  // 그 중에 selected class 이름을 갖는 요소를 찾는다.
  // 찾은 요소의 css style 을 {color: red} 로 정의한다.
  $('.fruits').find('.selected').css('color', 'red');

  // $('h1.title').click(function() {
  //   alert('메뉴를 준비중입니다');
  // });

  $('h1.title').on('click',function() {
    alert('메뉴를 준비중입니다');
  });

});
