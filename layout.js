(function () {
  function wrzucStopke() {
    const html = `
            <div class="the-veri-end">
                <small>&copy; <span id="rok"></span> Kacprowa Strona. Wszystkie prawa nie istnieją.</small>
            </div>
    `;
    const lo = document.getElementById("stopka");
    if (lo) lo.innerHTML = html;
    document.getElementById("rok").textContent = new Date().getFullYear();
  }

  function miniNavbarek() {
    const html = `
                <ul class="minimal-nav">
                    <li><a href="index.html" title="Strona główna" class="nav-link"><img src="images/home.png" alt="Strona główna"></a></li>
                    <li><a href="aboutme.html" title="O mnie" class="nav-link"><img src="images/aboutme.png" alt="O mnie"></a></li>
                    <li><a href="galeria.html" title="Galeria" class="nav-link"><img src="images/galeria.png" alt="Galeria"></a></li>
                    <li><a href="albums.html" title="Albumy, które siadły" class="nav-link"><img src="images/albums.png" alt="Albumy, które siadły"></a></li>
                    <!-- <li><a href="portfolio.html" title="Portfolio i doświadczenie zawodowe (aka chwaliposty)" class="nav-link"><img src="" alt=""></a></li> TBA -->
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