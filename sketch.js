
var boxes = [];
dir = 1;
var box;
function setup(){
    createCanvas(displayWidth/2,displayHeight-200);
    for(var j=height-(height/10);j>=0;j-=(height/10)){
    for(var i = 0;i< width;i+=(width/10)){
            
         box = new Box(i,j,width/10,height/10);
            boxes.push(box);

        }
    }
}

function draw(){
    background("white");
      
 
    for(var i = 0;i<10;i++){
        if(i%2==0){
            fill("yellow")
        }
        else{
            fill("red");
        }
        boxes[i].display();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)

    }
    for(var i = 10;i<20;i++){
        if(i%2!==0){
                    fill("yellow")
                }
                else{
                    fill("red");
                }
                boxes[i].display();
    }
    var display_x = width-45;
    for(var i = 10;i<20;i++){
        
        var display_y = height -100;
        textSize(20);
        fill("black")
        text(i+1,display_x,display_y);
        display_x -= 73;
    }
    for(var i = 20;i<30;i++){
        if(i%2==0){
            fill("yellow")
        }
        else{
            fill("red");
        }
        boxes[i].display();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)

    }
    for(var i = 30;i<40;i++){
    if(i%2!==0){
        fill("yellow")
    }
    else{
        fill("red");
    }
    boxes[i].display();
}
    var display_x = width-45;
    for(var i = 30;i<40;i++){
        
        textSize(20);
        fill("black")
        var display_y = height -235;
        text(i+1,display_x,display_y);
        display_x -= 73;
    }
    for(var i = 40;i<50;i++){
        if(i%2==0){
            fill("yellow")
        }
        else{
            fill("red");
        }
        boxes[i].display();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)

    }
    for(var i = 50;i<60;i++){
        if(i%2!==0){
                    fill("yellow")
                }
                else{
                    fill("red");
                }
                boxes[i].display();
    }
    var display_x = width-45;
    for(var i = 50;i<60;i++){
        
        var display_y = height -370;
        textSize(20);
        fill("black")
        text(i+1,display_x,display_y);
        display_x -= 73;
    }
    for(var i = 60;i<70;i++){
        if(i%2==0){
            fill("yellow")
        }
        else{
            fill("red");
        }
        boxes[i].display();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)

    }
    for(var i = 70;i<80;i++){
        if(i%2!==0){
                    fill("yellow")
                }
                else{
                    fill("red");
                }
                boxes[i].display();
    }
    var display_x = width-45;
    for(var i = 70;i<80;i++){
        
        var display_y = height -520;
        textSize(20);
        fill("black")
        text(i+1,display_x,display_y);
        display_x -= 73;
    }
    for(var i = 80;i<90;i++){
        if(i%2==0){
            fill("yellow")
        }
        else{
            fill("red");
        }
        boxes[i].display();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)

    }
   

    for(var i = 90;i<100;i++){
        if(i%2!==0){
                    fill("yellow")
                }
                else{
                    fill("red");
                }
                boxes[i].display();
    }
    var display_x = width-45;
    for(var i = 90;i<100;i++){
        
        var display_y = height -670;
        fill("black")
        text(i+1,display_x,display_y);
        display_x -= 73;
        console.log(i)
    }
        
        
        
    
}