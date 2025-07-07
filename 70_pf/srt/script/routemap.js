    

    const tabs = document.querySelectorAll('.tab');
    const images = document.querySelectorAll('.map_container img');

    console.log(tabs);
    console.log(images);
    
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const index = tab.getAttribute('data-index');

        // 탭 활성화 전환
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        // 이미지 표시 전환
        images.forEach(img => img.classList.remove('active'));
        images[index].classList.add('active');
      });
    });

