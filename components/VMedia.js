import React from "react";
import styled from "styled-components/native";
import Poster from "./Poster";

const Movie = styled.View`
  margin-right: 20px;
  align-items: center;
`;
const Title = styled.Text`
  color: gray;
  font-weight: 600;
  margin-top: 7px;
  margin-bottom:5px;
`;
const Votes = styled.Text`
  color: gray;
  font-size: 10px;
`;

const VMedia = ({
  posterPath,
  originalTitle,
  voteAverage
}) => {

  return (
    <Movie>
      <Poster path={posterPath}></Poster>
      <Title>
        {originalTitle.slice(0, 13)}
        {originalTitle.length > 13 ? '...' : null}
      </Title>
        <Votes>
          {voteAverage > 0 ? `⭐️${voteAverage}/10` : `Comming soon`}
        </Votes>
    </Movie>
  );
};

export default VMedia;