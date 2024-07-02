<template>
    <div class="menu">
      <section class="top-dishes">
        <h2>{{ $t('menu.desserts') }}</h2>
  
        
        <div class="search-bar">
          <input type="text" v-model="searchText" :placeholder="$t('menu.searchPlaceholder')" />
          <button class="order-button" @click="searchDishes">{{ $t('menu.searchButton') }}</button>
        </div>
  
        
        <div class="sorting-buttons">
          <button class="order-button" @click="sortBy('name')">{{ $t('menu.sortByName') }}</button>
          <button class="order-button" @click="sortBy('price')">
            {{ $t('menu.sortByPrice') }}
            <span v-if="sort_by === 'price'" class="arrow-icon">
              <i :class="{ 'fas fa-arrow-up': !sortDesc, 'fas fa-arrow-down': sortDesc }"></i>
            </span>
          </button>
        </div>
  
        
        <div class="dish" v-for="d of sortedDishes" :key="d.ime" @click="fun(d)">
          <div class="dish-box">
            <img :src="'/images/photo' + d.slikaIndex" alt="Dish Image">
            <h3>{{ $t(`menu.dishes.${d.ime}`) }}</h3>
            <p class="price">{{ $t('menu.rating') }}: {{ (d.score / d.brOcena).toFixed(2) }}/5</p>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dezerti",
    created(){
        if (localStorage.getItem("allDishes") == null) {
            this.allDishes = [
         { ime: "springRolls", tip: "p", cenaV: "300", cenaM: "200", score: 0, slikaIndex: "1.jpg", promocija: "d", brOcena: 0 },
        { ime: "misoSoup", tip: "p", cenaV: "450", cenaM: "350", score: 0, slikaIndex: "2.jpg", promocija: "n", brOcena: 0 },
        { ime: "edamame", tip: "p", cenaV: "100", cenaM: "50", score: 0, slikaIndex: "3.jpg", promocija: "n" , brOcena: 0},
        { ime: "kungPaoChicken", tip: "g", cenaV: "1500", cenaM: "1000", score: 0, slikaIndex: "4.jpg", promocija: "d" , brOcena: 0},
        { ime: "sweetSpicyBeef", tip: "g", cenaV: "1000", cenaM: "900", score: 0, slikaIndex: "5.jpg", promocija: "n" , brOcena: 0},
        { ime: "loMein", tip: "g", cenaV: "800", cenaM: "400", score: 0, slikaIndex: "6.jpg", promocija: "n" , brOcena: 0},
        { ime: "friedIceCream", tip: "d", cenaV: "289", cenaM: "189", score: 0, slikaIndex: "7.jpg", promocija: "d" , brOcena: 0},
        { ime: "friedBananaChocolate", tip: "d", cenaV: "300", cenaM: "200", score: 0, slikaIndex: "8.jpg", promocija: "d" , brOcena: 0},
        { ime: "misandao", tip: "d", cenaV: "100", cenaM: "50", score: 0, slikaIndex: "9.jpg", promocija: "n", brOcena: 0 },
        { ime: "greenTea", tip: "pice", cenaV: "100", cenaM: "50", score: 0, slikaIndex: "10.jpg", promocija: "n" , brOcena: 0},
        { ime: "water", tip: "pice", cenaV: "100", cenaM: "50", score: 0, slikaIndex: "11.jpg", promocija: "n" , brOcena: 0},
        { ime: "sake", tip: "pice", cenaV: "100", cenaM: "50", score: 0, slikaIndex: "12.jpg", promocija: "n" , brOcena: 0},
      ];
      localStorage.setItem("allDishes", JSON.stringify(this.allDishes));
    } else {
      this.allDishes = JSON.parse(localStorage.getItem("allDishes"));
    }
    },
    data(){
        return{
            ime: '',
            cena: '',
            tip: '', /* g=glavno jelo, d=dezert, p=predjelo, pice=pice*/
            ocena: '',
            slikaIndex: '',
            promocija: '',
            allDishes: [],
            searchText: '',
            sort_by: '', 
            sortDesc: false, 
        }
    },
    computed: {
      filteredDishes() {
        let filtered = this.allDishes.filter(dish => dish.tip === "d");
  
        if (this.searchText) {
          filtered = filtered.filter(dish =>
            this.dishMatchesSearch(dish)
          );
        }
  
        return filtered;
      },
      sortedDishes() {
        let sorted = this.filteredDishes.slice();
  
        if (this.sort_by === 'name') {
          sorted.sort((a, b) => {
            let nameA = this.$t('menu.dishes.' + a.ime).toLowerCase();
            let nameB = this.$t('menu.dishes.' + b.ime).toLowerCase();
            return nameA.localeCompare(nameB);
          });
        } else if (this.sort_by === 'price') {
          sorted.sort((a, b) => {
            if (!this.sortDesc) {
              return a.cenaV - b.cenaV;
            } else {
              return b.cenaV - a.cenaV;
            }
          });
        }
  
        return sorted;
      }
    },
    methods:{
        fun(d){           
            let curr = {ime: d.ime, tip: d.tip, cenaV: d.cenaV, cenaM: d.cenaM, score: d.score, brOcena: d.brOcena, slikaIndex: d.slikaIndex, promocija: d.promocija}
            localStorage.setItem('currDish', JSON.stringify(curr))
            this.$router.push('pregledjela')
        },
        sortBy(criteria) {
            if (this.sort_by === criteria) {
            this.sortDesc = !this.sortDesc; 
            } else {
            this.sort_by= criteria;
            this.sortDesc = false; 
            }
        },
        searchDishes() {
            
        },
        dishMatchesSearch(dish) {
            let serbianName = this.$t('menu.dishes.' + dish.ime);
            let englishName = dish.ime.toLowerCase();
            let searchText = this.searchText.toLowerCase();
  
        
        return serbianName.toLowerCase().includes(searchText) || englishName.includes(searchText) || dish.cenaV.toString().includes(searchText);
      }
    }
}
</script>

<style scoped>
/* Button styling */
.order-button {
    background-color: #f73100; /* Reddish color */
    color: #ffffff; /* White text */
    border: none;
    padding: 10px 20px;
    font-size: 1em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-right: 10px; 
  }
  
  .order-button:hover {
    background-color: #d62800; 
    transform: translateY(-2px);
  }
  
  .order-button:active {
    background-color: #bf2400;
    transform: translateY(0);
  }
  
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }
  
  .header {
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 20px 0;
  }
  
  h1, h2, h3 {
    margin: 10px 0;
  }
  
  h2 {
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #ffffff, #ffffff, #ffffff); 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .top-dishes {
    margin: 20px;
    padding: 20px;
    text-align: center;
  }
  
  .dish {
    display: inline-block;
    margin: 20px;
    text-align: center;
  }
  
  .dish-box {
    background-color: rgba(0, 0, 0, 0.7); 
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    display: inline-block;
    transition: transform 0.3s;
    position: relative;
    overflow: hidden;
  }
  
  .dish-box img {
    width: 200px;
    height: 150px;
    border-radius: 8px;
    border: 2px solid #fff;
    padding: 10px;
  }
  
  .dish-box:hover {
    transform: scale(1.05);
  }
  
  .dish-box:hover h3, .dish-box:hover .price {
    color: #fa0202; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background: none;
    -webkit-text-fill-color: inherit; 
  }

  .dish-box h3, .price {
  word-spacing: 2px;
  text-transform: capitalize;
  background: linear-gradient(90deg, #f73100, #9b2424, #f73100); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

  @keyframes hover-underline-animation {
0% {
transform: scaleX(0);
transform-origin: 0 0;
}
100% {
transform: scaleX(1);
transform-origin: 0 0;
}
}

.dish-box:hover::after {
content: '';
position: absolute;
bottom: 0;
left: 0;
width: 100%;
height: 2px;
background-color: #fa0202; 
transform: scaleX(0);
transform-origin: 0 0;
transition: transform 0.3s;
animation: hover-underline-animation 0.3s forwards;
}


.search-bar {
margin-bottom: 20px; 
}

.search-bar input[type="text"] {
padding: 10px;
border: 1px solid #ccc;
border-radius: 5px;
font-size: 1em;
width: 300px;
}

.search-bar button {
background-color: #f73100; 
color: #ffffff; 
border: none;
padding: 10px 20px;
font-size: 1em;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-transform: uppercase;
cursor: pointer;
border-radius: 5px;
transition: background-color 0.3s ease, transform 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin-left: 10px; 
}

.search-bar button:hover {
background-color: #d62800; 
transform: translateY(-2px);
}

.search-bar button:active {
background-color: #bf2400; 
transform: translateY(0);
}


.sorting-buttons {
margin-bottom: 20px; 
}

.sorting-buttons button {
background-color: #f73100; 
color: #ffffff; 
border: none;
padding: 10px 20px;
font-size: 1em;
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
text-transform: uppercase;
cursor: pointer;
border-radius: 5px;
transition: background-color 0.3s ease, transform 0.3s ease;
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
margin-right: 10px; 
}

.sorting-buttons button:hover {
background-color: #d62800; 
transform: translateY(-2px);
}

.sorting-buttons button:active {
background-color: #bf2400;
transform: translateY(0);
}
</style>