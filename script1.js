let country=document.getElementById('country');
let butt = document.getElementById('butt');

butt.addEventListener("click",()=>
  {
  let count_name=country.value;
  let url=`https://restcountries.com/v3.1/name/${count_name}?fullText=true`;
  fetch(url)
  .then((response)=>response.json())
  .then((data)=> {
    res.innerHTML=`
    <img src="${data[0].flags.svg}" class="image">
    <h1>${data[0].name.common}</h1>
    <div class="wrap">
      <div class="main">
     <h3>Capital:</h3>
     <p>${data[0].capital[0]}</p>
     </div>
    </div>
    <div class="wrap">
      <div class="main">
     <h3>Continents:</h3>
     <p>${data[0].continents[0]}</p>
     </div>
    </div>
    <div class="wrap">
      <div class="main">
     <h3>Population:</h3>
     <p>${data[0].population}</p>
     </div>
    </div>
    `
    ;
  })
  .catch(()=>{
    if(count_name.length==0)
    {
      res.innerHTML=`Enter a country name`;
    }
    else{
      res.innerHTML=`Enter a valid name`;
    }
  });
});