let config = {
	width:800,
	height:600,
	scene : {
		preload: preload,
		create: create,
		update: update,
	}

};

let game = new Phaser.Game(config);

//A function to load assets
function preload()
{
//load an image
    this.load.image('background',"assets/back.jpg")
}

//A function to create objects
function create()
{
// Create that image
    
this.add.sprite(0,0,'background');
}

//A function to update
function update()
{
console.log("In update");

}