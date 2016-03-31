module game {


}

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


    onTicker(duringTime: number) {

         this.x += this.vx*duringTime;
         this.rotation += Math.PI*duringTime;

    }
}

var ticker = new Ticker();
var body = new HumanBody(humanContainer);
body.vx = 5;
body.y = 100;
ticker.start([body]);











