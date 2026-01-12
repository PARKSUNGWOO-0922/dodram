
  const menuImages = document.querySelectorAll('.main-icon-box img');

  menuImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.src = img.dataset.hover;
    });

    img.addEventListener('mouseleave', () => {
      img.src = img.dataset.default;
    });
    console.log(menuImages.length);
  });

 /*
 img.src와 dataset 경로는 브라우저가 보는 방식이 달라서 바로 비교하면 안 됨.

endsWith() 사용하거나

상태 변수로 토글하는 방식이 안전함. 
  */ 
 menuImages.forEach(img => {
  img.addEventListener('click', () => {
    if (img.src === img.dataset.default) {
      img.src = img.dataset.hover;
    } else {
      img.src = img.dataset.default;
    }
  });

  console.log(menuImages.length);
});

// menuImages.forEach(img => {
//     let toggled = false; // 상태 저장
//     img.addEventListener('click', () => {
//       if (!toggled) {
//         img.src = img.dataset.hover;
//         toggled = true;
//       } else {
//         img.src = img.dataset.default;
//         toggled = false;
//       }
//     });
  
// });
