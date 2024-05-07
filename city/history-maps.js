function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 41.8719, lng: 12.5674 },
      zoom: 6,
    });
  
    const places = [
        { 
          name: "Roma", 
          location: { lat: 41.9028, lng: 12.4964 }, 
          landmarks: [
            "Colosseum: An ancient amphitheater where gladiators once fought.",
            "Vatican City: The smallest independent state in the world, home to the Pope and the Vatican Museums.",
            "Trevi Fountain: A stunning Baroque fountain where visitors can toss a coin to ensure their return to Rome."
          ], 
          description: "Rome, the capital city of Italy, is known for its rich history, stunning architecture, and delicious cuisine. Explore iconic landmarks such as the Colosseum, Vatican City, and Trevi Fountain.",
        },
        { 
          name: "Milan", 
          location: { lat: 45.4642, lng: 9.1900 }, 
          landmarks: [
            "Duomo di Milano: A magnificent Gothic cathedral that took nearly six centuries to complete.",
            "Galleria Vittorio Emanuele II: One of the world's oldest shopping malls, featuring stunning architecture and luxury shops.",
            "Sforza Castle: A historic fortress and museum complex housing various art collections and exhibits."
          ], 
          description: "Milan, a global capital of fashion and design, offers visitors a blend of historical landmarks and modern attractions. Don't miss the opportunity to visit the Duomo di Milano, Galleria Vittorio Emanuele II, and Sforza Castle." ,
        },
        { 
          name: "Naples", 
          location: { lat: 40.8518, lng: 14.2681 }, 
          landmarks: [
            "Mount Vesuvius: An active volcano famous for its eruption in AD 79, which buried the Roman cities of Pompeii and Herculaneum.",
            "Pompeii: An ancient Roman city preserved in volcanic ash, offering a glimpse into daily life during Roman times.",
            "Naples Underground: A vast network of tunnels and catacombs beneath the city, providing insights into its history and folklore."
          ], 
          description: "Naples, located in southern Italy, is famous for its vibrant street life, rich history, and proximity to Mount Vesuvius and the ancient city of Pompeii. Explore the city's underground tunnels and archaeological sites." ,
        },
        { 
          name: "Venice", 
          location: { lat: 45.4408, lng: 12.3155 }, 
          landmarks: [
            "St. Mark's Basilica: A stunning cathedral known for its Byzantine architecture and gilded mosaics.",
            "Grand Canal: The main waterway of Venice, lined with elegant palaces and bustling activity.",
            "Rialto Bridge: An iconic bridge spanning the Grand Canal, offering panoramic views and a lively atmosphere."
          ], 
          description: "Venice, known as the 'City of Canals,' is renowned for its picturesque waterways, historic architecture, and romantic ambiance. Discover iconic landmarks such as St. Mark's Basilica, the Grand Canal, and the Rialto Bridge." ,
        },
        { 
          name: "Florence", 
          location: { lat: 43.7696, lng: 11.2558 }, 
          landmarks: [
            "Florence Cathedral: A masterpiece of Renaissance architecture, featuring a striking dome designed by Filippo Brunelleschi.",
            "Uffizi Gallery: One of the world's most famous art museums, housing works by Michelangelo, Leonardo da Vinci, and Botticelli.",
            "Ponte Vecchio: A historic bridge lined with shops, offering stunning views of the Arno River and the city skyline."
          ], 
          description: "Florence, the birthplace of the Renaissance, is home to some of the world's most famous works of art and architecture. Marvel at landmarks such as the Florence Cathedral, Uffizi Gallery, and Ponte Vecchio." ,
        },
        { 
          name: "Bologna", 
          location: { lat: 44.4949, lng: 11.3426 }, 
          landmarks: [
            "Piazza Maggiore: The main square of Bologna, surrounded by medieval buildings and bustling cafes.",
            "Towers of Bologna: A group of medieval towers that once served as defensive structures and symbols of wealth and power.",
            "Basilica of San Petronio: A grand church dedicated to the patron saint of Bologna, featuring impressive Gothic architecture and art."
          ], 
          description: "Bologna, a vibrant city in northern Italy, is known for its medieval architecture, rich culinary tradition, and lively atmosphere. Explore landmarks such as Piazza Maggiore, the Towers of Bologna, and the Basilica of San Petronio.",
        },
        { 
          name: "Turin", 
          location: { lat: 45.0703, lng: 7.6869 }, 
          landmarks: [
            "Mole Antonelliana: A towering landmark and symbol of Turin, housing the National Cinema Museum.",
            "Egyptian Museum: One of the largest collections of Egyptian antiquities outside of Egypt.",
            "Royal Palace of Turin: A former royal residence turned museum, showcasing lavish interiors and royal collections."
          ], 
          description: "Turin, the capital city of Piedmont, is renowned for its Baroque architecture, delicious cuisine, and rich cultural heritage. Visit landmarks such as the Mole Antonelliana, Egyptian Museum, and Royal Palace of Turin.",
        },
        { 
          name: "Genoa", 
          location: { lat: 44.4056, lng: 8.9463 }, 
          landmarks: [
            "Aquarium of Genoa: One of the largest aquariums in Europe, featuring a diverse range of marine life.",
            "Palazzi dei Rolli: A group of palaces recognized as a UNESCO World Heritage Site, showcasing Genoa's architectural heritage.",
            "Piazza De Ferrari: The main square of Genoa, surrounded by historic buildings and fountains, and a popular gathering spot for locals and tourists alike."
          ], 
          description: "Genoa, a port city on the Ligurian coast, offers visitors a mix of maritime history, cultural attractions, and delicious cuisine. Discover landmarks such as the Aquarium of Genoa, Palazzi dei Rolli, and Piazza De Ferrari." ,
        },
        { 
          name: "Palermo", 
          location: { lat: 38.1157, lng: 13.3618 }, 
          landmarks: [
            "Cattedrale di Palermo: A majestic cathedral blending various architectural styles, located in the heart of Palermo's historic center.",
            "Palazzo dei Normanni: A former royal palace housing the Sicilian Regional Assembly and the Cappella Palatina, a stunning example of Norman-Arab-Byzantine architecture.",
            "Teatro Massimo: An iconic opera house known for its grand architecture and performances."
          ], 
          description: "Palermo, the capital of Sicily, is known for its vibrant street markets, historic landmarks, and diverse cultural influences. Explore landmarks such as the Palermo Cathedral, Palazzo dei Normanni, and Teatro Massimo." ,
        },
        { 
          name: "Verona", 
          location: { lat: 45.4384, lng: 10.9916 }, 
          landmarks: [
            "Verona Arena: A well-preserved Roman amphitheater still used for opera performances and concerts.",
            "Juliet's House: A medieval house believed to have inspired the setting of Shakespeare's Romeo and Juliet.",
            "Ponte Pietra: An ancient Roman bridge spanning the Adige River, offering scenic views of Verona's historic center."
          ], 
          description: "Verona, a city in northern Italy's Veneto region, is famous for its well-preserved medieval old town, Shakespearean associations, and Romanesque architecture. Visit landmarks such as the Verona Arena, Juliet's House, and Ponte Pietra." ,
        },
      ];      
  
    places.forEach((place) => {
      const marker = new google.maps.Marker({
        position: place.location,
        map: map,
        title: place.name,
      });
  
      const infoWindowContent = `
        <div style="text-align: center; max-width: 300px; height: auto;">
          <h3>${place.name}</h3>
          <img src="city/mapimages/${place.name}.png" alt="${place.name}" style="max-width: 200px; height: 200px; border-radius: 10px; margin-bottom: 10px;">
          <div style="text-align: start;">
          <p>${place.description}</p>
          <p><strong>Landmarks:</strong></p>
          <ul>
            ${place.landmarks.map((landmark) => `<li>${landmark}</li>`).join("")}
          </ul>
          </div>
        </div>
      `;
  
      const infoWindow = new google.maps.InfoWindow({
        content: infoWindowContent,
      });
  
      marker.addListener("click", () => {
        infoWindow.open(map, marker);
      });
    });
  }
  