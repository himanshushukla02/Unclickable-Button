let no = document.getElementById('no');
let text = document.getElementById('text');
let vid = document.getElementById('video');
let img = document.getElementById('image')

function saidYes(){
    text.innerHTML = "Us Bhai Us";
    img.style.display = 'none';
    vid.style.display = 'block';
    vid.play()
}

let count = 0
function saidNo(){
    count++
    let num = Math.random()
    if(count%2 != 0){
        if(num < 0.25){
            no.style.left = 100 + 'px';
            no.style.top = 100 + 'px';    
        }
        else if(num > 0.25 && num < 0.5){
            no.style.left = 200 + 'px';
            no.style.top = 100 + 'px';    
        }
        else if(num > 0.5 && num < 0.75){
            no.style.left = 100 + 'px';
            no.style.top = 200 + 'px';    
        }
        else if(num > 0.75 && num < 1){
            no.style.left = 178 + 'px';
            no.style.top = -209 + 'px';    
        }
    }
    else{
        no.style.left = 0 + 'px';
        no.style.top = 0 + 'px';
    }
}