 new WOW().init();
particlesJS.load('particles-js', 'js/jarzev.json', function() {
   console.log('callback - particles.js config loaded');
 });
 $(document).ready(function(){
   var index;
var modal= document.querySelector(".modal1");
				console.log("in ajax");
				function buildModal(i)
				{
					console.log("in buildModal");
					var modal_html ="";
					var img = galleryItems[i].imgSrc;
					var img_alt = galleryItems[i].imgAlt;
					var title= galleryItems[i].heading;
					var intro = galleryItems[i].introduction;
					var live = galleryItems[i].website;
					var github = galleryItems[i].gitLink;
					console.log(img);
					modal_html+='  <div class="modal_content mx-auto">';
          //modal_html+='<span class="close1">&times;</span>';
          modal_html+='<div class="grid-modal1">';
        modal_html+=    '<div class="col-grid-modal-item">';
      //  modal_html+='<div class="previous">&laquo; Previous</div>';
        //modal_html+='<i class="fas fa-chevron-left" id="left-arrow" style="font-size:44px"></i>';

          modal_html+='<img src="'+img+'"class="modal-img" alt ="'+img_alt+'">';
          modal_html+='  </div>';
          modal_html+='  <div class="col-grid-modal-item">';
          modal_html+='<h3 class="project_name">'+title+'</h3>';
          modal_html+='<p class="desc mx-auto">'+intro+'</p>';
          //modal_html+='<div  class="next">Next &raquo;</div>';
          //modal_html+='<i class="fas fa-chevron-right" id="right-arrow" style="font-size:44px"></i>';
          modal_html+='  <div class=" mx-auto pb-2">';
          modal_html+='<a class="button_link" target="_blank" href="'+live+'">';
          modal_html+='<button type="button"class= "buttons"  id="run_button">Run Project</button></a> &nbsp;';
          modal_html+='<a  class="button_link" target="_blank" href="'+github+'"><button type="button" id="git_button" class= "buttons">Github</button></a>';
          modal_html+='</div></div></div></div>';

					$('.modal1').html(modal_html);
					$('.modal1').show();

				}
				//var learn = document.querySelectorAll('.learn_more');
				//learn.addEventListener('click',function(){
					$('.learn-more').click(function(){
					console.log("clickked card image");
			 		 index = $(this).attr('id');
					console.log('index'+index);

					buildModal(index);
				});

  /*function prevImg() {
    console.log("prev"+index);
  if (index > 0) {
  index--;
  }
  buildModal(index);
}
function nextImg() {
    console.log("next"+index);
  if (index < 7) {
    index++;
  }
  buildModal(index);
}
var modal_content=document.querySelector('.modal_content');
modal.addEventListener('click', (e) => {
  console.log("in modal Event listener");
  console.log(e.target.classname);
  if (e.target.classname === 'next') {
    console.log("in right");
var current_item= e.target.id;
console.log("current_item in right"+current_item);
//nextImg(current_item);
}
  if (e.target.classname === 'previous') {
      console.log("in left");
$('.fa-chevron-left').click(prevImg);
 current_item= e.target.id;
 console.log("current_item in left"+current_item);
 //prevImg(current_item);
}
});*/
        // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
 // When the user clicks on <span> (x), close the modal
/*  modal.onclick = function(e) {
    console.log("in modal for span");
      if (e.target.tagName == "span") {

  }*/
  function hasClass(elem, className) {
    return elem.classList.contains(className);
}

/*  document.addEventListener('click',function(e){
      console.log("in click event of document");
  if (hasClass(e.target, 'close1')){
     console.log("in modal for span tag");
     //do something
     modal.style.display = "none";

   }
});*/

});//closed document
