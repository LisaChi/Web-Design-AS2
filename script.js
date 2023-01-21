// Homework
function homeworknavEnter() {
    var element = document.getElementById('homeworkNav');
    document.getElementById("homeworkNav").style.color = "yellow";
}
function homeworknavLeave() {
    var element = document.getElementById('homeworkNav');
    document.getElementById("homeworkNav").style.color = "white";
}
//Testing
function testingnavEnter() {
    var element = document.getElementById('testingNav');
    document.getElementById("testingNav").style.color = "yellow";
}
function testingnavLeave() {
    var element = document.getElementById('testingNav');
    document.getElementById("testingNav").style.color = "white";
}
//Course Details
function courseDetailsnavEnter() {
    var element = document.getElementById('courseDetailsNav');
    document.getElementById("courseDetailsNav").style.color = "yellow";
}
function courseDetailsnavLeave() {
    var element = document.getElementById('courseDetailsNav');
document.getElementById("courseDetailsNav").style.color = "white";
}
//Log Out
function logOutnavEnter() {
    var element = document.getElementById('LogoutNav');
    document.getElementById("LogoutNav").style.color = "yellow";
}
function logOutnavLeave() {
    var element = document.getElementById('LogoutNav');
document.getElementById("LogoutNav").style.color = "white";
}
function myLoadFunction() {
    var element = document.getElementById('homeworkNav');
    element.addEventListener('mouseenter', homeworknavEnter);
    element.addEventListener('mouseleave', homeworknavLeave);

}
function myFunction() {
    var element = document.getElementById('testingNav');
    element.addEventListener('mouseenter', testingnavEnter);
    element.addEventListener('mouseleave', testingnavLeave);
}
function myLFunction(){
    var element = document.getElementById('courseDetailsNav');
    element.addEventListener('mouseenter', courseDetailsnavEnter);
    element.addEventListener('mouseleave', courseDetailsnavLeave);
}
function myLogFunction(){
    var element = document.getElementById('LogoutNav');
    element.addEventListener('mouseenter', logOutnavEnter);
    element.addEventListener('mouseleave', logOutnavLeave);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);
document.addEventListener('DOMContentLoaded', myFunction);
document.addEventListener('DOMContentLoaded', myLFunction);
document.addEventListener('DOMContentLoaded', myLogFunction);