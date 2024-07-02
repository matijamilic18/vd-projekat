<template>
    <div class="account-page">
        <div v-if="korpa.length > 0">
            <div class="item" v-for="(item, index) in korpa" :key="'korpa-' + index">
                <img :src="'/images/photo' + item.slikaIndex" alt="Dish Image" class="item-image">
                <div class="item-details">
                    <p class="item-name">{{ $t(`menu.dishes.${item.imeJela}`) }}</p>
                    <p class="item-portion">{{ $t(`item.porcija`) }}{{ $t(`item.${item.porcija}`) }}</p>
                    <p class="item-quantity">{{ $t(`item.kolicina`) }}{{ item.kolicina }}</p>
                    <p class="item-price">{{ $t(`item.cena`) }}{{ item.cena }} din</p>
                </div>
                <button class="remove-button" @click="removeItem(index, 'korpa')">X</button>
            </div>
            <div class="total-price">
                <h3 style="color: #4CAF50;">{{ $t(`item.ukupnaCena`) }}{{ totalPrice }} din</h3>
                <button class="order-button" @click="placeOrder">{{ $t(`item.order`) }}</button>
            </div>
        </div>
        <div v-else>
            <p>{{$t(`empty`)}}</p>
        </div>

        <div class="ordered-items">
            <h2 class="section-title">{{$t(`naruceno`)}}</h2>
            <div v-for="(order, index) in orderedItems" :key="'order-' + index">
                <div class="order" v-for="(item, itemIndex) in order.items" :key="'item-' + itemIndex">
                    <div class="ordered-item">                    
                        <p class="item-name">{{ $t(`menu.dishes.${item.imeJela}`) }}</p>
                        <p class="item-portion">{{ $t(`item.porcija`) }}{{ $t(`item.${item.porcija}`) }}</p>
                        <p class="item-quantity">{{ $t(`item.kolicina`) }}{{ item.kolicina }}</p>
                        <p class="item-price">{{ $t(`item.cena`) }}{{ item.cena }} din</p>
                    </div>
                </div>
                <div class="order-separator"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MojNalog',

    created() {
        const storedKorpa = localStorage.getItem('korpa');
        if (storedKorpa) {
            this.korpa = JSON.parse(storedKorpa);
        }

        const storedOrderedItems = localStorage.getItem('orderedItems');
        if (storedOrderedItems) {
            this.orderedItems = JSON.parse(storedOrderedItems);
        }
    },

    data() {
        return {
            korpa: [],
            orderedItems: []
        };
    },

    computed: {
        totalPrice() {
            return this.korpa.reduce((total, item) => total + (item.cena * item.kolicina), 0);
        }
    },

    methods: {
        removeItem(index, type) {
            if (type === 'korpa') {
                this.korpa.splice(index, 1);
                localStorage.setItem('korpa', JSON.stringify(this.korpa));
            } else if (type === 'orderedItems') {
                this.orderedItems.splice(index, 1);
                localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
            }
        },

        placeOrder() {
            // Move items from korpa to orderedItems
            const order = {
                items: [...this.korpa],
                
            };
            this.orderedItems.unshift(order); // Add new order at the beginning of the array
            // Clear korpa
            this.korpa = [];
            localStorage.setItem('korpa', JSON.stringify(this.korpa));
            localStorage.setItem('orderedItems', JSON.stringify(this.orderedItems));
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
.account-page {
    color: #ff0000; /* Reddish color */
    font-size: 1.5em;
    margin-bottom: 20px;
    text-align: center;
}

.section-title {
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #ffffff, #ffffff, #ffffff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.item {
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    transition: transform 0.3s;
    position: relative;
    overflow: hidden;
}

.item-image {
    width: 80px; /* Adjust width as needed */
    height: 80px; /* Adjust height as needed */
    border-radius: 8px;
    margin-right: 20px;
}

.item-details {
    flex: 1;
    text-align: left;
}

.item-name, .item-portion, .item-quantity, .item-price {
    word-spacing: 2px;
    text-transform: capitalize;
    background: linear-gradient(90deg, #f73100, #9b2424, #f73100);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    margin: 5px 0;
}

.remove-button {
    background-color: #f73100;
    color: #ffffff;
    border: none;
    padding: 5px 10px;
    font-size: 1em;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-transform: uppercase;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.remove-button:hover {
    background-color: #d62800;
    transform: translateY(-2px);
}

.remove-button:active {
    background-color: #bf2400;
    transform: translateY(0);
}

.total-price {
    background-color: rgba(0, 0, 0, 0.9);
    border-radius: 8px;
    padding: 20px;
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 300px;
    margin: 20px auto;
}

.total-price h3 {
    color: #4CAF50; /* Greenish color */
}

.order-button {
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
    margin-top: 10px;
}

.order-button:hover {
    background-color: #d62800;
    transform: translateY(-2px);
}

.order-button:active {
    background-color: #bf2400;
    transform: translateY(0);
}

.ordered-items {
    position: relative;
    top: 0;
    right: 0;
    width: 300px; /* Adjust width as needed */
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 20px;
    text-align: center;
}

.ordered-item {
    margin-bottom: 10px;
    text-align: left;
    padding-bottom: 10px;
}

.order-separator {
    width: 100%;
    height: 2px;
    background-color: #f73100; /* Bright red line */
    margin: 10px 0;
}
</style>
