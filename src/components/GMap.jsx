import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  useJsApiLoader,
  InfoWindow,
  MarkerF,
} from "@react-google-maps/api";

const GMap = () => {
  const containerStyle = {
    width: "80%",
    height: "600px",
    margin: "0 auto",
    border: "solid 3px #1D3557",
  };

  const center = {
    lat: 33.71215171829491,
    lng: -117.92979954592,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.MY_GMAP_API_KEY,
  });

  const [marker, setMarker] = useState([]);

  useEffect(() => {
    if (isLoaded) {
      setMarker([
        {
          id: 1,
          name: "weSellFish Company",
          position: { lat: 33.71215171829491, lng: -117.92979954592 },
        },
      ]);
    }
  }, [isLoaded]);

  const [activeMarker, setActiveMarker] = React.useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  // const handleOnLoad = (map) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   marker.forEach(({ position }) => bounds.extend(position));
  //   map.fitBounds(bounds);
  // };

  return (
    <>
      <div className="text-center mt-[3em] mb-[4em]">
        <h3
          className="font-heading text-berekley-blue underline text-3xl font-semibold mb-[0.75em]
      md:text-4xl"
        >
          weSellFish Company
        </h3>
        <div className="font-text mb-[1.75em] text-lg">
          <p>111 Street Avenue, Los Angeles</p>
          <p>California 99999</p>
          <p>United States</p>
        </div>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={15}
            // onLoad={handleOnLoad}
            onClick={() => setActiveMarker(null)}
          >
            {marker.map(({ id, name, position }) => {
              <MarkerF
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
              >
                {activeMarker === id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div>{name}</div>
                  </InfoWindow>
                ) : null}
              </MarkerF>;
            })}
          </GoogleMap>
        ) : (
          <></>
        )}

        {/* <img
            className="h-[500px] object-cover w-[300px] m-auto border-3 border-berekley-blue
        md:w-[700px] lg:w-[1000px]"
            src="../src/assets/images/map1.png"
            alt="google maps location of company"
          /> */}
      </div>
    </>
  );
};

export default GMap;
