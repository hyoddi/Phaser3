const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 패들 설정
const paddleHeight = 10;
const paddleWidht = 75;
let paddleX = (canvas.width - paddleWidht) / 2;

let canvas_width = canvas.width;
let canvas_height = canvas.height;

let ball_x = canvas.width / 2;
let ball_y = canvas.height - 60;
let ball_radiaus = 10;
let ball_dx = 4;
let ball_dy = -4;

function drawBall(){
    ctx.beginPath(); // 새로운 경로 시작
    ctx.arc(ball_x, ball_y, ball_radiaus, 0, Math.PI * 2); // 원 그리기
    ctx.fillStyle = "#FFFFFF"; // 공 색깔 (하양)
    ctx.fill(); // 원 채우기
    ctx.closePath(); // 경로 닫기
}

function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight,
        paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

// 애니메이션 프레임마다 실행되는 함수
function draw(){ 
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 이전 프레임 지우고, 새로운 프레임 그릴 준비
    drawBall(); // 공 그리기
    

    if(ball_x < ball_radiaus || ball_x > canvas_width - ball_radiaus) ball_dx = -ball_dx;
    if(ball_y < ball_radiaus || ball_y > canvas_height - ball_radiaus) ball_dy = -ball_dy;

    // 공 위치 업데이트
    ball_x += ball_dx;
    ball_y += ball_dy;


    requestAnimationFrame(draw); // 다음 프레임 요청
}

draw();