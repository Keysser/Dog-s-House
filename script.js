document.addEventListener("DOMContentLoaded", function() {
    var slideshowImages = document.querySelectorAll(".slideshow-image");
    var currentImageIndex = 0;
    var intervalId;

    function showImage(index) {
        for (var i = 0; i < slideshowImages.length; i++) {
            slideshowImages[i].style.display = "none";
        }
        slideshowImages[index].style.display = "block";
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
        showImage(currentImageIndex);
    }

    intervalId = setInterval(nextImage, 3000);
});
