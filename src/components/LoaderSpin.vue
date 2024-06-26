<template>
  <div class="loader-container">
    <div class="loader-wrapper">
      <div class="loaderStyle"></div>
      <small class="bg-dark text-light btn border-0">JOSH - BAM</small>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.loader-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.8); /* Semi-transparent background */
  z-index: 9999; /* Ensure it covers all other content */
}

.loader-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #3f8484;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.loaderStyle {
  animation: rotate 1s infinite;
  height: 50px;
  width: 50px;
  margin-bottom: 10px;
}

.loaderStyle:before,
.loaderStyle:after {
  border-radius: 50%;
  content: "";
  display: block;
  height: 20px;
  width: 20px;
}
.loaderStyle:before {
  animation: ball1 1s infinite;
  background-color: black;
  box-shadow: 30px 0 0 blue;
  margin-bottom: 10px;
}
.loaderStyle:after {
  animation: ball2 1s infinite;
  background-color: blue;
  box-shadow: 30px 0 0 black;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) scale(0.8);
  }
  50% {
    transform: rotate(360deg) scale(1.2);
  }
  100% {
    transform: rotate(720deg) scale(0.8);
  }
}

@keyframes ball1 {
  0% {
    box-shadow: 30px 0 0 blue;
  }
  50% {
    box-shadow: 0 0 0 blue;
    margin-bottom: 0;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 blue;
    margin-bottom: 10px;
  }
}

@keyframes ball2 {
  0% {
    box-shadow: 30px 0 0 black;
  }
  50% {
    box-shadow: 0 0 0 black;
    margin-top: -20px;
    transform: translate(15px, 15px);
  }
  100% {
    box-shadow: 30px 0 0 black;
    margin-top: 0;
  }
}
</style>
