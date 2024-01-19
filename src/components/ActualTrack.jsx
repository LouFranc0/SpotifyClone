import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ActualTrack = ({ track }) => {
  const trackData = useSelector((state) => state.playerSong.addTrack);

  useEffect(() => {}, [trackData]);
  return (
    <>
      {trackData && (
        <Col lg={3}>
          <div className="actual-track">
            <div className="album-img-container">
              <img src={trackData[0]} alt="album" />
            </div>
            <div className="actual-track-text">
              <p>{trackData[1]}</p>
              <p>{trackData[2]}</p>
            </div>
          </div>
        </Col>
      )}
    </>
  );
};

export default ActualTrack;
