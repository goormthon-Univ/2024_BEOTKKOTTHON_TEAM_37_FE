// modal
function openSignUpModal() {
    document.getElementById('loginmodal').style.display = 'block';
    document.getElementById('signupModal').style.display = 'none';
}

// 회원가입 함수
function signup() {
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    fetch('https://decalcomanie-dev-yebvymrbqa-du.a.run.app/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password,
        }),
    })
        .then(response => response.json())
        .then(data => {
            alert('회원가입 성공: ' + data.message);
        })
        .catch((error) => {
            console.error('회원가입 실패:', error);
        });
}

// 로그인 함수
function login() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    fetch('https://decalcomanie-dev-yebvymrbqa-du.a.run.app/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
        .then(response => response.json())
        .then(data => {
            const accessToken = data.accessToken;
            localStorage.setItem('token', accessToken); // 로컬 스토리지에 토큰 저장
            console.log(accessToken);
            // 페이지 이동
            window.location.href = 'URL_link2.html?token=' + accessToken;
        })
        .catch((error) => {
            console.error('로그인 실패:', error);
        });
}