function setup() {
    createCanvas(600, 600);
    background("white");
  }
  
  function draw() {
    
    
    stroke("pink")
    fill ("red")
    
    
    //console.log(mouseIsPressed);
    
    if(mouseIsPressed) {
      rect(mouseX,mouseY,20,35);
    }
  }