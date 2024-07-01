<template>
<div class="meni">
    
    <section class = "top-dishes" >
        
        <h2>Glavna Jela </h2>
        <div class="dish" v-for="d of filterGlavnaJela" :key="d.ime">
            <div class="dish-box">
            <img :src="'/images/photo' +d.slikaIndex" alt="Dish Image">
                <h3>{{d.ime}}</h3>              
                <p class="price">Cena:{{d.cena}}din</p>
                <p class="price">Ocena:{{d.ocena}}/5</p>
                <button class="order-button">Naruči</button>

            </div>
        </div>

    
    </section>


</div>
</template>
<script>
export default {
    name: "Meni",
    created(){
    if(localStorage.getItem("allDishes")==null){
        this.allDishes = [
            {ime: "Prolecne Rolnice", tip: "p", cena: "300", ocena: "0", slikaIndex: "1.jpg"},
            {ime: "Miso supa", tip: "p", cena: "450", ocena: "0", slikaIndex: "2.jpg"},
            {ime: "Edamame", tip: "p", cena: "100", ocena: "0", slikaIndex: "3.jpg"},


            {ime: "Kung Pao Piletina", tip: "g", cena: "1500", ocena: "0", slikaIndex: "4.jpg"},
            {ime: "Slatko Ljuta Teletina", tip: "g", cena: "1000", ocena: "0", slikaIndex: "5.jpg"},
            {ime: "Lo Mein", tip: "g", cena: "800", ocena: "0", slikaIndex: "6.jpg"},

            

            {ime: "Pohovani Sladoled", tip: "d", cena: "289", ocena: "0", slikaIndex: "7.jpg"},
            {ime: "Pohovana Banana sa Cokoladom", tip: "d", cena: "300", ocena: "0", slikaIndex: "8.jpg"},
            {ime: "Misandao", tip: "d", cena: "199", ocena: "0", slikaIndex: "9.jpg"},

            {ime: "Zeleni Caj", tip: "pice", cena: "2000", ocena: "0", slikaIndex: "10.jpg"},
            {ime: "Voda", tip: "pice", cena: "1", ocena: "0", slikaIndex: "11.jpg"},
            {ime: "Sake", tip: "pice", cena: "420", ocena: "0", slikaIndex: "12.jpg"},]

            localStorage.setItem = ("allDishes", JSON.stringify(this.allDishes))
    }
    else{
        this.allDishes=JSON.parse(localStorage.getItem("allDishes"))
    }
    },
    data(){
        return{
            ime: '',
            cena: '',
            tip: '', /* g=glavno jelo, d=dezert, p=predjelo, pice=pice*/
            ocena: '',
            slikaIndex: '',
           
            allDishes: []
        }
    },
    computed: {
      filterGlavnaJela() {
        return this.allDishes.filter(dish => dish.tip == "g");
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
}

.order-button:hover {
    background-color: #d62800; /* Darker reddish color on hover */
    transform: translateY(-2px);
}

.order-button:active {
    background-color: #bf2400; /* Even darker reddish color on click */
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
    background: linear-gradient(90deg, #ffffff, #ffffff, #ffffff); /* Brighter green gradient for titles */
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

.dish-box{
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

.dish-box:hover h3, .dish-box:hover .price
 {
    color: #fa0202; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    background: none;
    -webkit-text-fill-color: inherit; 
}

.dish-box h3,  .price {
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100); /* Red gradient text color */
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
    background-color:#fa0202; 
    transform: scaleX(0);
    transform-origin: 0 0;
    transition: transform 0.3s;
    animation: hover-underline-animation 0.3s forwards;
}






</style>




