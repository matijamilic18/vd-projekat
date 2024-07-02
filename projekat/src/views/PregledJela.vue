<template>
    <div class="sve">
        <h2 class="section-title">{{ $t(`menu.dishes.${this.currDish.ime}`) }}</h2>
        <div class="dish">
            <div class="dish-box">
                <img :src="'/images/photo' + this.currDish.slikaIndex" alt="Dish Image">
                <p class="rating">{{ $t('dish.rating') }} {{ (this.currDish.score / this.currDish.brOcena).toFixed(2) }}/5</p>
                <div class="price">
                    <input type="radio" id="cenaV" value="velika" v-model="IzabranaPorcija">
                    <label for="cenaV">{{ $t('dish.largePortionPrice') }}{{this.currDish.cenaV}}din</label>
                </div>
                <div class="price">
                    <input type="radio" id="cenaM" value="mala" v-model="IzabranaPorcija" checked>
                    <label for="cenaM">{{ $t('dish.smallPortionPrice') }}{{this.currDish.cenaM}}din</label>
                </div>
                <div class="quantity">
                    <label for="kolicina">{{ $t('dish.chooseQuantity') }}</label>
                    <input type="number" id="kolicina" v-model="kolicina" min="1" max="10">
                </div>
                <button class="order-button" @click="add()">{{ $t('dish.addToCart') }}</button>
            </div>
        </div>
        <div class="rate-dish">
            <h3>{{ $t('dish.rateDish') }}</h3>
            <select v-model="userRating">
                <option v-for="n in 5" :key="n" :value="n">{{ n }}</option>
            </select>
            <button class="rate-button" @click="addRating()">{{ $t('dish.addRating') }}</button>
        </div>

        <section class="download-section">
      <button class="download-button" @click="downloadPDF()">pdf</button>
    </section>
        
       


    </div>
</template>
<script>
export default {
    name: 'PregledJela',

    created() {
        this.currDish = JSON.parse(localStorage.getItem('currDish'));
        this.korpa = JSON.parse(localStorage.getItem('korpa'));
        this.allDishes= JSON.parse(localStorage.getItem('allDishes'));

    },

    data() {
        return {
            currDish: null,
            IzabranaPorcija: 'mala', // Default to 'mala' (Cena Male Porcije)
            kolicina: 1, // Default quantity
            userRating: 1 ,// Default rating
            korpa: [],
            allDishes: [],
            price: 0,
        };
    },
    
    methods: {
        addRating() {
            let index = this.allDishes.findIndex(dish => dish.ime == this.currDish.ime)
            
         
            this.allDishes[index].brOcena +=1
            this.allDishes[index].score += this.userRating

            localStorage.setItem('allDishes', JSON.stringify(this.allDishes))

            this.currDish = this.allDishes[index]
            localStorage.setItem('currDish', JSON.stringify(this.allDishes[index]))
            
        }, 
        add()
        {   
            if(this.IzabranaPorcija == 'mala')
            {
                this.price = parseInt(this.currDish.cenaM)* this.kolicina
            }
            else{
                this.price = parseInt(this.currDish.cenaV) * this.kolicina
            }
            let item = {imeJela: this.currDish.ime, porcija: this.IzabranaPorcija,  kolicina: this.kolicina, cena: this.price, slikaIndex: this.currDish.slikaIndex}
            this.korpa.push(item)
            localStorage.setItem('korpa', JSON.stringify(this.korpa))
            this.$router.push('/mojnalog')
        },
        getImageUrl(index) {
            return `/images/photo${index}`;
        }, 
        downloadPDF() {
        const link = document.createElement('a');
        link.href = '/ZmajevaPalataJelovnik.pdf';
        link.download = 'ZmajevaPalataJelovnik.pdf';
        link.click();
    }
    }
};
</script>

<style scoped>

.download-section {
  text-align: center;
  margin-top: 20px;
}

.download-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.download-button:hover {
  background-color: darkred;
}
/* Scoped styles for the component */
.sve {
    color: #ff0000; /* Reddish color */
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
}

/* Button styling */
.order-button, .rate-button {
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

.order-button:hover, .rate-button:hover {
    background-color: #d62800; /* Darker reddish color on hover */
    transform: translateY(-2px);
}

.order-button:active, .rate-button:active {
    background-color: #bf2400; /* Even darker reddish color on click */
    transform: translateY(0);
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

.dish-box h3, .price{
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100); /* Red gradient text color */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.quantity {
    margin: 10px 0;
    text-align: center;
}

.quantity label {
    margin-right: 10px;
     word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100); /* Red gradient text color */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.quantity input {
    width: 60px;
    padding: 5px;
    border: 2px solid #f73100;
    border-radius: 5px;
    text-align: center;
    font-size: 1em;
}

.rate-dish {
    margin-top: 30px;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
}

.rate-dish h3 {
    color: #ffffff;
    margin-bottom: 10px;
}

.rate-dish select {
    padding: 5px;
    margin-right: 10px;
    font-size: 1em;
    border-radius: 5px;
    border: 2px solid #f73100;
    background-color: #fff;
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
</style>
