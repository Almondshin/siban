import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";

const HMovie = styled.View`
  padding: 0 30px;
  flex-direction: row;
  margin-bottom: 30px;
`;
const HColumn = styled.View`
  margin-left: 15px;
  width: 80%;
`;
const Title = styled.Text`
  color: gray;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom:5px;
`;
const Release = styled.Text`
  font-size: 12px;
  margin-vertical: 10px;
`;
const Overview = styled.Text`
  color: gray;
  width: 80%;
`;

const HMedia = ({
  posterPath,
  originalTitle,
  overview,
  releaseDate,
  
}) => {

  return (
    <HMovie>
      <Poster path={posterPath} />
      <HColumn>
        <Title>{originalTitle}</Title>
        <Release>
          {new Date(releaseDate).toLocaleDateString('ko')}
        </Release>
        <Overview>
          {overview !== "" && overview.length > 80
            ? `${overview.slice(0, 140)}...`
            : overview}
        </Overview>
      </HColumn>
    </HMovie>
  );
};

export default HMedia;