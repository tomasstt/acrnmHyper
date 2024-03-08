
<template><div class="black">
  <div class="photobanner">
    <div class="slider">
      <img v-for="(image, index) in images" :key="index" :src="image" />
    </div>
  </div>
</div>
</template>
  
  <script>
  export default {
    data() {
      return {
        images: [
         require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),  require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),  require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),  require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),require('../assets/banner2.svg'),
         require('../assets/banner2.svg'),  require('../assets/banner2.svg')
        ],
      };
    },
    methods: {
     
      
      zoomOut(index) {
        // Remove the CSS class when the hover ends
        this.$set(this.images, index, {
          ...this.images[index],
          
          
        });
      },
    },
  };
  </script>
  
  <style scoped>
  ::selection {
    background-color: #FF78FE; /* Set the background color when text is selected */
    color: white; /* Set the text color when text is selected */
}
  .photobanner {
    
    width: 100%;

    overflow: hidden;
    
  }
  
  .slider {
    display: flex;
    background:  black;
    animation: bannermove 67s linear infinite;
    
  }
  
  @keyframes bannermove {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-8640px + 100%));
    }
  }

  .photobanner img {
    height: 104px;

    width: auto;
    
    background:  black;
    
    display: flex;
    padding: 20px;


  }
  </style>
  
  