async   function getData() {
            
        
    var userLocation = weather.value;
        
        const url =`https://api.openweathermap.org/data/2.5/weather?q=${userLocation}&appid=09756d60b2011a99fb389f6e43e766cc`
        let response = await fetch(url)
        let resp = await response.json();

        console.log(resp);
        
          city.innerHTML = resp.name;
         country.innerHTML = resp.sys.country;
         temperature.innerHTML = resp.main.temp-273 +"°C";
         humidity.innerHTML = resp.main.humidity +"%";
         pressure.innerHTML = resp.main.pressure +"hPa";




         let table = `<table border="5" align="center">
         <tr><td>city</td><td>country</td><td>temperature</td><td>humidity</td><td>pressure</td></tr>
         <tbody>`

         for (let i=0; i<resp.length; i++){
          table +="<tr>"
          table += `<td>${resp.name }</td><td>${resp.sys.country}</td><td>${resp.main.temp}<td>`
          table +="</tr>"
         }
         table+='</tbody><table>'

         document.getElementById('tab').innerHTML=table
    }