const ListapiURL = 'https://decalcomanie-dev-yebvymrbqa-du.a.run.app/feedback/list';
    const SelectapiURL = 'https://decalcomanie-dev-yebvymrbqa-du.a.run.app/feedback/single';
    let token = localStorage.getItem('token'); // 토큰을 전역 변수로 선언하여 재사용

    function fetchList() {
      fetch(ListapiURL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response      => response.json())
      .then(data => displayWebtoons(data))
      .catch(error => console.error('데이터를 가져오는 중 문제가 발생했습니다:', error));
    }

    function fetchSelect(webtoonTitle, feedbackNumber) {
      fetch(SelectapiURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ webtoon_title: webtoonTitle, feedback_number: feedbackNumber })
      })
      .then(response => response.json())
      .then(data => displayResponse(data))
      .catch(error => console.error('데이터를 가져오는 중 문제가 발생했습니다:', error));
    }

    function displayWebtoons(data) {
      var container = document.getElementById('webtoonsContainer'); // 수정
      container.innerHTML = ''; // 수정
      data.webtoons.forEach(webtoon => {
        const webtoonElement = document.createElement('div');
        webtoonElement.classList.add('webtoon');
        webtoonElement.textContent = `${webtoon.title} ${webtoon.subtitle}`;
        console.log(webtoon.title, webtoon.number, webtoon.subtitle);
        webtoonElement.onclick = () => fetchSelect(webtoon.title, webtoon.number); // 웹툰 클릭 시 fetchSelect 함수 호출
        container.appendChild(webtoonElement);
      });
    }

    function displayResponse(data) {
      const container = document.getElementById('responseContainer');
      container.innerHTML = '';
      // 여기에서 data를 기반으로 응답을 화면에 표시하는 구체적인 코드
      // 예시: data.message를 화면에 표시
      const responseElement = document.createElement('div');
      responseElement.textContent = `${data.feedback}`; // 단순 예시로 응답의 메시지를 출력
      container.appendChild(responseElement);
    }

    window.onload = function() {
      // 페이지 로드 시 로그인 여부 확인 후 리스트 가져오기
      if(token){
        fetchList();
      }
      else{
        console.log("로그인이 필요합니다.");
      }
    }

    // 사이드바에 공지사항을 동적으로 추가하는 함수
    function addNotification(title, round) {
      const notificationsArea = document.getElementById('notifications');
      const notificationDiv = document.createElement('div');
      notificationDiv.className = 'notification';
      notificationDiv.innerHTML = `<strong>${title} ${round}</strong>`;
      notificationsArea.appendChild(notificationDiv);
    }
    document.addEventListener('DOMContentLoaded', (event) => {
            document.querySelectorAll('.responseContainer').forEach(container => {
                container.innerHTML = container.innerHTML.replace('응답: ', '');
            });
        });