const places = [
    {
      id: 1,
      place: "Tokyo",
      img: "./photo/tokyo.jpg",
      cont:"asia",
      desc: `Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional,
      from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto 
      Shrine is known for its towering gate and surrounding woods. The Imperial Palace 
      sits amid large public gardens.`,
    },
    {
      id: 2,
      place: "Sydney",
      img: "./photo/Sydney-Harbour.jpg",
      cont:"Ocenia",
      desc: `Sydney, capital of New South Wales and one of Australia's largest cities, 
      is best known for its harbourfront Sydney Opera House, with a distinctive sail-like design. 
      Massive Darling Harbour and the smaller Circular Quay port are hubs of waterside life, with the arched Harbour Bridge 
      and esteemed Royal Botanic Garden nearby. `,
    },
    {
      id: 3,
      place: "Johannesburg",
      img: "./photo/johannesburg.jpg",
      cont:"africa",
      desc: `Johannesburg, South Africa's biggest city and capital of Gauteng province,
       began as a 19th-century gold-mining settlement. Its sprawling Soweto township was
        once home to Nelson Mandela and Desmond Tutu. Mandela’s former residence is now 
        the Mandela House museum. Other Soweto museums that recount the struggle to end 
        segregation include the somber Apartheid Museum and Constitution Hill, a former 
        prison complex.`,
    },
    {
      id: 4,
      place: "New York city",
      img: "./photo/nyc.jpg",
      cont:"america",
      desc: `New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.
       At its core is Manhattan, a densely populated borough that’s among the world’s major commercial,
        financial and cultural centers. Its iconic sites include skyscrapers such as the Empire State 
        Building and sprawling Central Park. Broadway theater is staged in neon-lit Times Square `,
    },
    {
      id: 5,
      place: "Vienna",
      img: "./photo/vienna.jpg",
      cont:"europe",
      desc: `Vienna, Austria’s capital, lies in the country’s east on the Danube River.
       Its artistic and intellectual legacy was shaped by residents including Mozart,
        Beethoven and Sigmund Freud. The city is also known for its Imperial palaces,
         including Schönbrunn, the Habsburgs’ summer residence. In the MuseumsQuartier
          district, historic and contemporary buildings display works by Egon Schiele,
           Gustav Klimt and other artists. `,
    },
];

const sectioncenter =document.querySelector('.section-center');
const filterbtns=document.querySelectorAll('.filter-btn')
window.addEventListener('DOMContentLoaded',function(){
   displaylistItems(places);
  
});

 filterbtns.forEach(function(btn){
    btn.addEventListener('click',function(e){

        const category=e.currentTarget.dataset.id;
        const listcategory=places.filter(function(place){
            if(place.cont==category)
            {
            return place;}
           
    });
    if(category=="all")
    {
        displaylistItems(places);
    }
    else{
        displaylistItems(listcategory);
    }
});
});
function displaylistItems(listitems)
{
    let displayPlaces=listitems.map(function(item){
        return `<article class="list-items">
        <img src="${item.img}" alt="" class="photo" alt="${item.place}">
        <div class="info">
            <header>
                <h4>${item.place}</h4> 
                 
            </header>
             <p class="text">
                <br>
                ${item.desc}
            </p>
            </div>
    </article>`;
       });
       displayPlaces=displayPlaces.join('');
       sectioncenter.innerHTML=displayPlaces;
       console.log(displayPlaces);

}




