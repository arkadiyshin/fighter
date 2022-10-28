import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTiles } from "../redux/tilesSlice";
import { getTiles } from "../services/api";
import { Tile } from "./Tile";
import { MapStyled } from "./Map.styled";

export const Map = () => {
  const dispatch = useDispatch();
  const tiles = useSelector((state) => state.tilesSlice.tiles);

  const initialTiles = async () => {
    const map = await getTiles();
    console.log(map);
    dispatch(setTiles(map));
  };

  useEffect(() => {
    initialTiles();
  }, []);

  return (
    <MapStyled>
      {tiles.map((el) => (
        <Tile tile={el} />
      ))}
    </MapStyled>
  );
};
