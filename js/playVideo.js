document.addEventListener('DOMContentLoaded', function () {
  var modal = document.getElementById('videoModal');
  var modalVideo = document.getElementById('modalVideo');
  var thumbnails = document.getElementsByClassName('video-thumbnail');
  var span = document.getElementsByClassName('close')[0];

  for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].onclick = function () {
      modal.style.display = "flex";
      modalVideo.src = this.dataset.src;
      modalVideo.play();
   /*  if (modalVideo.requestFullscreen) {
        modalVideo.requestFullscreen();
      } else if (modalVideo.mozRequestFullScreen) { 
        modalVideo.mozRequestFullScreen();
      } else if (modalVideo.webkitRequestFullscreen) { 
        modalVideo.webkitRequestFullscreen();
      } else if (modalVideo.msRequestFullscreen) { 
        modalVideo.msRequestFullscreen();
      }  */
    }
  }

  span.onclick = function () {
    modal.style.display = "none";
    modalVideo.pause();
  }

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      modalVideo.pause();
    }
  }
});