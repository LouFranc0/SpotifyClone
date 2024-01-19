import { Col, Container, Row } from "react-bootstrap";
import Gallery from "./Gallery";
import SearchResults from "./SearcResults";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let rockArtists = [
  "queen",
  "u2",
  "thepolice",
  "eagles",
  "thedoors",
  "oasis",
  "thewho",
  "bonjovi",
];

let popArtists = [
  "maroon5",
  "coldplay",
  "onerepublic",
  "jamesblunt",
  "katyperry",
  "arianagrande",
];

let hipHopArtists = ["eminem", "snoopdogg", "lilwayne", "drake", "kanyewest"];

const Homepage = () => {
  const [search, setSearch] = useState([]);
  const searchResult = useSelector((state) => state.search.songs);

  useEffect(() => {
    setSearch(searchResult);
    console.log("search ", search);
  });

  return (
    <div className="home">
      {search.length > 0 && (
        <Container>
          <h1>Search Results</h1>
          <Row className=" mt-5">
            {search.map((song, i) => {
              return <SearchResults song={song} key={i} />;
            })}
          </Row>
        </Container>
      )}

      <Gallery genre="Rock" artistsList={rockArtists} />
      <Gallery genre="Pop" artistsList={popArtists} />
      <Gallery genre="HipHop" artistsList={hipHopArtists} />
    </div>
  );
};

export default Homepage;
