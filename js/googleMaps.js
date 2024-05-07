function initMap() {
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.8719, lng: 12.5674 }, 
      zoom: 6, 
    });
  
    const places = [
        { name: "Roma", location: { lat: 41.9028, lng: 12.4964 }, landmarks: ["Colosseum", "Vatican City", "Trevi Fountain"] },
        { name: "Milano", location: { lat: 45.4642, lng: 9.1900 }, landmarks: ["Duomo di Milano", "Galleria Vittorio Emanuele II", "Sforza Castle"] },
        { name: "Napoli", location: { lat: 40.8518, lng: 14.2681 }, landmarks: ["Mount Vesuvius", "Pompeii", "Naples Underground"] },
        { name: "Venice", location: { lat: 45.4408, lng: 12.3155 }, landmarks: ["St. Mark's Basilica", "Grand Canal", "Rialto Bridge"] },
        { name: "Florence", location: { lat: 43.7696, lng: 11.2558 }, landmarks: ["Florence Cathedral", "Uffizi Gallery", "Ponte Vecchio"] },
        { name: "Bologna", location: { lat: 44.4949, lng: 11.3426 }, landmarks: ["Piazza Maggiore", "Towers of Bologna", "Basilica of San Petronio"] },
        { name: "Turin", location: { lat: 45.0703, lng: 7.6869 }, landmarks: ["Mole Antonelliana", "Egyptian Museum", "Royal Palace of Turin"] },
        { name: "Genoa", location: { lat: 44.4056, lng: 8.9463 }, landmarks: ["Aquarium of Genoa", "Palazzi dei Rolli", "Piazza De Ferrari"] },
        { name: "Palermo", location: { lat: 38.1157, lng: 13.3618 }, landmarks: ["Cattedrale di Palermo", "Palazzo dei Normanni", "Teatro Massimo"] },
        { name: "Verona", location: { lat: 45.4384, lng: 10.9916 }, landmarks: ["Verona Arena", "Juliet's House", "Ponte Pietra"] },
      ];      
  
    places.forEach((place) => {
      const marker = new google.maps.Marker({
        position: place.location,
        map: map,
        title: place.name,
      });
  
      const infoWindowContent = `
        <h3>${place.name}</h3>
        <p><strong>Places:</strong></p>
        <ul>
          ${place.landmarks.map((landmark) => `<li>${landmark}</li>`).join("")}
        </ul>
      `;
  
      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  