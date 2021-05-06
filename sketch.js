// var product_data;
// var input;
// var main_url = "https://makeup-api.herokuapp.com/api/v1/products.json?product_type="
// var productName = "blush";
// var products = [];
// var brandName;
// //var brandcounter = 0;

// function preload(){
//   var url = main_url + productName;
//   loadJSON(url, getProduct);
// }

// function getProduct(product){
//   product_data = product;
// }

// function setup() {
//     createCanvas(windowWidth, windowHeight);
//     var button = select('button');
//     input = select('#product');
//     button.mousePressed(updateBrand);
// }

// function updateBrand(){
//     finalUrlPart = '' + input.value();
//     var url = main_url + finalUrlPart;
//     loadJSON(url, getProduct);
//     products = [];
//     brandcounter = 0;
//     products_len = product_data.length;
//     for (var i = 0; i < products_len - 1; i++) {
//         brandName = product_data[i].brand;
//         products.push(new writingText(brandName));
//         //brandcounter++;
//     }
// }

// function draw() {
//     background('#FAA1AC');
//     for (var i = 0; i < products.length; i++) {
//         products[i].warping();
//         products[i].writing();
//     }
// }

// class writingText{
//     constructor(productType) {
//         this.string = productType;
//         this.x = random(0, width);
//         this.y = random(0, height);
//         this.speedY = random(-3, 3);
//         this.speedX = random(-3, 3);
//     }
//     warping() {
//         this.x += this.speedX;
// 		if (this.x > windowWidth || this.x < 0){
//             this.speedX *= -1;
//         }
//         this.y += this.speedY;
// 		if (this.y > windowHeight || this.y < 0){
//             this.speedY *= -1;
//         }
//     }
//     writing() {
//         textSize(25);
//         fill('white');
//         text('' + this.string, this.x, this.y);
//     }  
// }



// var music;
// var main_url = "https://foodish-api.herokuapp.com/images/";
var mngr;

function preload() {
	// bgmusic = loadSound("hello.mp3"); // for bg music
	menuimg = loadImage("menu.jpg");
    boximg = loadImage("box.png");
    spriteimg = loadImage("sprite.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
	
	// bgmusic.play();

    mngr = new SceneManager();

    mngr.addScene (intro);
    mngr.addScene (scene1);
    // mgr.addScene (scene2);
	// mgr.addScene (scene3);
	// mgr.addScene (scene4);
	// mgr.addScene (scene5);
	// mgr.addScene (scene6);
	
    mngr.showNextScene();
}

function draw() {
    mngr.draw();
}

function mousePressed() {
    mngr.handleEvent("mousePressed");
}

function intro() {
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#e9d7d9');
        imageMode(CENTER);
        image(menuimg, windowWidth/2, windowHeight/2, 200, 600);
        image(boximg, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(spriteimg, windowWidth/2-250, windowHeight/2, 200, 200);
	}

    this.draw = function() {
        console.log("working UwU")
    }

    this.mousePressed = function() {
		this.sceneManager.showNextScene();
    }
}

function scene1() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#e9d7d9');
        imageMode(CENTER);
        image(menuimg, windowWidth/2, windowHeight/2, 200, 600);
        image(boximg, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(spriteimg, windowWidth/2-250, windowHeight/2, 200, 200);
	}
	
	this.draw = function() {
        textSize(35);
		textFont("Times New Roman");
        textSize(72);
		text("hello uwu testing", width/2, height/2);
	}
	
	this.mousePressed = function() {
		this.sceneManager.showNextScene();
        // this.sceneManager.showScene(scene2);
	}
}

