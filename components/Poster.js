import React from "react";
import styled from "styled-components/native";
import { makeImgPath } from "../utils";


const Image = styled.Image`
  width: 100px;
  height: 150px;
  border-radius: 5px;
`;


const Poster = ({path}) => (
  <Image source={{uri:makeImgPath(path)}}></Image>
);

export default Poster;