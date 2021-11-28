<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.blink {
  animation:1s blinker linear infinite;
  -webkit-animation:1s blinker linear infinite;
  -moz-animation:1s blinker linear infinite;
}

@-moz-keyframes blinker
{
    0% { opacity: 1.0; }
    50% { opacity: 0.2; }
    100% { opacity: 1.0; }
}

@-webkit-keyframes blinker
{
    0% { opacity: 1.0; }
    50% { opacity: 0.2; }
    100% { opacity: 1.0; }
}

@keyframes blinker
{
    0% { opacity: 1.0; }
    50% { opacity: 0.2; }
    100% { opacity: 1.0; }
}
</style>
