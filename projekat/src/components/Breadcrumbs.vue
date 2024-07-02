<template>
    <nav class="breadcrumbs">
      <ul>
        <li><router-link to="/">{{ $t('nav.home') }}</router-link></li>
        <li v-for="crumb in breadcrumbs" :key="crumb.path">
          <span class="separator"> > </span>
          <router-link :to="crumb.path">{{ $t(`crumbs.${crumb.name}`) }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  
  
  <script>
  export default {
  name: 'Breadcrumbs',
  computed: {
    breadcrumbs() {
      const breadcrumbs = [];
      let path = '';
      
      this.$route.matched.forEach((route, index) => {
        path += index === 0 ? '/' : `/${this.$route.params[route.path.split('/').pop().slice(1)] || ''}`;
        
        if (route.name) {
          breadcrumbs.push({
            name: this.formatName(route.name),
            path: path
          });
        }
      });
      
      return breadcrumbs;
    }
  },
  methods: {
    formatName(name) {
      // Your existing formatName method or a new one to format component names
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
};
  </script>
  
  <style scoped>
.breadcrumbs {
  position: fixed;
  top: 115px; /* Adjust this value to position it right under your navigation */
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 10px 20px;
  width: 100%;
  box-sizing: border-box;
  z-index: 998; /* Make sure this is less than your main navigation z-index */
}

.breadcrumbs ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
}

.breadcrumbs li {
  display: inline;
  font-size: 1em;
  margin-right: 10px;
}

.breadcrumbs a {
  color: #ffffff;
  text-decoration: none;
  padding: 5px 10px;
  background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.breadcrumbs a:hover {
  color: #fa0202;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  background: none;
  -webkit-text-fill-color: inherit;
}

.separator {
  color: #ffffff;
  margin: 0 5px;
}
</style>