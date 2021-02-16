// import axios from "axios";

// const API = {
//   BASE_URL: "https://api.openweathermap.org/data/2.5/",

//   key: "056c60206db5e8ab2d93c33ab14167dc",

//   temperatureFormatC: "&units=metric",

//   // async getWeather(city) {
//   //   try {
//   //     const finalUrl = `${this.BASE_URL}find?q=${city}${this.taemperatureFormatC}&appid=${this.key}`;
//   //     const weatherResponse = await axios.get(finalUrl);

//   //     return weatherResponse.data.list[0];
//   //   } catch (error) {
//   //     return error;
//   //   }
//   // },

//   async getFiveDaysWeather(city) {
//     try {
//       const finalUrl = `${this.BASE_URL}forecast?q=${city}${this.temperatureFormatC}&appid=${this.key}`;
//       const weatherResponse = await axios.get(finalUrl);

//       return weatherResponse.data;
//     } catch (error) {
//       alert(error);
//     }
//   },

//   async getWeatherByPosition(coords) {
//     try {
//       const finalUrl = `${this.BASE_URL}weather?lat=${coords.lat}&lon=${coords.lon}${this.temperatureFormatC}&appid=${this.key}`;
//       const weatherResponse = await axios.get(finalUrl);

//       return weatherResponse.data;
//     } catch (error) {
//       alert("Error");
//     }
//   },
// };

// export default API;
