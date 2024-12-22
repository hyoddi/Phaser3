// 로딩화면 클래스


import Phaser from 'phaser';
import Background from '@/images/space.png';

export default class Loading extends Phaser.Scene{

    constructor(){
        super('loading'); // 식별자를 loading으로 설정
    }

    preload(){ //사전설정
        // (별칭, 경로)
        this.load.image('background', Background);
    }

    create(){ //생성
        // 위치 정보는 카메라를 기준으로
        const {x, y, width, height} = this.cameras.main;
        this.background = this.add.tileSprite(x, y, width, height, 'background');
    }
    
    update(){ //변경
        
    }

}
