// 화면 전환 함수
function switchScreen() {
    const screen1 = document.getElementById("screen1");
    const screen2 = document.getElementById("screen2");

    // 첫 번째 화면 숨기기
    screen1.classList.add("hidden");

    // 두 번째 화면 보이기
    screen2.classList.remove("hidden");
    screen2.style.opacity = "1"; // 명확히 보이도록 설정

    const audio = document.getElementById('audio');
    audio.play();  // 두 번째 화면이 나오면 오디오를 재생
}

// 리셋 버튼 클릭 시 첫 화면으로 돌아가기
document.getElementById("resetButton").addEventListener("click", function () {
    location.reload();
});

// 슬라이드 이미지 변경
const imageElement = document.querySelector('.image3');
const imagePaths = [
    'drive_img/star1.svg',
    'drive_img/star2.svg',
    'drive_img/star3.svg',
    'drive_img/star4.svg',
    'drive_img/star5.svg',
    'drive_img/star6.svg',
    'drive_img/star7.svg',
    'drive_img/star8.svg',
    'drive_img/star9.svg'
];

let index = 0;

function updateImage() {
    imageElement.style.opacity = 0; // 현재 이미지 숨김
    setTimeout(() => {
        imageElement.src = imagePaths[index];
        imageElement.style.opacity = 1; // 새 이미지 표시
        index = (index + 1) % imagePaths.length;
    }, 500);
}

// ?초마다 이미지 변경
setInterval(updateImage, 500);

/* 화면 스크롤 속도 조정 */
window.addEventListener("wheel", function (e) {
    // 기본 스크롤 동작을 막음
    e.preventDefault();

    // 휠의 방향과 속도에 따라 스크롤 값을 조정
    let scrollAmount = e.deltaY * 0.1; // 0.3을 곱해서 스크롤 속도 느리게

    window.scrollBy({
        top: scrollAmount,  // 상하로 스크롤
        behavior: 'smooth'  // 부드럽게 스크롤
    });
}, { passive: false });  // passive: false로 preventDefault() 사용





/* 혼자 스크롤 내려가짐 ㄷㄷ */
/* let scrollSpeed = 30; // 스크롤 속도 (작을수록 빠름)

function smoothScroll() {
    let scrollPosition = window.scrollY; // 현재 스크롤 위치
    let targetPosition = scrollPosition + 100; // 이동할 위치 (100px 정도로 설정)

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// 스크롤을 부드럽게 하기 위한 타이머 설정
setInterval(smoothScroll, scrollSpeed); */