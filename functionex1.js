//Area of Circle
function getAreaOfCircle(radius){
    const circleArea= Math.PI * Math.pow(radius,2);
    return {CircleArea: circleArea}; 
}
console.log(getAreaOfCircle(4));

//Circumference of Circle
function getCircumferenceOfCircle(radius){
   const circum = 2 * Math.PI * radius;
   return {CircleCircumference: circum}; 
}
console.log(getCircumferenceOfCircle(4));

//Area of Square
function getAreaOfSquare(side){
    const squareArea = Math.pow(side, 2);
    return {SquareArea: squareArea};
}
console.log(getAreaOfSquare(3));

//Area of Triangle
function getAreaOfTriangle(base, height){
    const triangleArea = (1/2) * base * height;
    return {TriangleArea: triangleArea};
}

console.log(getAreaOfTriangle(2,4));