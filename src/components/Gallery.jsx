import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SearchResults from "./SearcResults";

const urlStrive = `https://striveschool-api.herokuapp.com/api/deezer`;
//const urlDeezer = `https://deezerdevs-deezer.p.rapidapi.com`;

const Gallery = ({ genre, artistsList }) => {
  const [artists, setArtists] = useState([]);

  const handleArtist = async (artistName) => {
    try {
      const response = await fetch(`${urlStrive}/search?q=${artistName}`);
      if (response.ok) {
        const result = await response.json();

        const songInfo = result.data[0];

        setArtists((artists) => [...artists, songInfo]);
      } else {
        console.log("Error fetching data");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const getRandomArtistsArr = (artistsArr) => {
    let randomArtistsArr = [];
    while (randomArtistsArr.length < 4) {
      const artist = artistsArr[Math.floor(Math.random() * artistsArr.length)];
      if (!randomArtistsArr.includes(artist)) {
        randomArtistsArr.push(artist);
      }
    }

    return randomArtistsArr;
  };

  useEffect(() => {
    //console.log("useEffect fired");
    setArtists([]);
    let randomArtists = getRandomArtistsArr(artistsList);

    //console.log(randomArtists);

    randomArtists.forEach((artist) => {
      setTimeout(async () => {
        await handleArtist(artist);
      }, 700);
    });
  }, []);

  return (
    <Container className="mt-5">
      <h2>{genre}</h2>

      {artists && (
        <Row>
          {artists.map((song, i) => {
            return <SearchResults key={i} song={song} />;
          })}
        </Row>
      )}
    </Container>
  );
};
export default Gallery;
