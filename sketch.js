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
var rains = [];
var fires = [];
// ["biryani", "butter-chicken", "dessert", "pasta", "pizza", "rice", "samosa", "burger", ]

function preload() {
	// bgmusic = loadSound("hello.mp3");
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
    rain = loadImage("rain.gif");
    fire = loadImage("fire.gif");
    // one = loadImage("1.png");
    // two = loadImage("2.png");
    // three = loadImage("3.png");
    // four = loadImage("4.png");
    // five = loadImage("5.png");
    // six = loadImage("6.png");
    // seven = loadImage("7.png");
    // eight = loadImage("8.png");
    // yes = loadImage("yes.png");
    // no = loadImage("no.png");
    // leave = loadImage("leave.png");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#ece6e6');
    imageMode(CENTER);
	
	// bgmusic.play();

    mngr = new SceneManager();

    mngr.addScene (intro);
    mngr.addScene (scene1);
	mngr.addScene (samosa);
    mngr.addScene (pizza);
    mngr.addScene (pasta);
    mngr.addScene (burger);
    mngr.addScene (butter);
    mngr.addScene (rice);
    mngr.addScene (biryani);
    mngr.addScene (dessert);
	mngr.addScene (sadend);
	mngr.addScene (happyend);
	
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
        image(oned, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(smiles, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
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
        background('#ece6e6');
        imageMode(CENTER);
        image(openm, windowWidth/2, windowHeight/2, 500, 700);
        image(twod, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(smiles, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
	}
	
	this.draw = function() {
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press the number of your", width/2 + 300, height/2 + 200);
        text("picking on your keyboard.", width/2 + 300, height/2 + 225);
	}
	
	this.keyPressed = function() {
        switch(key) {
            case '1':
                mngr.showScene(samosa);
                break;
            case '2':
                mngr.showScene(pizza);
                break;
            case '3':
                mngr.showScene(pasta);
                break;
            case '4':
                mngr.showScene(burger);
                break;
            case '5':
                mngr.showScene(butter);
                break;
            case '6':
                mngr.showScene(rice);
                break;
            case '7':
                mngr.showScene(biryani);
                break;
            case '8':
                mngr.showScene(dessert);
                break;
        }
	}
}

function samosa() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "samosa";
        randomnbr = Math.floor(Math.random() * 23);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function pizza() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "pizza";
        randomnbr = Math.floor(Math.random() * 85);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function pasta() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "pasta";
        randomnbr = Math.floor(Math.random() * 35);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function burger() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "burger";
        randomnbr = Math.floor(Math.random() * 88);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function butter() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "butter-chicken";
        randomnbr = Math.floor(Math.random() * 23);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function rice() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "rice";
        randomnbr = Math.floor(Math.random() * 36);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "biryani";
        randomnbr = Math.floor(Math.random() * 83);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
        // image(yes, windowWidth/2 + 250, windowHeight/2 - 200, 50, 50);
        // image(no, windowWidth/2 + 250, windowHeight/2 - 300, 50, 50);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);
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

function dessert() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
        menuitem = "dessert";
        randomnbr = Math.floor(Math.random() * 37);
        imgurl = loadImage(main_url + menuitem + '/' + menuitem + randomnbr + '.jpg')
        displayimg = new imgzoom(imgurl, windowWidth/2, windowHeight/2);
	}
	
	this.draw = function() {
        displayimg.display();
        displayimg.move();
        displayimg.stop();
        textSize(30);
		textFont("Times New Roman");
        fill('#9c8383');
		text("Press 'Y' for yes", width/2 + 300, height/2 + 200);
        text("and 'N' for no.", width/2 + 300, height/2 + 225);

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

function sadend() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        imageMode(CENTER);
        for (i = 0; i < 30; i++) {
            raining = new falling(rain, random(width), random(height));
            rains.push(raining);
        }
	}
	this.draw = function() {
        background('#9c8383');
        image(threead, windowWidth/2 - 200, windowHeight/2 + 20, 300, 300);
        image(angrys, windowWidth/2, windowHeight/2 + 200, 200, 200);
        for (i = 0; i < rains.length; i++) {
            rains[i].display();
            rains[i].move();
            rains[i].re();
        }
	}
	this.mousePressed = function() {
        this.sceneManager.showScene(intro);
    }
}

function happyend() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        imageMode(CENTER);
        for (i = 0; i < 30; i++) {
            fireworks = new falling(fire, random(width), random(height));
            fires.push(fireworks);
        }
	}
	this.draw = function() {
        background('#ece6e6');
        image(threebd, windowWidth/2 - 200, windowHeight/2 + 20, 300, 300);
        image(bigsmiles, windowWidth/2, windowHeight/2 + 200, 200, 200);
        for (i = 0; i < fires.length; i++) {
            fires[i].display();
            fires[i].move();
            fires[i].re();
        }
	}
	this.mousePressed = function() {
        this.sceneManager.showScene(intro);
    }
}









class falling {
    constructor(item, x, y) {
        this.name = item;
        this.x = x;
        this.y = y;
        this.speed = 5;
    }
    display() {
        image(this.name, this.x, this.y, 200, 200);
    }
    move() {
        this.y += this.speed;
    }
    re() {
        if (this.y > height) {
            this.y *= -1;
        }
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
