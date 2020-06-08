let x = 20;
function c(){
    console.log(x);
}
function b(){
    let x = 2;
    console.log(x);
    c();
}
function a(){
    let x = 1;
    console.log(x);
    b();
}
a();
