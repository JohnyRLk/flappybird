const particlesArray = [];
class Particle{
    constructor(){
        this.x = ufo.x;
        this.y = ufo.y;
        this.size = Math.random() * 7+ 1;
        this.speedY = (Math.random()*1) - 0.2;
        this.color='hsla(' + hue + ',100%,50%, 0.6)';
    }
    update(){
        this.x -= gameSpeed;
        this.y += this.speedY;
    }
    draw(){
        cvn.fillStyle = this.color;
        cvn.beginPath();
        cvn.arc(this.x,this.y+40,this.size,0,Math.PI * 2);
        cvn.fill();
    }

}
function Particles(){
    particlesArray.unshift(new Particle);
    for(i=0; i < particlesArray.length;i++){
        particlesArray[i].draw();   
        particlesArray[i].update();
             
    }
    if(particlesArray.length>200){
        for(let i = 0; i< 20; i++){
            particlesArray.pop(particlesArray[i]);
        }
    }
}