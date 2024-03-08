<template>
	<div>
	  <h1 class="tt">404 </h1>
	  <h2 class="not-found-text">Not Found</h2>
	  
	</div>
  </template>
  
  <script>
  export default {
	name: 'NotFound'
  }
  </script>
  
  <style scoped>
  *{
	background: black;
  }
div {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Take up the full viewport height */
}@media (min-width: 1000px) {


/* h1 element styling */
.tt {
  font-size: 300px;
  font-family: "Canela Trial", sans-serif;
  rotate: 180deg;
  color: #FF78FE;
  margin: 0; /* Remove default margin */
}}
@media (max-width: 1000px) {
	.tt {
  font-size: 140px;
  font-family: "Canela Trial", sans-serif;
  rotate: 180deg;
  color: #FF78FE;
  margin: 0; /* Remove default margin */
}}
.not-found-text {
  font-size: 20px;
  font: 800;
  position: absolute;
  color: #FF78FE;
  font-family: "PP Neue Montreal", sans-serif;
  transform: rotate(180deg); /* Rotates the text 90 degrees counterclockwise */
  transform-origin: top ; /* Sets the point of rotation at the top left of the element */
  margin-bottom: 5cm;
  margin-top: -30px; /* Adjusts the position to move closer to the 404 */
}

  </style>
  