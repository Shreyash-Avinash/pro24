class Iron {
  constructor(x,y){
  
   var options={
  
  'restitution':0.8,
  'friction':8,
  'density':12
   }
  this.body= Bodies.rectangle(x,y,80,80,options);
  this.width=80;
  this.height=80;
  World.add(world,this.body);
  
  }
  display(){
  
  var pos=this.body.position;
  
  var angle= this.body.angle;
  push ();
  translate(pos.x,pos.y);
  rotate(angle);
  fill("brown");
  strokeWeight(4);
  rect(0,0,this.width,this.height);
  pop();
  }
  
  
  }