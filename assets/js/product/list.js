const porkContainer = document.querySelector(".pork_container");
const beefContainer = document.querySelector(".beef_container");

pork_list.forEach((item) => {
  porkContainer.innerHTML += `
    <div class="meat">
      <a class="link" href="${item.link}">
        <img class="preview" src="${item.preview}" alt="">
        <div class="meat_text">
          <h3 class="title">도드람한돈 ${item.title}</h3>
        </div>
      </a>
      <p class="price">
        ${item.price}원
        <span><br>(100g당 판매가 : ${item.weight}원)</span>
      </p>
    </div>
  `;
});

beef_list.forEach((item) => {
  beefContainer.innerHTML += `
    <div class="meat">
      <a class="link" href="${item.link}">
        <img class="preview" src="${item.preview}" alt="">
        <div class="meat_text">
          <h3 class="title">${item.title}</h3>
        </div>
      </a>
      <p class="price">
        ${item.price}원
        <span class="weight"><br>(100g당 판매가 : ${item.weight}원)</span>
      </p>
    </div>
  `;
});
