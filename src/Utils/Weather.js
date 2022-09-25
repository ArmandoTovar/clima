const API_KEY = "48ea66e07cce9fa96183319871812161";

export const   weather = (country, set) => {
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${country}&limit=5&appid=${API_KEY}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log("Location", data[0]);
      if (data !== []) {
        console.log(data);
        fetch(
          `http://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}`
        )
          .then((response) => response.json())
          .then((data) => {
            console.log("Weather", data);
            set(data);
          })
          .catch((e) => {
            console.log(e);
            return [];
          });
      }
    })
    .catch((e) => {
      console.log(e);
      return [];
    });
};
