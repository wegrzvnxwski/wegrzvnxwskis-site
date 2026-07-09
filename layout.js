(function () {
  function wrzucStopke() {
    const html = `
            <div class="the-veri-end">
                <small>&#x1F12F; <span id="rok"></span> Kacprowa Strona. Wszystkie prawa nie istnieją.</small>
            </div>
    `;
    const lo = document.getElementById("stopka");
    if (lo) lo.innerHTML = html;
    document.getElementById("rok").textContent = new Date().getFullYear();
  }

  function miniNavbarek() {
    const html = `
                <ul class="minimal-nav">
                    <li><a href="index" title="Strona główna" class="nav-link"><img src="images/home.png" alt="Strona główna"></a></li>
                    <li><a href="aboutme" title="O mnie" class="nav-link"><img src="images/aboutme.png" alt="O mnie"></a></li>
                    <li><a href="galeria" title="Galeria" class="nav-link"><img src="images/galeria.png" alt="Galeria"></a></li>
                    <li><a href="albums" title="Albumy, które siadły" class="nav-link"><img src="images/albums.png" alt="Albumy, które siadły"></a></li>
                    <li><a href="fortpolio" title="Portfolio i doświadczenie zawodowe (aka chwaliposty)" class="nav-link"><img src="images/portfolio.png" alt="fortpolio"></a></li>
                    <!-- <li><a href="en/" title="English version" class="nav-link"><img src="" alt="">-->
                </ul>
    `;
    const lo = document.getElementById("navbarek");
    if (lo) lo.innerHTML = html;
  }

    /*function highlight(){
    const aktualnaStrona = window.location.pathname;
    const linkiNavbar = document.querySelectorAll(".minimal-nav a");


    linkiNavbar.forEach(link => {
      if (link.getAttribute("href") && aktualnaStrona.includes(link.getAttribute("href"))) {
        link.classList.add("currently-here");
      }
    });
  }*/


    document.addEventListener("DOMContentLoaded", () => {
    wrzucStopke();
    miniNavbarek();
    //highlight();
  });
})();

function wsadzWroblaDoPierdla(){
  while(document.body.firstChild){
    document.body.removeChild(document.body.firstChild);
  }
  document.body.style.background = "black";
  const wrobelDoPierdla = document.createElement("div");
  const paragrafik = document.createElement("h2");
  wrobelDoPierdla.classList.add('wrapper-index');
  paragrafik.textContent = "I dumny ty z siebie człowieku jesteś? Niewinnego ptaszka wsadzić do więzienia? Dobrze ty się czujesz? Potrzebujesz pomocy psychiatrycznej? Weź się ogarnij, bo to co zrobiłeś jest naprawdę złe. Wróbel do pierdla, a ty do psychiatryka. Serio, ogarnij się. Wróbel to niewinny ptaszek, a ty go wsadziłeś do pierdla. Co z tobą nie tak? Czy ty naprawdę myślisz, że to jest w porządku? To jest naprawdę złe. Teraz idź do sądu penitencjarnego i walcz żeby biedaka wydostać. No, ja tu czekam. Idź i napraw swój błąd, ja sobie tutaj poczekam, mam książkę, mam picie, mam czas. No, dawaj, na co czekasz? Idź i rób swoje. A jak nie to ja tu będę siedział i będę cię wyzywał od złych ludzi, którzy wsadzają niewinne ptaszki do pierdla. No, dawaj, idź już, nie marnuj mojego i swojego czasu. Idź siedzieć za niego nawet, to zrozumiesz jak to jest. Co prawda ty nie masz skrzydełek do zakucia, ale należy ci się. No idź już. Ileż można.";
  wrobelDoPierdla.appendChild(paragrafik);
  document.body.appendChild(wrobelDoPierdla);
}

function wyciagnalemWroblaZPierdla(){
  location.reload();
}

async function wsadzKapisiaDoCeliWrobla(){
  while(document.body.firstChild){
    document.body.removeChild(document.body.firstChild);
  }
  document.body.style.background = "black";
  const KapisTezDoPierdla = document.createElement("div");
  const disclaimer = document.createElement("h2");
  KapisTezDoPierdla.classList.add('wrapper-index');
  disclaimer.textContent = "Mnie też? No dobra, to elo, ja idę. Ale tu ciasno, ta cela serio nadaje się tylko dla wróblaków...";
  KapisTezDoPierdla.appendChild(disclaimer);
  document.body.appendChild(KapisTezDoPierdla);
  await new Promise(resolve => setTimeout(resolve, 5000));
  KapisTezDoPierdla.removeChild(disclaimer);
  document.body.removeChild(KapisTezDoPierdla);
  document.body.style.background = "white";
}