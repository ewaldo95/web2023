document.addEventListener("DOMContentLoaded", function() {
    var imageIndex = 1;
    var totalImages = 10;
    var imageElement = document.getElementById("productImage");
  
    function showNextImage() {
      imageIndex++;
      if (imageIndex > totalImages) {
        imageIndex = 1;
      }
      var imagePath = `imagenes/ropa${imageIndex}.jpg`;
      imageElement.src = imagePath;
    }
  
    setInterval(showNextImage, 3000); // Cambiar imagen cada 3 segundos
  });
  