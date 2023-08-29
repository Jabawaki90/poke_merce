import React, { useEffect, useState } from "react";
import { singlePokemon } from "../utils/get";
import { Avatar, Card, Skeleton, Switch } from "antd";
const { Meta } = Card;

const CardCustom = ({ name }) => {
  const [poke, setPoke] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("name", name);
    singlePokemon(name).then((e) => {
      setPoke(e.data);
      setLoading(false);
    });
  }, [name]);
  return (
    <>
      <Card
        style={{
          //   width: 220,
          margin: "16px 5px",
          backgroundColor: "#337CCF",
        }}
        cover={
          <img
            className="card-image"
            src={poke?.sprites?.other["official-artwork"].front_default}
            alt=""
          />
        }
        hoverable
        loading={loading}
      >
        <Meta title={poke.name} description="www.instagram.com" />
      </Card>
    </>
  );
};

export default CardCustom;
