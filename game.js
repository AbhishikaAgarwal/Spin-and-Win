let config = {
	width:1800,
	height:1500,
	scene : {
		preload: preload,
		create: create,
		update: update,
	}
    audio: {
        disableWebAudio: true
    }

};

let game = new Phaser.Game(config);

//A function to load assets
function preload()
{
    console.log(this);
//load an image
    
//    game.load.spritesheet('button', 'assets/spin-now.jpg', 193, 71);
    
    this.load.image('button', 'assets/spin-now.jpg', 193, 71)
    this.load.image('background',"assets/back1.jpg");
    this.load.image('logo',"assets/spin-n-win-logo.png");
    this.load.image('wheel',"assets/wheel.png");
    this.load.image('pin',"assets/pin.png");
        this.load.image('stand',"assets/stand.png");
}

//A function to create objects
function create()
{
// Create that image
    let w=game.config.width;
    let h= game.config.height;
    
    this.add.sprite(0,0,'background');
    
    this.add.sprite(w/2+20,h/8,'logo').setScale(0.5);
    
    let stand=this.add.sprite(w/2,h/2+180,'stand').setScale(0.25);
    
    this.wheel = this.add.sprite(w/2,h/2-100,'wheel');
    this.wheel.setScale(0.25);
    
   this.pin=this.add.sprite(w/2,h/2-380,'pin');
    this.pin.setScale(0.35);
    
    this.add.sprite(w/4-100,h/2+100,'button').setScale(1.5);
    button = game.add.button('button', spinwheel, this, 2, 1, 0);
    
//    this.input.on("pointerdown",spinwheel,this);
//    button.onInputOver.add(Spin Now, this);
    
   
}

//A function to update
function update()
{
console.log("In update");
    this.wheel.angle +=1;

}

function spinwheel()
{
    console.log("Time to spin the wheel");
    let rounds = Phaser.Math.Between(2,4);
    console.log(rounds);
    
    let extra_degrees = Phaser.Math.Between(0,11)*30;
    let total_angle = rounds*360 + extra_degrees;
    
   let tween = this.tweens.add({
        targets: this.wheel,
        angle: total_angle,
        ease: "Cubic.easeOut",
        duration: 6000
    })
}
