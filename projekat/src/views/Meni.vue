<template>
<div class="meni">
    <section class="top-dishes">
        <h2>Predjela </h2>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Prolecne Rolnice</h3>
                <p class="price">300</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Miso Supa</h3>
                <p class="price">450</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Edamame</h3>
                <p class="price">100</p>
            </div>
        </div>
    </section>
        <section class="top-dishes">
        <h2>Glavna Jela</h2>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Kung Pao Piletina</h3>
                <p class="price">1500</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Slatko Ljuta Piletina</h3>
                <p class="price">1000</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Lo Mein</h3>
                <p class="price">800</p>
            </div>
        </div>
    </section>

    <section class="top-dishes">
        <h2>Dezerti</h2>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Pohovani Sladoled</h3>
                <p class="price">289</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Pohovana Banana sa Cokoladom</h3>
                <p class="price">300</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Misandao</h3>
                <p class="price">199</p>
            </div>
        </div>
    </section>
    <section class="top-dishes">
          <h2>Pića </h2>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Zeleni Čaj</h3>
                <p class="price">2000</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Voda</h3>
                <p class="price">1</p>
            </div>
        </div>
        <div class="dish">
            <div class="dish-box">
                <img src="../assets/has.jpg" >
                <h3>Sake</h3>
                <p class="price">420</p>
            </div>
        </div>
    </section>  
    

</div>
</template>

<style scoped>
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
    background: linear-gradient(90deg, #28a745, #008000, #28a745); /* Brighter green gradient for titles */
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
    height: auto;
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




<script>
export default {
    name: "Meni",
    created(){
    if(localStorage.getItem("allDishes")==null){
        this.allDishes = [
            {ime: "Kung Pao Piletina", tip: "g", cena: "1500", ocena: "0"},
            {ime: "Slatko Ljuta Teletina", tip: "g", cena: "1000", ocena: "0"},
            {ime: "Lo Mein", tip: "g", cena: "800", ocena: "0"},

            {ime: "Prolecne Rolnice", tip: "p", cena: "300", ocena: "0"},
            {ime: "Miso supa", tip: "p", cena: "450", ocena: "0"},
            {ime: "Edamame", tip: "p", cena: "100", ocena: "0"},

            {ime: "Pohovani Sladoled", tip: "d", cena: "289", ocena: "0"},
            {ime: "Pohovana Banana sa Cokoladom", tip: "d", cena: "300", ocena: "0"},
            {ime: "Misandao", tip: "d", cena: "199", ocena: "0"},

            {ime: "Zeleni Caj", tip: "pice", cena: "2000", ocena: "0"},
            {ime: "Voda", tip: "pice", cena: "1", ocena: "0"},
            {ime: "Sake", tip: "pice", cena: "420", ocena: "0"},]

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
           allDishes: []
        }
    }
    
}
</script>