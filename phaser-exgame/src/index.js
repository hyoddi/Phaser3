import '/workspaces/Phaser3/phaser-exgame/src/index.css';
import Phaser from 'phaser'

import Loading from './scenes/loading';
import Round from './scenes/round';

// 게임설정

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    type:Phaser.AUTO, // WebGl or Canvas
    width:화면폭,
    height:화면높이,
    physics:{// 물리엔진
        default:'arcade', // arcade 엔진 
        arcade : {
            // debug:true,// 디버깅 사용
            }
    },
    scale:{ //배율설정
        mode:Phaser.Scale.FIT, // 자동맞춤
        autoCenter:Phaser.Scale.CENTER_BOTH, // 가로세로 모두 맞춤
        width:width,// 비율설정용 폭
        height:height, // 비율설정용 높이
    },
    // 장면 설정
    scene:[Loading,Round]
}

const game = new Phaser.Game(config);
