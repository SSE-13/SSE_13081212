
var humanContainer = new render.DisplayObjectContainer();
var head = new render.Bitmap();
head.x =0;
head.y = -50;
var trunk = new render.Bitmap();
trunk.x = 0;
trunk.y=0;
var left_arm = new render.Bitmap();
left_arm.x = -10;
left_arm.y =0;
var right_arm = new render.Bitmap();
right_arm.x = 35;
right_arm.y =0;
var left_leg = new render.Bitmap();
left_leg.x = 0;
left_leg.y =50;
var right_leg = new render.Bitmap();
right_leg.x = 20;
right_leg.y = 50;

head.source = "head.png";
trunk.source = "trunk.png";
left_arm.source = "left_arm.png";
right_arm.source = "right_arm.png";
left_leg.source = "left_leg.png";
right_leg.source = "right_leg.png";

humanContainer.addChild(head);
humanContainer.addChild(trunk);
humanContainer.addChild(left_arm);
humanContainer.addChild(right_arm);
humanContainer.addChild(left_leg);
humanContainer.addChild(right_leg);

var renderCore = new render.RenderCore();
renderCore.start(humanContainer, ["head.png", "trunk.png","left_arm.png","right_arm.png", "left_leg.png", "right_leg.png"]);


class HumanBody extends Body {
    
    
    vx:number = 5;
    vrotation = Math.PI/2;

    onTicker(duringTime: number) {
        this.x += this.vx*duringTime;
        this.rotation += this.vrotation*duringTime;
        

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.y = 200; 
ticker.start([body]);


var eventCore = new events.EventCore();
eventCore.init();

var isHead = 0;
var isLeg = 0;

var HitTest = (localPoint:math.Point,displayObject:render.DisplayObject) =>{
    // alert (`点击位置为${localPoint.x},${localPoint.y}`);
    console.log(localPoint);
    if(localPoint.x > 0  && localPoint.x <= 50 && localPoint.y > 0 && localPoint.y <= 50){
        isHead += 1;
    }
    if(localPoint.x > -30 && localPoint.x < 10 && localPoint.y > 80 && localPoint.y < 250 
    || localPoint.x > 40 && localPoint.x < 80 && localPoint.y > 80 && localPoint.y < 250){
        isLeg += 1;
    }

    return true;
  
}

var OnClick = () => {

    if(isHead == 1){
        body.vx *= -1;
        body.vrotation *= -1;
    }
    
    if(isLeg == 1){
        if(isHead < 1){
            isHead = 1;
        }
        body.vx = 0;
        body.vrotation = 0;
        body.rotation = 0;
    }

    if(isLeg >= 1 && isHead >= 2){
        body.vx = 5;
        body.vrotation = Math.PI/2;
        isHead = 0;
        isLeg = 0;
    }
  console.log("clickhead:"+isHead);
  console.log("clickleg:"+ isLeg);
    

}


eventCore.register(head,HitTest,OnClick);
eventCore.register(left_leg,HitTest,OnClick);
eventCore.register(right_leg,HitTest,OnClick);











