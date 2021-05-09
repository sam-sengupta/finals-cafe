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
var main_url = "https://foodish-api.herokuapp.com/images/";
var mngr;
var menuitem = "";
var randomnbr;
// ["biryani", "butter-chicken", "dessert", "pasta", "pizza", "rice", "samosa", "burger", ]

function preload() {
	// bgmusic = loadSound("hello.mp3"); // for bg music
	openm = loadImage("open.jpg");
    closem = loadImage("close.jpg");
    backm = loadImage("back.jpg");
    smiles = loadImage("smile.png");
    bigsmiles = loadImage("bigsmile.png");
    angrys = loadImage("angry.png");
    surprises = loadImage("surprise.png");
    oned = loadImage("1d.png");
    twod = loadImage("2d.png");
    threed = loadImage("3d.png");
    threead = loadImage("3ad.png");
    threebd = loadImage("3bd.png");
    one = loadImage("1.png");
    two = loadImage("2.png");
    three = loadImage("3.png");
    four = loadImage("4.png");
    five = loadImage("5.png");
    six = loadImage("6.png");
    seven = loadImage("7.png");
    eight = loadImage("8.png");
    yes = loadImage("yes.png");
    no = loadImage("no.png");
    leave = loadImage("leave.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#ece6e6');
    imageMode(CENTER);
	
	// bgmusic.play();

    mngr = new SceneManager();

    mngr.addScene (intro);
    mngr.addScene (scene1);
    mngr.addScene (biryani);
	mngr.addScene (samosa);
	// mngr.addScene (scene4);
	// mngr.addScene (scene5);
	// mngr.addScene (scene6);
	
    mngr.showNextScene();
}

function draw() {
    mngr.draw();
}

function mousePressed() {
    mngr.handleEvent("mousePressed");
}

function keyPressed() {
    mngr.handleEvent("keyPressed");
}

function intro() {
	this.setup = function() {
        image(closem, windowWidth/2, windowHeight/2, 500, 700);
        image(oned, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(smiles, windowWidth/2-250, windowHeight/2, 100, 100);
	}

    this.draw = function() {
        // console.log("working UwU")
    }

    this.mousePressed = function() {
		// this.sceneManager.showNextScene();
        this.sceneManager.showScene(scene1);
    }
}

function scene1() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#e9d7d9');
        imageMode(CENTER);
        image(openm, windowWidth/2, windowHeight/2, 500, 700);
        image(twod, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(smiles, windowWidth/2-250, windowHeight/2, 100, 100);
        image(one, windowWidth/2, windowHeight/2 - 250, 200, 50);
        image(two, windowWidth/2, windowHeight/2 - 200, 200, 50);
        image(three, windowWidth/2, windowHeight/2 - 150, 200, 50);
        image(four, windowWidth/2, windowHeight/2 - 100, 200, 50);
        image(five, windowWidth/2, windowHeight/2 + 100, 200, 50);
        image(six, windowWidth/2, windowHeight/2 + 150, 200, 50);
        image(seven, windowWidth/2, windowHeight/2 + 200, 200, 50);
        image(eight, windowWidth/2, windowHeight/2 + 250, 200, 50);
	}
	
	this.draw = function() {
        // console.log("working UwU")
	}
	
	this.keyPressed = function() {
        switch(key) {
            case '1':
                mngr.showScene(samosa);
                break;
            case '7':
                mngr.showScene(biryani);
                break;
        }
	}
}
function samosa() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#e9d7d9');
        imageMode(CENTER);
        image(openm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(smiles, windowWidth/2-250, windowHeight/2, 100, 100);
        menuitem = "samosa";
        randomnbr = Math.floor(Math.random() * 23);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
        image(yes, windowWidth/2 + 250, windowHeight/2 - 200, 50, 50);
        image(no, windowWidth/2 + 250, windowHeight/2 - 300, 50, 50);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
	}
	
	this.keyPressed = function() {
        switch(key) {
            case 'Y':
                mngr.showScene(sadend);
                break;
            case 'N':
                mngr.showScene(happyend);
                break;
        }
	}
}

function biryani() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#e9d7d9');
        imageMode(CENTER);
        image(openm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2-250, windowHeight/2+100, 200, 200);
        image(smiles, windowWidth/2-250, windowHeight/2, 100, 100);
        menuitem = "biryani";
        randomnbr = Math.floor(Math.random() * 83);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
        image(yes, windowWidth/2 + 250, windowHeight/2 - 200, 50, 50);
        image(no, windowWidth/2 + 250, windowHeight/2 - 300, 50, 50);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
	}
	
	this.keyPressed = function() {
        switch(key) {
            case 'Y':
                mngr.showScene(sadend);
                break;
            case 'N':
                mngr.showScene(happyend);
                break;
        }
	}
}









class falling {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.xSpeed = 10;
      this.ySpeed = 2;
    }
    display() {
      image(gameballoon, this.x, this.y, 150, 200);
    }
    move() {
      this.y += this.ySpeed;
    }
}

class imgzoom {
    constructor(item, x, y) {
        this.name = item;
        this.x = x;
        this.y = y;
        this.inx = 10;
        this.iny = 5;
        this.xspeed = 0.3;
        this.yspeed = 0.1;
    }
    display() {
        image(this.name, this.x, this.y, this.inx, this.iny*2);
    }
    move() {
        this.inx += this.xspeed;
        this.iny += this.yspeed;
    }
    stop() {
        if (this.inx > 500 || this.iny > 500) {
            this.xspeed = 0;
            this.yspeed = 0;
        }
    }
}
