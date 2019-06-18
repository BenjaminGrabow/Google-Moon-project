import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 100%;
height: 100%;

`;

class App extends Component {
  render() {
     return (
      <StyledDiv>
     <Map google={this.props.google} toom={14}>

<Marker onClick={this.onMarkerClick}
name={`Current location`} />

<InfoWindow onClose={this.onInfoWindowClose}>

</InfoWindow>
     </Map>
    </StyledDiv>
     )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBj-zn3g_4sI96N3HleJJI-9QPUPrlx5xc')
})(App)

// AIzaSyBj-zn3g_4sI96N3HleJJI-9QPUPrlx5xc => KEY
