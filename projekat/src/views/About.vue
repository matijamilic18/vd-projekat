<template>
  <div class="about-page-wrapper">
    <div class="about-page">
      <div class="content">
        <h1>O Nama</h1>
        <p>
          "Zmajeva Palata" je rezultat desetogodišnjeg putovanja dvojice prijatelja kroz Kinu. Lazar i Matija, 
          zaljubljenici u kulinarske avanture, proveli su od 2005. do 2015. godine učeći od kineskih majstora kuvara.
        </p>
        <p>
          Po povratku u Beograd, odlučili su da podele svoja iskustva kroz autentičnu kinesku kuhinju. Naš restoran 
          kombinuje tradicionalne recepte iz raznih kineskih provincija sa svežim, lokalnim sastojcima.
        </p>
        <p>
          Od pekinga do Sičuana, svako jelo u "Zmajevoj Palati" ima svoju priču. Naši kuvari, obučeni direktno od 
          Lazara i Matije, pažljivo pripremaju svaki obrok koristeći autentične tehnike i začine.
        </p>
        <p>
          Pozivamo vas da doživite bogatstvo kineske kuhinje u srcu Jakova. Bilo da ste ljubitelj pikantnih 
          sičuanskih jela ili preferirate suptilne ukuse kantonske kuhinje, kod nas ćete pronaći nešto za svoj ukus.
        </p>
        
        <h2>Kontakt Informacije</h2>
        <ul>
          <li>Adresa: Oslobodjenja  38, 11000 Beograd</li>
          <li>Telefon: 011 123-4567</li>
          <li>Email: info@zmajeva-palata.rs</li>
          <li>Radno vreme: 
            <ul>
              <li>Ponedeljak - Petak: 11:00 - 23:00</li>
              <li>Subota - Nedelja: 12:00 - 00:00</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="map">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2833.6121498577218!2d20.25528539050972!3d44.74792900636266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6bc1a9871317%3A0x1bfe73e5d9009ece!2sOslobo%C4%91enja%2038%2C%20Jakovo!5e0!3m2!1sen!2srs!4v1719759697282!5m2!1sen!2srs" 
        width="600" 
        height="450" 
        style="border:0;" 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about-page-wrapper {

  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-page {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  margin: 20px;
}

.content {
  flex: 1;
  padding-right: 300px;
  padding-left: 150px;
}

h1, h2 {
  color: #f73100;
  font-family: 'Arial', sans-serif;
}

p, ul {
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
}

ul {
  list-style-type: none;
  padding-left: 0;
}

.map {
  flex: 0 0 500px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;
  margin-top:100px;
  margin-right: 250px;
}

iframe {
  width: 100%;
  height: 100%;
}
</style>