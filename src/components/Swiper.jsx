import React, { useEffect, useState } from "react";
import "./Swiper.scss";
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
import { Form, Input } from "antd";
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
  const [filterList, setFilterList] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [doFilter, setDoFilter] = useState(false);

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
    console.log("pokemon", pokemonList);
  }, [name]);

  useEffect(() => {
    setDoFilter(true);
    console.log("searchName", searchName);

    let john = pokemonList.filter((e) => e.name.indexOf(searchName) != -1);
    setFilterList(john);

    console.log("filter", john);
    if (searchName == "") {
      setDoFilter(false);
    }
  }, [searchName]);

  const onChange = (e) => {
    setSearchName(e.target.value);
  };

  return (
    <div className="swiper-container">
      <p className="swiper-title">{`Generation ${name}`}</p>
      <div className="filter-container">
        <Form
          name="basic"
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
            margin: 0,
          }}
          initialValues={{
            remember: true,
          }}
          onChange={onChange}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            // label="Username"
            name="username"
            style={{
              fontSize: 30,
              // margin: 0,
              marginLeft: 5,
              padding: 0,
            }}
            rules={[
              {
                // required: true,
                // message: "Please input your username!",
              },
            ]}
          >
            <Input placeholder="Search your pokemon here" />
          </Form.Item>
        </Form>
      </div>
      <Carousel containerClass="carousel-container" responsive={responsive}>
        {doFilter
          ? filterList?.map((e, index) => {
              return <CardCustom key={index} name={e.name} />;
            })
          : pokemonList?.map((e, index) => {
              return <CardCustom key={index} name={e.name} />;
            })}
      </Carousel>
    </div>
  );
};

export default Swiper;
