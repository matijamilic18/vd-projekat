<template>
    <div>
       
         <h2>Predjela </h2>
        <div class="dish">
            <div class="dish-box" >
            <img :src="'/images/photo' +currDish.slikaIndex" alt="Dish Image">
                <h3>{{currDish.ime}}</h3>              
                
                <p class="price">Ocena:{{currDish.ocena}}/5</p>
               <p class="price">Cena Velike Porcije:{{currDish.cenaV}}din</p>
               <p class="price">Cena Male Porcije:{{currDish.cenaM}}din</p>
                
            </div>
        </div>
        


    </div>
</template>



<script>


export default{
    name: 'PregledJela',

    created(){
       
        this.currDish = JSON.parse(localStorage.getItem('currDish'))
    },
    data()
    {
        return{
            currDish: '',
            kolicina: '',
            IzabranaPorcija: '',
            
        }
    }
}
</script>
