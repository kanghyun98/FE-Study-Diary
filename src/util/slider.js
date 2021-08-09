export function slider(data) {
  const movePrev = document.querySelector('.left-button');
  const moveNext = document.querySelector('.right-button');
  const result_section = document.querySelector('.result-section');
  const page = Object.keys(data).length;
  let pos = 0;

  const move = (position) => {
    result_section.style.transform = `translateX(${-position * 100}vw)`;
  };

  // 끝에 도달 시 이동 버튼 사라지게 설정
  const hideButton = (position, num) => {
    if (position === num) {
      if (num === 0) {
        movePrev.classList.add('hidden');
      }
      if (num === page - 1) {
        moveNext.classList.add('hidden');
      }
    } else {
      movePrev.classList.remove('hidden');
      moveNext.classList.remove('hidden');
    }
  };

  // 이동 버튼 초기 표시 여부(페이지 수에 따라)
  const basicButton = () => {
    result_section.style.width = `${page * 100}vw`; // 페이지 수에 따른 넓이 설정
    if (page < 2) {
      moveNext.classList.add('hidden');
    } else {
      moveNext.classList.remove('hidden');
    }
  };

  basicButton();

  movePrev.addEventListener('click', () => {
    pos -= 1;
    move(pos);
    hideButton(pos, 0);
  });

  moveNext.addEventListener('click', () => {
    pos += 1;
    move(pos);
    hideButton(pos, page - 1);
  });
}
