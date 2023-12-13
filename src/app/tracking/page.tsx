"use client"
import React, { useState, useEffect } from 'react';
import mapboxgl, { Map as MapboxMap } from 'mapbox-gl';
import styled from 'styled-components';
import NavBar from '../../../components/molecules/NavBar';
import TopNavBar from '../../../components/molecules/TopNavBar';

interface MapContainerProps {
  isVisible: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
;
`
const MapContainer = styled.div<MapContainerProps>`
  width: 100%;
  height: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
;`

const MapPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e6e6e6;
  border-radius: 8px;
;`

const TrackingPage: React.FC = () => {
  const [map, setMap] = useState<MapboxMap | null>(null);
  const [isMapVisible, setIsMapVisible] = useState(false);

  useEffect(() => {
    mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: 'map-container',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [11.516667, 3.866667], // Reversed the coordinates (longitude, latitude)
        zoom: 10,
      });

      setMap(mapInstance);
      setIsMapVisible(true);
    };

    if (!map) {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);

  return (
    <Container>
      <TopNavBar />
      <NavBar />
      <h1>Package Tracking</h1>
      <MapContainer isVisible={isMapVisible} id="map-container"></MapContainer>
    </Container>
  );
};

export default TrackingPage;
