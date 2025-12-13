 
  
  // 1. 테이블 헤더
  let tableHTML = "<table class = 'notice-table'>";
  
  tableHTML += `
    <thead>
        <tr>
            <th>번호</th>
            <th>제목</th>
            <th>날짜</th>
            <th>작성자</th>
            <th>조회</th>
        </tr>
    </thead>
            `;
      
  // 2. 테이블 바디
  noticeData.forEach(notice => {
  tableHTML += `
    <tbody>
        <tr>
            <td>${notice.id}</td>
            <td><a href="">${notice.title}</a></td>
            <td>${notice.date}</td>
            <td>${notice.writer}</td>
            <td>${notice.checkNum}</td>
        </tr>
    </tbody>
        `;
      });

  tableHTML += "</table>";
      
      
  // 3. 화면에 출력
      document.getElementById("notice-area").innerHTML = tableHTML;

  // 4.공지사항 페이지별 공지사항 갯수 지정  
      const rows = document.querySelectorAll('.notice-table tbody tr');
      const rowsPerPage = 10;
      const totalRows = noticeData.length;
      const pageCount = Math.ceil(totalRows / rowsPerPage);//올림
      const numbers = document.querySelector('.pagination') ;

  // 4-1. 페이지네이션 번호 생성(전체목록에 따라 페이지 증가/감소)
  for (let i = 1; i <= pageCount; i++) {
      numbers.innerHTML += `<a href="#">${i}</a>`;
  }
  // 4-2 페이지네이션 번호 클릭시 이벤트
  const numberBtn = numbers.querySelectorAll('a');

  numberBtn.forEach((items,idx)=>{
      items.addEventListener('click',(e)=>{
        e.preventDefault();
            for(let nb of numberBtn) {
              nb.classList.remove('active');
              e.target.classList.add('active');
            }
            displayRow(idx);
          });
        });
        
  // 4-4.페이지네이션 번호별 공지사항 목록 출력함수
  function displayRow(idx){
    let start = idx * rowsPerPage;
    let end = start + rowsPerPage;
    let rowsArray = [...rows];
    for(ra of rowsArray){
      ra.style.display = 'none';
    }

    let newRows = rowsArray.slice(start,end);
    for(nr of newRows){
      nr.style.display = "";
    }
  }; 
  // 5.시작화면 초기화
  displayRow(0);
