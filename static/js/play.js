let clocked = document.getElementById('clocknow')

function showTime4(){
    setTimeout(showTime3, 1000)
    
}
function showTime3(){
    
    clocked.innerHTML = '4'
    setTimeout(showTime2, 1000)
}
function showTime2(){
    clocked.innerHTML = '3'
    setTimeout(showTime1, 1000)

}
function showTime1(){
    clocked.innerHTML = '2'
    setTimeout(showTime0, 1000)

}
function showTime0(){
    clocked.innerHTML = '1'
    setTimeout(startNow, 1000)

}

showTime4()

function startNow(){
    var content = document.getElementById("mycontent");
    var counter = document.getElementById("blank")
    counter.innerHTML = ''
    content.classList.remove("info-content");
    
}