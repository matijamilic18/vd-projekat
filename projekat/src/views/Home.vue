<template>
  <div class="home">
   
    <router-link to ="/about">
  <button>
    dugme
  </button>
  </router-link>
  <footer> 
      <div class="footer-bottom">
      <p>  „Copyright 2024, Матија Милић/Лазар Крповић, Одсек за софтверско инжењерство Електротехничког факултета Универзитета у Београду“ </p>
      </div>
  </footer>
  </div>
</template>


<style>
footer{
  font-weight: 200;
  background: #111;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  color: #fff;
  bottom: 0;
  position: fixed
}

.footer-bottom{
  width: 100vw;
  padding: 3px 0;
  text-align: center;
  
}
.footer-bottom p{
  font-size: 14;
  word-spacing: 2px;
  text-transform: capitalize;
  background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
}
</script>
