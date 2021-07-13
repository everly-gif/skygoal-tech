window.onload=function(){
    const toggleButton=document.getElementsByClassName('toggle-button')[0];
    const nlinks= document.getElementsByClassName('r-nav')[0];
    toggleButton.addEventListener('click', () => {
        nlinks.classList.toggle('act');
    })
    // var modal = document.getElementById("modal");

    // // Get the button that opens the modal
    // var btn = document.getElementById("contact");

    // // Get the <span> element that closes the modal
    // var span = document.getElementById("close-1");

    // // When the user clicks the button, open the modal 
    // btn.onclick = function() {
    // modal.style.display = "block";
    // }

    // // When the user clicks on <span> (x), close the modal
    // span.onclick = function() {
    // modal.style.display = "none";
    // }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    // if (event.target == modal) {
    //     modal.style.display = "none";
    // }
    // }
    var modal_res = document.getElementById("modal-res");
    

    // Get the button that opens the modal
    var btn_res = document.getElementById("show");
    var n=document.getElementById("n");

    // Get the <span> element that closes the modal
    var span_res = document.getElementById("close-2");

    // When the user clicks the button, open the modal 
    btn_res.onclick = function() {
    modal_res.style.display = "block";
    n.style.zIndex="0";
    }

    // When the user clicks on <span> (x), close the modal
    span_res.onclick = function() {
    document.getElementById("form").reset();
    modal_res.style.display = "none";
    
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal_res) {
        modal_res.style.display = "none";
    }
    }
    

  
}
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" acts", "");
  }
  slides[slideIndex-1].style.display = "block";  
  
  dots[slideIndex-1].className += " acts";
}

window.addEventListener('scroll',()=>{
    let anime=document.querySelectorAll('.reveal');
    let size=window.innerHeight;
    for(var i=0; i<anime.length;i++){
        var top=anime[i].getBoundingClientRect().top;
        if(top<size){
            anime[i].classList.add('active');
            
        }
        else{
            anime[i].classList.remove('active');
        }
    } 
 
});


window.addEventListener('scroll',()=>{
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
      document.getElementsByClassName('navbar')[0].style.boxShadow="0 3px 5px #EEDCC9";
      document.getElementsByClassName('navbar')[0].style.backgroundColor="#FFFFFF";
  }
 else{
      document.getElementsByClassName('navbar')[0].style.boxShadow="none";
      document.getElementsByClassName('navbar')[0].style.backgroundColor="#FFFAFA";
}
 
});
var marker=document.querySelector('#hover');
var item=document.querySelectorAll('.m-links');
var v=document.getElementById('active');
window.addEventListener('load',()=>{
  marker.style.left=v.offsetLeft+"px";
  marker.style.width=v.offsetWidth+"px";
  marker.style.padding="8px";
})

function indicator(e){
  marker.style.left= e.offsetLeft+"px";
  marker.style.width=e.offsetWidth+"px";
  marker.style.padding="8px";
}

item.forEach(link=>{
  link.addEventListener('mouseover',(e)=>{
    indicator(e.target);
  })
  link.addEventListener('mouseout',()=>{
    marker.style.left=v.offsetLeft+"px";
    marker.style.width=v.offsetWidth+"px";
  })
  
})
//   document.addEventListener("contextmenu", function(e){
//    e.preventDefault();
//  }, false);
var mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function gototop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}