var main_url = "https://foodish-api.herokuapp.com/images/";
var mngr;
var menuitem = "";
var randomnbr;
var rains = [];
var fires = [];
// var bgmusic;
// var speaking;
// var thunder;
// var fw;

function preload() {
	// bgmusic = loadSound("bg.ogg");
    // speaking = loadSound("speaking.mp3");
    // thunder = loadSound("thunder.mp3");
    // fw = loadSound("fw.mp3");
	openm = loadImage("images/open.jpg");
    closem = loadImage("images/close.jpg");
    backm = loadImage("images/back.jpg");
    smiles = loadImage("images/smile.png");
    bigsmiles = loadImage("images/bigsmile.png");
    angrys = loadImage("images/angry.png");
    surprises = loadImage("images/surprise.png");
    oned = loadImage("images/1d.png");
    twod = loadImage("images/2d.png");
    threed = loadImage("images/3d.png");
    threead = loadImage("images/3ad.png");
    threebd = loadImage("images/3bd.png");
    rain = loadImage("images/rain.gif");
    fire = loadImage("images/fire.gif");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#ece6e6');
    imageMode(CENTER);
	// bgmusic.play();
    mngr = new SceneManager();
    mngr.addScene (intro);
    mngr.addScene (scene1);
    mngr.addScene (food);
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
        // speaking.play();
        image(closem, windowWidth/2, windowHeight/2, 500, 700);
        image(oned, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(smiles, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
	}

    this.draw = function() {}

    this.mousePressed = function() {
        this.sceneManager.showScene(scene1);
    }
}

function scene1() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        // speaking.play();
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
                mngr.showScene(food);
                menuitem = "samosa";
                randomnbr = Math.floor(Math.random() * 23);
                break;
            case '2':
                mngr.showScene(food);
                menuitem = "pizza";
                randomnbr = Math.floor(Math.random() * 85);
                break;
            case '3':
                mngr.showScene(food);
                menuitem = "pasta";
                randomnbr = Math.floor(Math.random() * 35);
                break;
            case '4':
                mngr.showScene(food);
                menuitem = "burger";
                randomnbr = Math.floor(Math.random() * 87);
                break;
            case '5':
                mngr.showScene(food);
                menuitem = "butter-chicken";
                randomnbr = Math.floor(Math.random() * 23);
                break;
            case '6':
                mngr.showScene(food);
                menuitem = "rice";
                randomnbr = Math.floor(Math.random() * 36);
                break;
            case '7':
                mngr.showScene(food);
                menuitem = "biryani";
                randomnbr = Math.floor(Math.random() * 83);
                break;
            case '8':
                mngr.showScene(food);
                menuitem = "dessert";
                randomnbr = Math.floor(Math.random() * 37);
                break;
        }
	}
}

function food() {	
	this.setup = function() {
		createCanvas(windowWidth, windowHeight);
        background('#ece6e6');
        // speaking.play();
        imageMode(CENTER);
        image(backm, windowWidth/2, windowHeight/2, 500, 700);
        image(threed, windowWidth/2 - 570, windowHeight/2 + 20, 300, 300);
        image(surprises, windowWidth/2 - 370, windowHeight/2 + 200, 200, 200);
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
        // speaking.play();
        // thunder.play();
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
        // speaking.play();
        // fw.play();
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
