<template>
<div>
    {{this.korpa.ime}}
    
</div>
    
</template>


<script>
export default {
    name: 'MojNalog',

    created() {
        this.korpa = JSON.parse(localStorage.getItem('korpa'));
    },

    data() {
        return {
            currDish: null,
            IzabranaPorcija: 'mala', // Default to 'mala' (Cena Male Porcije)
            kolicina: 1, // Default quantity
            userRating: 1 ,// Default rating
            korpa: [],
            price: 0,
        };
    },
    
    
        
};
</script>