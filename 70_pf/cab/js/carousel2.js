  $(document).ready(function () {
    const $slide = $('.carousel-slide');
    const $caption = $('.caption');
    const imgWidth = 1200;
    const transitionTime = 1000;
    const delay = 4000;
    
    // 슬라이드를 구성하고 첫 이미지 클론을 마지막에 추가
    const $images = $slide.find('img');
    const total = $images.length;
    const $firstClone = $images.eq(0).clone();
    $slide.append($firstClone);
    const totalWithClone = total + 1;

    let current = 0;

    function updateCaption(index) {
      const $currentImage = $slide.find('img').eq(index);
      const captionText = $currentImage.data('caption') || "";
      $caption.removeClass('animate');
      void $caption[0].offsetWidth;
      $caption.text(captionText).addClass('animate');
    }

    function moveSlide() {
      current++;
      $slide.animate({ left: -imgWidth * current }, transitionTime, function () {
        // 마지막 클론 이미지에서 진짜 첫 번째 이미지로 순간 이동
        if (current === total) {
          $slide.css('left', 0);
          current = 0;
        }
      });

      // 캡션 업데이트 (current % total)
      updateCaption(current % total);
    }

    // 초기 캡션 설정
    updateCaption(current);

    // 슬라이드 시작
    setInterval(moveSlide, delay);
  });