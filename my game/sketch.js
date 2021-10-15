var logo;
var offer;
var laptop,computers,earphones,mobile;
var laptopimg,computerimg,earphoneimg,mobileimg,logoimg,aboutimg;
var aboutus;
var e1,e2,e3,e4,e5,e6,e1i,e2i,e3i,e4i,e5i,e6i;
var m1,m2,m3,m4,m5,m6,m1i,m2i,m3i,m4i,m5i,m6i;
var l1,l2,l3,l4,l5,l6,l1i,l2i,l3i,l4i,l5i,l6i;
var c1,c2,c3,c4,c5,c6,c1i,c2i,c3i,c4i,c5i,c6i;


function preload(){
    logoimg=loadImage("./assets/lap.jfif");
    earphoneimg=loadImage("./assets/e1.png");
    mobileimg=loadImage("./assets/m1.jfif");
    aboutimg=loadImage("./assets/aboutus.png");
    laptopimg=loadImage("./assets/l1.jfif");
    e1i=loadImage("./assets/e1.png");
    e2i=loadImage("./assets/e2.jfif");
    e3i=loadImage("./assets/e3.png");
    e4i=loadImage("./assets/e4.jfif");
    e5i=loadImage("./assets/e5.jfif");
    e6i=loadImage("./assets/e6.jfif");
    m1i=loadImage("./assets/m1.jfif");
    m2i=loadImage("./assets/m2.jfif");
    m3i=loadImage("./assets/m3.jfif");
    m4i=loadImage("./assets/m4.jfif");
    m5i=loadImage("./assets/m5.jfif");
    m6i=loadImage("./assets/m6.jfif");
    c1i=loadImage("./assets/c1.jfif");
    c2i=loadImage("./assets/c2.jfif");
    c3i=loadImage("./assets/c3.jfif");
    c4i=loadImage("./assets/c4.jfif");
    c5i=loadImage("./assets/c5.jfif");
    c6i=loadImage("./assets/c6.jfif");
    l1i=loadImage("./assets/l1.jfif");
    l2i=loadImage("./assets/l2.jfif");
    l3i=loadImage("./assets/l3.jfif");
    l4i=loadImage("./assets/l4.jfif");
    l5i=loadImage("./assets/l5.jfif");
    l6i=loadImage("./assets/l6.jfif");
}


function setup(){
    createCanvas(600,800);
    logo=createSprite(30,30,50,50);
    logo.addImage("logo",logoimg);
    logo.scale=0.3;
    computers=createSprite(50,150,50,50);
    computers.visible=true;
    computers.addImage("comp",c1i);
    computers.scale=0.3;
    mobile=createSprite(160,150,50,50);
    mobile.addImage("miage",mobileimg);
    mobile.scale=0.3;
    mobile.visible=true;
    laptop=createSprite(290,150,50,50);
    laptop.addImage("laptopi",laptopimg);
    laptop.scale=0.3
    laptop.visible=true;

    earphones=createSprite(460,150,50,50);
    earphones.addImage("eimg",earphoneimg);
    earphones.scale=0.3;
    earphones.visible=true;
    
    offer=createSprite(70,370,100,100);
    offer.visible=true;
    aboutus=createSprite(250,250,50,50);
   aboutus.addImage("about",aboutimg);
    aboutus.scale=0.5;
    aboutus.visible=true

   
    e1=createSprite(80,120,50,60);
    e1.addImage("e1",e1i);
    e1.scale=0.5;
    e1.visible=false;
    e2=createSprite(260,120,50,60);
    e2.addImage("e2",e2i);
    e2.scale=0.5;
    e2.visible=false;
    e3=createSprite(460,120,50,60);
    e3.addImage("e3",e3i);
    e3.scale=0.5;
    e3.visible=false;
    e4=createSprite(80,340,50,60)
    e4.addImage("e4",e4i);
    e4.scale=0.6;e4.visible=false;
    e5=createSprite(260,340,50,60);
    e5.addImage("e5",e5i);
    e5.scale=0.5;
    e5.visible=false;
    m1=createSprite(80,120,50,60);
    m1.addImage("m11",m1i);
    m1.scale=0.5;
    m1.visible=false;
    m2=createSprite(260,120,50,60);
    m2.addImage("m2",m2i);
    m2.scale=0.5;
    m2.visible=false;
    m3=createSprite(460,120,50,60);
    m3.addImage("m3",m3i);
    m3.scale=0.5;
    m3.visible=false;
    m4=createSprite(80,340,50,60);
    m4.addImage("m4",m4i);
    m4.scale=0.6;
    m4.visible=false;
    m5=createSprite(260,340,50,60);
    m5.addImage("m5",m5i);
    m5.scale=0.6;
    m5.visible=false;
    m6=createSprite(460,340,50,60);
    m6.addImage("m6",m6i);
    m6.scale=0.6;
    m6.visible=false;
    l1=createSprite(80,120,50,60);
    l1.addImage("l11",l1i);
    l1.scale=0.5;
    l1.visible=false;
    l2=createSprite(260,120,50,60);
    l2.addImage("l2",l2i);
    l2.scale=0.5;
    l2.visible=false;
    l3=createSprite(460,120,50,60);
    l3.addImage("l3",l3i);
    l3.scale=0.5;
    l3.visible=false;
    l4=createSprite(80,340,50,60);
    l4.addImage("l4",l4i);
    l4.scale=0.6;
    l4.visible=false;
    l5=createSprite(260,340,50,60);
    l5.addImage("l5",l5i);
    l5.scale=0.6;
    l5.visible=false;
    l6=createSprite(460,340,50,60);
    l6.addImage("l6",l6i);
    l6.scale=0.6;
    l6.visible=false;
    c1=createSprite(80,120,50,60);
    c1.addImage("c11",c1i);
    c1.scale=0.5;
    c1.visible=false;
    c2=createSprite(260,120,50,60);
    c2.addImage("c2",c2i);
    c2.scale=0.5;
    c2.visible=false;
    c3=createSprite(460,120,50,60);
    c3.addImage("c3",c3i);
    c3.scale=0.5;
    c3.visible=false;
    c4=createSprite(80,340,50,60);
    c4.addImage("c4",c4i);
    c4.scale=0.6;
    c4.visible=false;
    c5=createSprite(260,340,50,60);
    c5.addImage("c5",c5i);
    c5.scale=0.6;
    c5.visible=false;
    c6=createSprite(460,340,50,60);
    c6.addImage("c6",c6i);
    c6.scale=0.6;
    c6.visible=false;
    

    
    
}

function draw(){
    background("black");
    if( mousePressedOver(earphones)){
        offer.visible=false;
        laptop.visible=false;
        mobile.visible=false;
        computers.visible=false;
        earphones.visible=false;
        aboutus.visible=false;
        e1.visible=true;
        e2.visible=true
        e3.visible=true
        e4.visible=true
        e5.visible=true

            
        }
        if(mousePressedOver(mobile)){
            offer.visible=false;
            laptop.visible=false;
            mobile.visible=false;
            computers.visible=false;
            earphones.visible=false;
            aboutus.visible=false;
            m1.visible=true;
            m2.visible=true;
            m3.visible=true;
            m4.visible=true;
            m5.visible=true;
            m6.visible=true;
        }
        if(mousePressedOver(computers)){
            offer.visible=false;
            laptop.visible=false;
            mobile.visible=false;
            computers.visible=false;
            earphones.visible=false;
            aboutus.visible=false;
            c1.visible=true;
            c2.visible=true;
            c3.visible=true;
            c4.visible=true;
            c5.visible=true;
            c6.visible=true;
        }
        if(mousePressedOver(laptop)){
            offer.visible=false;
            laptop.visible=false;
            mobile.visible=false;
            computers.visible=false;
            earphones.visible=false;
            aboutus.visible=false;
            l1.visible=true;
            l2.visible=true;
            l3.visible=true;
            l4.visible=true;
            l5.visible=true;
            l6.visible=true;
        }
    drawSprites();
}
