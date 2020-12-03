const obstaclesArray = [];




class Obstacle{
    constructor(){
        this.top = (Math.random() * canvas.height/3) + 25;
        this.bottom = (Math.random() * canvas.height/3) +25;
        this.x = canvas.width;
        this.width = 25;
        this.color = 'hsla(' + hue +', 100%, 50%, 9)';
        this.counted = false;
    }
    draw(){
        cvn.fillStyle = this.color;
        cvn.fillRect(this.x, 0, this.width, this.top);
        cvn.fillRect(this.x, canvas.height - this.bottom, this.width,this.bottom);
    }
    update(){
        this.x -= gameSpeed;
        if(!this.counted && this.x < ufo.x){
            score++;
            this.counted = true;
        }
        this.draw();
    }
}
function Obstacles(){
    if(frame%40 === 0){
        obstaclesArray.unshift(new Obstacle);
    }
    for(let i=0; i<obstaclesArray.length;i++){
        obstaclesArray[i].update();
    }
    if(obstaclesArray.length > 25){
        obstaclesArray.pop(obstaclesArray[0]);
    }
}
