import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Homepage from "./components/Homepage";
import { Col, Row } from "react-bootstrap";
import Player from "./components/Player";
import Album from "./components/Album";
import { useState } from "react";
import Artist from "./components/Artist";

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/album/:albumId" element={<Album />} />
          <Route path="/artist/:artistId" element={<Artist />} />
        </Routes>
        <Player />
      </div>
    </BrowserRouter>
  );
}

export default App;
