<!-- ThreeColumnLayout.vue -->
<template>
    <div class="three-column-layout">
      <div class="column">Alexander Jakub Moravcik</div>
      <div class="column">Alexander Jakub Moravcik</div>
      <div class="column">Alexander Jakub Moravcik</div>
    </div>
  </template>
  
  <script>
  export default {
   
  };
  </script>
  
  <style scoped>
  /* Adjust this to your desired column width and spacing */
  .three-column-layout {
    display: flex;
    flex-wrap: wrap;
  }
  
  /* Adjust the width to control the size of each column */
  .column {
    flex-basis: 33.33%; /* 33.33% to have three equal columns */
    padding: 10px;
  }
  
  /* Apply different background colors to each column */
  .column1 {
    background-color: #ffcccb; /* Light coral */
  }
  
  .column2 {
    background-color: #98fb98; /* Pale green */
  }
  
  .column3 {
    background-color: #afeeee; /* Pale blue */
  }
  </style>  