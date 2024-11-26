import '@/styles/background/index.css';
import Phaser, { Physics } from 'phaser'

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
    }
}

const game = new Phaser.Game(config);
