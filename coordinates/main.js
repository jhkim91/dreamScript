const vertical = document.querySelector(".vertical");
const horozontal = document.querySelector(".horozontal");
const target = document.querySelector(".target");
const tag = document.querySelector(".tag");

/** 성능 개선 참고
 * https://csstriggers.com/
 */

// 이미지를 못불러온상태에서 실행 될 수 있기떄문에 추가
// browser / chap1 / window-load.html 파일 참고
addEventListener("load", () => {
  const targetRect = target.getBoundingClientRect();
  const targetHalfWidth = targetRect.width / 2;
  const targetHalfHeight = targetRect.height / 2;

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;
    // vertical.style.left = `${x}px`;
    // horozontal.style.top = `${y}px`;
    // target.style.left = `${x}px`;
    // target.style.top = `${y}px`;
    // tag.style.left = `${x}px`;
    // tag.style.top = `${y}px`;
    vertical.style.transform = `translateX(${x}px)`;
    horozontal.style.transform = `translateY(${y}px)`;
    target.style.transform = `translate(${x - targetHalfWidth}px, ${
      y - targetHalfHeight
    }px)`;
    tag.style.transform = `translate(${x}px, ${y}px)`;
    tag.innerHTML = `${x}px, ${y}px`;
  });
});
