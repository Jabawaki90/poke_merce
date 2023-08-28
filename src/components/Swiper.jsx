import React, { useEffect, useState } from "react";
import {
  getGen1,
  getGen2,
  getGen3,
  getGen4,
  getGen5,
  getGen6,
  getGen7,
  getGen8,
  getGen9,
} from "../utils/get";
import Carousel from "react-multi-carousel";
import { Card } from "antd";
import axios from "axios";
import CardCustom from "./CardCustom";

let responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 764 },
    items: 5,
  },
  tablet1: {
    breakpoint: { max: 764, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Swiper = ({ name }) => {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    if (name == 1) {
      getGen1().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 2) {
      getGen2().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 3) {
      getGen3().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 4) {
      getGen4().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 5) {
      getGen5().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 6) {
      getGen6().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 7) {
      getGen7().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 8) {
      getGen8().then((e) => setPokemonList(e.data.pokemon_species));
    } else if (name == 9) {
      getGen9().then((e) => setPokemonList(e.data.pokemon_species));
    }
  }, [name]);

  return (
    <div style={{ margin: "20px 20px" }}>
      {/* <h1>{`Generation ${name}`}</h1> */}
      <Carousel containerClass="carousel-container" responsive={responsive}>
        {pokemonList?.map((e, index) => {
          return (
            <CardCustom key={index} name={e.name}>
              <CardCustom />
            </CardCustom>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Swiper;
