import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import {
  addAlbumFavoriteAction,
  addToPlayerAction,
  removeAlbumFavoriteAction,
} from "../redux/actions";

const url_deezer = "https://deezerdevs-deezer.p.rapidapi.com/album/";

const API_KEY_Gaetano = "cd5ce390cbmsh8338260badec5d5p1d8d07jsnaf615db6cd16";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": API_KEY_Gaetano,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

const Album = () => {
  const [albumData, setAlbumData] = useState(null);
  const params = useParams();
  const dispatch = useDispatch();
  const favoriteTracks = useSelector((state) => state.album.albumFavorites);

  useEffect(() => {
    getAlbumData();
  }, []);

  const getAlbumData = async () => {
    try {
      const res = await fetch(url_deezer + params.albumId, options);
      //console.log(res);

      if (!res.ok) throw new Error("Cannot fetch data");

      const data = await res.json();
      setAlbumData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="home">
      {albumData && (
        <Container className="d-flex align-items-start justify-content-center gap-5">
          <div>
            <Card>
              <Card.Img
                src={albumData.cover_medium}
                alt={albumData.title}
                className="song-img "
                variant="top"
              />

              <Card.Body className="text-center">
                <Card.Title>{albumData.title}</Card.Title>
                <Card.Text>{albumData.artist.name}</Card.Text>
                <Button
                  variant="success"
                  onClick={() => {
                    const {
                      cover_small,
                      title,
                      artist: { name },
                    } = albumData;
                    const track = [cover_small, title, name];

                    dispatch(addToPlayerAction(track));
                  }}
                >
                  Play
                </Button>
              </Card.Body>
            </Card>
          </div>

          <div>
            {albumData.tracks.data.map((track, i) => {
              const isFavoriteTrack = favoriteTracks.includes(track.title);
              return (
                <div
                  key={i}
                  className=" trackHover d-flex align-content-center justify-content-between"
                >
                  <a
                    onClick={() => {
                      const {
                        title,
                        artist: { name },
                      } = track;
                      const trackData = [albumData.cover_small, title, name];

                      dispatch(addToPlayerAction(trackData));
                    }}
                    className="card-title trackHover px-3"
                  >
                    {track.title}
                  </a>
                  <div>
                    {isFavoriteTrack ? (
                      <StarFill
                        color="green"
                        size={10}
                        onClick={() =>
                          dispatch(removeAlbumFavoriteAction(track.title))
                        }
                      />
                    ) : (
                      <Star
                        color="white"
                        size={10}
                        onClick={() =>
                          dispatch(addAlbumFavoriteAction(track.title))
                        }
                      />
                    )}
                  </div>
                  <small className="duration">
                    {Math.floor(parseInt(track.duration) / 60)}:
                    {parseInt(track.duration) % 60 < 10
                      ? "0" + (parseInt(track.duration) % 60)
                      : parseInt(track.duration) % 60}
                  </small>
                </div>
              );
            })}
          </div>
        </Container>
      )}
    </div>
  );
};

export default Album;
