<script src="../script2/jquery-3.7.1.min.js"></script>
    // 2. 준비 이벤트 작성
    //문서가 준비되면 함수 내용을 실행한다.
    $(document).ready(function () {
        // 공지사항의 첫번째 요소 클릭
        $(".notice li:first-of-type").click(function () {
        // .modal의 display를 블록으로(보여줌)
        $(".modal").show();
        });
        
        // 팝업의 닫기 버튼을 클릭하면
        $(".modal a").click(function () {
        // .modal 팝업 창을 숨긴다.
        $(".modal").hide();
        }); //$(document).ready() end

        // 안 먹힘. 따로 해 볼 것
