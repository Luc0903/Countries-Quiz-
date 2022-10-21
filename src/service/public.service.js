import axios from 'axios';

export async function fetchCountriesInfo() {
  return await axios.get('https://restcountries.com/v3.1/all');
}
