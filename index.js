function resizeImages() {
    // Get the selected files from the input element
    const fileInput = document.getElementById('fileInput');
    const files = fileInput.files;
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
  
      // Create a new image element and set its source to the selected file
      const img = new Image();
      img.src = URL.createObjectURL(file);
  
      // Wait for the image to load before resizing it
      img.onload = function() {
        // Create a canvas element with the desired size
        const canvas = document.createElement('canvas');
        canvas.width = 1200;
        canvas.height = 630;
  
        // Draw the image on the canvas with the desired size
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 1200, 630);
  
        // Convert the canvas to a JPEG blob and create a download link
        canvas.toBlob(function(blob) {
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = file.name.replace(/\.[^/.]+$/, "") + '_resized.jpg';
          link.click();
  
          // Clean up
          URL.revokeObjectURL(url);
        }, 'image/jpeg', .95);
      };
    }
  }
  
