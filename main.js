canvas = document.getElementById("mycanvas4")
ctx = canvas.getContext("2d")
color = "blue"
width = 2
mouseevent = ""
radius = 20

canvas.addEventListener("mouseup",mu)
function mu(e) {
    mouseevent = "mouseup"
    console.log("mouse_is_up")
}

canvas.addEventListener("mouseenter",me)
function me(e) {
    mouseevent = "mouseenter"
    console.log("mouse_entered_canvas")
}

canvas.addEventListener("mouseleave",ml)
function ml(e) {
    mouseevent = "mouseleave"
    console.log("mouse_left_the_canvas")
}

canvas.addEventListener("mousedown",md)
function md(e) {
    mouseevent = "mousedown"
    console.log("mouse_is_down")
    color = document.getElementById("colorss").value
    width = document.getElementById("widthh").value
    radius = document.getElementById("radiouss").value
}

canvas.addEventListener("mousemove",mm)
function mm(e) {
    currentx = e.clientX - canvas.offsetLeft
    currenty = e.clientY - canvas.offsetTop
    if (mouseevent=="mousedown") {
        ctx.beginPath()
        ctx.strokeStyle = color
        ctx.lineWidth = width
       ctx.arc(currentx,currenty,radius,0,2*Math.PI)
        ctx.stroke()
    }
    lastx = currentx
    lasty = currenty
}
function cleararea() {
    ctx.clearRect(0,0,800,600)
}