var red = [0, 100, 73];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "by Sanja";

var letterColors = [red, orange, green, blue, purple];

mouseResponseThreshold = 100;

friction = 0.0;

rotationForce = 0.1;
 
if(10 > 3) {
    bubbleShape = "circle";
}

else {
    bubbleShape = "square";
}

drawName(myName, letterColors);
bounceBubbles();

