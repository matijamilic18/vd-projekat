<template>
<div>
  
  <nav class="navbar">
      <div id = "nav">
          <router-link to="/"><img src="./assets/jzma.png" class = "logo"></router-link>
          <router-link to="/"><h1 class="naziv">{{ $t('name') }}</h1></router-link>
      </div>
  </nav>
  <nav class="breadcrumb-nav">
        <ul>
            <li class="ne"> | </li>
            <li><a href="/">{{ $t('nav.home') }}</a></li>
            <li class="line"> | </li>
            <li class="dropdown">
                <router-link to="/meni"><a href="#">{{ $t('nav.menu') }}</a></router-link>
                <ul class="dropdown-content">
                    <router-link to="/predjela"><li><a href="#">{{ $t('nav.appetizers') }}</a></li></router-link>
                    <router-link to="/glavnajela"><li><a href="#">{{ $t('nav.mainCourses') }}</a></li></router-link>
                    <router-link to="/dezerti"><li><a href="#">{{ $t('nav.desserts') }}</a></li></router-link>
                    <router-link to="/pica"><li><a href="#">{{ $t('nav.drinks') }}</a></li></router-link>
                    
                </ul>
            </li>
            <li class="line"> | </li>
            <router-link to="/galerija">
                <li><a href="#">{{ $t('nav.gallery') }}</a></li>
            </router-link>
            
            <li class="line"> | </li>
            <li><a href="#">{{ $t('nav.myAccount') }}</a></li>
            <li class="line"> | </li>
            <router-link to="/about">
                <li><a href="#" >{{ $t('nav.aboutUs') }}</a></li>
            </router-link>
            
            <li class="line"> | </li>
            <li class="language-switcher">
                <button @click="toggleLanguageMenu" class="language-button">
                {{ currentLanguage }}
                </button>
                <ul v-if="showLanguageMenu" class="language-menu">
                    <li @click="changeLanguage('en')">English</li>
                    <li @click="changeLanguage('sr')">Srpski</li>
                </ul>
            </li>
            <li class="line"> | </li>
        </ul>
  </nav>
  <Breadcrumbs />
  <div class="main-content">
    <router-view/>
  </div>
  
   <footer> 
      <div class="footer-bottom">
      <p>  {{ $t('footer.copyright') }} </p>
      </div>
  </footer>


  

</div>
  
</template>


<script>
import Breadcrumbs from './components/Breadcrumbs.vue'

export default {
  name: 'App',
  components: {
    Breadcrumbs
  },
  watch: {
    '$i18n.locale'(newLocale) {
    document.querySelector('html').setAttribute('lang', newLocale)
    localStorage.setItem('userLanguage', newLocale)
  }
  },
  data() {
    return {
      showLanguageMenu: false
    }
  },
  computed: {
    currentLanguage() {
      return this.$i18n.locale === 'en' ? 'English' : 'Srpski'
    }
  },
  methods: {
    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu
    },
    changeLanguage(lang) {
    this.$i18n.locale = lang
    console.log('Current locale:', this.$i18n.locale)
    this.showLanguageMenu = false
    localStorage.setItem('userLanguage', lang)
  }
  },
  created() {
    const savedLanguage = localStorage.getItem('userLanguage')
    if (savedLanguage) {
      this.$i18n.locale = savedLanguage
    }
  }
}
</script>

<style>

.main-content {
  margin-top: 130px; /* Adjust this value to be below your fixed elements */
  padding: 20px;
}

/* Navbar (above breadcrumb-nav) */
#nav {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1000;
}

.ne{
    color:black;
}
/* Breadcrumb navigation (below navbar) */
.breadcrumb-nav {
    background-color: rgb(0, 0, 0);
    padding: 10px 20px;
    position: fixed;
    top: 50px; /* Adjust this value based on the height of #nav */
    width: 100%;
    z-index: 999;
}

/* Ensure content is below fixed elements */
body {
    padding-top: 100px; /* Adjust this value based on combined height of #nav and .breadcrumb-nav */
    padding-bottom: 50px; /* Adjust this value based on the height of your footer */
}

/* Footer at the bottom */
footer {
    font-weight: 200;
    background: #000000;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    color: #fff;
    bottom: 0;
    position: fixed;
    width: 100%;
    z-index: 1000;
}

/* Additional styling for footer content */
.footer-bottom {
    width: 100%;
    padding: 3px 0;
    text-align: center;
}

.footer-bottom p {
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.line {
    color: #ffffff;
    opacity: 0.5;
}

/* Existing CSS rules */

/* Adjustments to existing rules for your specific layout */
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
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
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

#menu {
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

body {
    background-image: url('./assets/bck2.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    background-attachment: fixed;
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Arial, sans-serif;
}

.naziv {
    text-align: center;
}

.logo {
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

.breadcrumb-nav .dropdown {
    position: relative;
}

.breadcrumb-nav .dropdown-content {
    display: none;
    position: absolute;
    background-color: black;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    top: 100%; 
    left: 50%; 
    transform: translateX(-50%);
}

.breadcrumb-nav .dropdown-content li {
    padding: 12px 16px;
}

.breadcrumb-nav .dropdown-content li a {
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

.breadcrumb-nav .dropdown-content li a:hover {
    color: #fa0202; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background: none;
    -webkit-text-fill-color: inherit;
}

.breadcrumb-nav .dropdown:hover .dropdown-content {
    display: block;
}

.language-switcher {
  position: relative;
  display: flex;
  align-items:baseline;
}

.language-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-size: 1.2em;
  background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  transition: text-shadow 0.3s ease;
}

.language-button:hover {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.language-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
  border: 1px solid #444;
  border-radius: 4px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  z-index: 1000;
  min-width: 120px;
}

.language-menu li {
  padding: 10px;
  cursor: pointer;
  color: white;
  transition: background-color 0.3s ease;
}

.language-menu li:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
