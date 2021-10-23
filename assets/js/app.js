// grap all elements
const progressBar   = document.querySelector('#progress_bar');
const section       = document.querySelector('section');

// Create scroll page function
const animateProgressBar = () => {
    let scrollDistance  = -section.getBoundingClientRect().top;
    let progressWidth   = (scrollDistance / (section.getBoundingClientRect().height - document.documentElement.clientHeight))*100;
    let value = Math.floor(progressWidth);
    progressBar.style.width = value + "%";
    
    if(value < 0){
        progressBar.style.window = "0%";
    }
}

window.addEventListener('scroll', animateProgressBar);
