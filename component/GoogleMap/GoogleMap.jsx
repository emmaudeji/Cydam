import GoogleMapReact from 'google-map-react';
import LocationPin from './LocationPin';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMap = () => {
    const defaultProps = {
        center: {
          lat: 9.080360,
          lng: 7.412560
        },
        zoom: 11
      };
    
      return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyA3Ccjwgo0E1Bg9HrLWeZxLKzUitQ-uhOM" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
            <LocationPin
              lat={9.080360}
              lng={7.412560}
              text="16 Nkwere Crescent Area 11 Garki Abuja, Nigeria"
            />
          </GoogleMapReact>
        </div>
      );
    }

export default GoogleMap