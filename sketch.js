
var boxes = [];
dir = 1;
var box;
function setup(){
    createCanvas(displayWidth/2,displayWidth/2);
    for(var j=height-(height/10),k=0;j>=0,k<10;j-=(height/10),k++){
    for(var i = 0,l = width-(width/10) ;i< width,l>=0;i+=(width/10),l-=(width/10)){
            if(k % 2 === 0){
                box = new Box(i,j,width/10,height/10);
            }
            else{
                box = new Box(l,j,width/10,height/10);
            }
            boxes.push(box);
         }
    }
}

function draw(){
    background("white");
     var k = 0; 
    for( var i = 0; i< 100;i++){
        if(k % 2 === 0){
            if(i%2==0){
                fill("yellow")
            }
            else{
                fill("red");
            }
            boxes[i].display(); 
        }
        else{
            if(i%2!==0){
                fill("yellow")
            }
            else{
                fill("red");
            }
            boxes[i].display(); 
        }
        push();
        textSize(20);
        fill("black")
        text(i+1,boxes[i].x+20,boxes[i].y+40)
        pop();
    }

}