void setup() {
  size(window.innerWidth, window.innerHeight);
  smooth();  
}

void draw(){

}

void mousePressed(){
  background(random(255),random(255),random(255));
}

void keyPressed(){
  textSize(100);
  fill(255, 50);
  text(key, random(width), random(height));
}

void mouseMoved(){
  stroke(255);
  line(width/2, height/2, mouseX, mouseY);
}
