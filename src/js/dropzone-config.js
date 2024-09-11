// Ensure Dropzone is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Dropzone options
    Dropzone.options.myDropzone = {
      chunking: true,
      forceChunking: true,
      chunkSize: 30000000, // 30MB chunks
      retryChunks: true,
      retryChunksLimit: 3,
      url: '/api/upload', // Vercel API route
      init: function() {
        this.on("error", function(file, response) {
          // Handle errors
          console.error(response);
        });
      }
    };
  
    // Initialize Dropzone on your form or element
    new Dropzone("#my-dropzone");
  });
  