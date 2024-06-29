<template>
<div>
  <nav class="navbar">
      <div id = "nav">
          <router-link to="/"><img src="./assets/jzma.png" class = "logo"></router-link>
          <router-link to="/"><h1 class="naziv">si djin ping</h1></router-link>
      </div>
  </nav>
  <nav class="breadcrumb-nav">
        <ul>
            <li class="line"> | </li>
            <li><a href="#home">Home</a></li>
            <li class="line"> | </li>
            <li><a href="#section1">Section 1</a></li>
            <li class="line"> | </li>
            <li><a href="#section2">Section 2</a></li>
            <li class="line"> | </li>
            <li><a href="#section3">Section 3</a></li>
            <li class="line"> | </li>
        </ul>
  </nav>
  

   <footer> 
      <div class="footer-bottom">
      <p>  „Copyright 2024, Матија Милић/Лазар Крповић, Одсек за софтверско инжењерство Електротехничког факултета Универзитета у Београду“ </p>
      </div>
  </footer>


  <router-view/>

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

.line{
  color: #ffffff;
  opacity: 0.5;
}



.breadcrumb-nav {
    background-color: rgb(0, 0, 0);
    padding: 10px 20px;
}

.breadcrumb-nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between; 
    align-items: center;
}

.breadcrumb-nav li {
    position: relative;
    padding: 0 10px; 

}



.breadcrumb-nav a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 5px 10px;
    display: block;
    position: relative;
    font-size: 1.2em;
    background: linear-gradient(90deg, #f73100, #9b2424);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.breadcrumb-nav a:hover {
    color: #fa0202; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background: none;
    -webkit-text-fill-color: inherit; 
}



#menu{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

body{
  background-image: url('./assets/bck2.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: Arial, sans-serif;
}

#nav {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

}

.naziv{
  text-align: center;
}

.logo{
  height: 50px; 
  position: absolute;
  left: 20px;
  top: 10%;
}



#nav a {
  font-weight: bold;
  color: #ff0000;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #ff0000;

}
</style>
