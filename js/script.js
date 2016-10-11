// $ : jquery 코드를 나타내는 축약어, document : DOM(document object model)
$(document).ready(function() {
  // jquery 코드 작성
  // $('p').html("안녕! JQuery");
  // 가장 기본적인 형태의 코드작성 문법
  var result = $('p').html();
  // document.getElementsbyTagName('p') = $('p')
  // 기본적인 자바스크립트의 문법을 $('p')로 간단히 표현
  console.log(result)
  // google 이라는 id 속성을 갖는 a 태그에
  // click 이벤트를 바인딩(부여한다)하는 jquery 코드
  $('a#google').click(function(){
    // a태그 중에 google이라는 값에 적용
    // alert('구글로 이동합니다');
    // event.preventDefault();
    // preventDefault : 멈춰있는 메소드. 흔히 쓰이는 메소드
  });

// GET 방식으로 http 통신을 하는 메소드
  $('#ajax').click(function() {
    $.get('ajax.html', function(response) {
      $('p.content').html(response);
    });
  });
  // callback을 위한 테스트 함수
  function myCallBack() {
    alert("callback 실행!");
  };

  // addClass 설명
  // $('h1').addClass('red big');
  // $('h1').removeClass('big')

  // btn 이라는 id 속성을 갖는 모든 태그를 클릭했을 때
  // 실행하는 jquery 코드
  $('#btn').click(function() {
    if ($('h1').css('display') != 'none') {
      $('h1').hide('slow');
    } else {
      $('h1').show('slow');
    }
  });

  // btn 이라는 id 속성을 갖는 모든 태그에
  // click 이벤트를 바인딩하는 jquery 코드
  // $('#btn').click(function() {
  //   if ($('h1').hasClass('big')) {
  //     $('h1').removeClass('big');
  //     // $(this).removeClass('big');
  //   } else {
  //     $('h1').addClass('big');
  //     // $('this').addClass('big');
  //   }
  // });

  // google 이라는 id 값을 갖는 모든 a 태그의
  // 속성값들 중에, href 라는 속성의 값을
  // javascript 변수인 href에 담아 초기화 시킨다.
  var href = $('a#google').attr('href');
  // href 변수의 값을 알림창으로 출력한다.
  // alert(href);
  $('a#google').attr('href', 'http://www.naver.com');

  // google 이라는 id 값을 갖는 모든 a태그를 {} 객체 타입을 이용해
  // 2가지의 속성 바인딩(부여)하여 바꾸거나 넣는다.
  // 첫번째는 href 속성의 값을 http://google.com 으로 바꾸고
  // 두번째는 target 속성의 값을 _blank 로 바꾼다(추가)
  $('a#google').attr({
    href: 'http://google.com',
    // http://google.com을 새 창에서 연다.
    target: '_blank'
  });

});
