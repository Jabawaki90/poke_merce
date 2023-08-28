import axios from "axios";

export const singlePokemon = (name) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`);
};

export const getGen1 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/1/");
};
export const getGen2 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/2/");
};
export const getGen3 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/3/");
};
export const getGen4 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/4/");
};
export const getGen5 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/5/");
};
export const getGen6 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/6/");
};
export const getGen7 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/7/");
};
export const getGen8 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/8/");
};
export const getGen9 = () => {
  return axios.get("https://pokeapi.co/api/v2/generation/9/");
};
