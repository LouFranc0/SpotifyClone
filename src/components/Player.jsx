import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  GrChapterPrevious,
  GrChapterNext,
  GrPlayFill,
  GrPowerCycle,
} from "react-icons/gr";
import { LuShuffle } from "react-icons/lu";
import { useSelector } from "react-redux";
import ActualTrack from "./ActualTrack";

const Player = () => {
  const [track, setTrack] = useState(null);
  const trackData = useSelector((state) => state.playerSong.addTrack);
  console.log("trackData", trackData);

  useEffect(() => {
    setTrack(trackData);
  }, [track]);
  return (
    <Container className="player container-fluid">
      <Row className="py-2">
        {track && <ActualTrack track={track} />}

        <Col
          lg={7}
          className="d-flex justify-content-center flex-column align-items-center"
        >
          <Row>
            <Col className="playerControls w-100">
              <Row className="mx-1">
                <Col className="text-center">
                  <LuShuffle className="text-secondary" />
                </Col>
                <Col className="text-center">
                  <GrChapterPrevious className="text-secondary" />
                </Col>

                <Col className="text-center">
                  <GrPlayFill className="text-secondary" />
                </Col>
                <Col className="text-center">
                  <GrChapterNext className="text-secondary" />
                </Col>

                <Col className="text-center">
                  <GrPowerCycle className="text-secondary" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="justify-content-center playBar py-1 w-100">
            <Col className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="50"
                ></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
