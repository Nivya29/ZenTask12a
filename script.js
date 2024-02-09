const apiKey = "b7UpEWF1t9H3cUkPb3oC5xU9PPt95Bjw";
const apiUrl = `https://calendarific.com/api/v2/countries?api_key=${apiKey}`;
// Fetching API
fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
      // Create heading element
      var heading = document.createElement("h2");
      heading.textContent = "Country Information";
      heading.classList.add("center");
      document.body.append(heading);
      

      // create unordered list 
      var list = document.createElement("ul");


      //Iterate over each country 
      data.response.countries.forEach(country => {

        const card = document.createElement("div");
        card.classList.add("card","mb-3");
        const cardBody = document.createElement('div');
        cardBody.classList.add("card-body");
        
        
        const listItem = document.createElement("li");
        listItem.innerHTML = `
        
        <p>Country Name:${country.country_name}</p><br>
        <p>Languages:${country.supported_languages}</p><br>
        <p>Total Holidays:${country.total_holidays}</p><br> 
        
        `;
        cardBody.appendChild(listItem);
        card.appendChild(cardBody);
        document.body.append(card);
        
     
      
      })  
      })
      .catch(error => {
        console.log("Error fetching data:", error);
      });