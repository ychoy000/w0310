// tabs script, ui script 대신 사용

$(() => {
  const data = [
    {
      img: "./images/King_Americano.jpg",
      txt: "왕메가헛개리카노",
    },
    {
      img: "./images/King_appleYuja.jpg",
      txt: "왕메가사과유자",
    },
    {
      img: "./images/King_Megachip.jpg",
      txt: "엠지씨네 와앙 메가칩",
    },
  ];

  console.log(data);

  //객체생성
  tabs_1.html(
   `<div>
              <div><img src="${data[0].img}" alt="image1" /></div>
              <h3>${data[0].txt}</h3>
            </div>
            <div>
              <div><img src="${data[1].img}" alt="image2" /></div>
              <h3>${data[1].txt}</h3>
            </div>
            <div>
              <div><img src="${data[2].img}" alt="image3" /></div>
              <h3>${data[2].txt}</h3>
            </div>`
);

  // find items
  const tabs = $("#tabs");
  const tabs_div = tabs.children("div");
  const tabs_1 = tabs.children("#tabs-1");
  const btn = tabs.fing("tabs_btn a");

  // effect
  tabs_div.hide(); // hide all tab contents
  // 초기: 첫 번째 탭만 보이도록
  tabs_1.show();

  //Event
  btn.click(function (e) {
    e.preventDefault(); // precent a Tag default event

    // 모든 탭 버튼 색 초기화
    btn.css({ color: "var(--gray2" });
    //현재 클릭한 탭만 색 변경
    $(this).css({ color: "var(--main)" });

    tabs_div.hide(); //hide all tab contents

    // on click, show correponding element
    // attr('속성') -> 속성에 해당하는 값을 가져온다.
    // attr('속성', 값) -> 속성에 해당하는 값을 가져온다.
    let target = $(this).attr("href");
    $(target).show();
  });
});
