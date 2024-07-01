<template>
    <div class="galerija-view">
      
      <div class="photo-section">
        <div class="photo" v-for="(photo, index) in photos" :key="'photo-'+index">
          <img :src="photo" :alt="'Photo ' + (index + 1)">
        </div>
      </div>
      <div class="video-section">
        <div class="video" v-for="(video, index) in videos" :key="'video-'+index">
          <video autoplay loop muted playsinline>
            <source :src="video" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GalerijaView',
    data() {
      return {
        photos: [
          require('@/assets/photo1.jpg'),
          require('@/assets/photo2.jpg'),
          require('@/assets/photo3.jpg')
        ],
        videos: [
          require('@/assets/video1.mp4'),
          require('@/assets/video2.mp4'),
          require('@/assets/video3.mp4')
        ]
      }
    }
  }
  </script>
  
  <style scoped>
.galerija-view {
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  margin-top: 100px;
  color: white;
  padding-bottom: 200px;
}

.galerija-title {
  text-align: center;
  font-size: 2em;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.photo-section, .video-section {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 20px;
}

.photo, .video {
  width: 30%;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(255, 0, 0, 0.5);
  transition: transform 0.3s ease;
}

.photo:hover, .video:hover {
  transform: scale(1.05);
}

.photo img {
  width: 100%;
  height: 400px; /* Set a fixed height */
  object-fit: cover; /* This will crop the image to fit the container */
  object-position: center; /* This will center the image within the container */
  display: block;
}

.video video {
  width: 100%;
  height: 100%; /* Set the same height as images for consistency */
  display: block;
}

@media (max-width: 768px) {
  .photo, .video {
    width: 100%;
  }
}
</style>