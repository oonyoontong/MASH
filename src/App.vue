<template>
  <div id="app" style=''>
    <div class='banner' >
      <b-container>
        <b-row>
          <b-col id='col0' cols='10' offset='1' class='header'>
            <h1>
              Mobile Army Surgical Hospital
            </h1>

            <h5>
              The story of how 3 M*A*SH*,Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe
            </h5>
          </b-col>
        </b-row>
      </b-container>
    </div>

    <div class='body'>
    <b-container>
      <b-row>
        <b-col id='col1' cols='6' offset = '3' class='slide-container' v-waypoint="{ active: true, callback: onScroll, options: { threshold: [0] } }">
          <div class="slide-text">
            INDEX 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col id='col2' cols='6' offset = '3' class='slide-container' v-waypoint="{ active: true, callback: onScroll, options: { threshold: [0] } }">
          <div class="slide-text">
            INDEX 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          </div>
        </b-col>
      </b-row>


      <b-row>
        <b-col id='col3' cols='6' offset = '3' class='slide-container' v-waypoint="{ active: true, callback: onScroll, options: { threshold: [0] } }">
          <div class="slide-text">
            INDEX 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </b-col>
      </b-row>
      
      <b-row>
        <b-col id='col4' cols='6' offset = '3' class='slide-container' v-waypoint="{ active: true, callback: onScroll, options: { threshold: [0] } }">
          <div class="slide-text">
            INDEX 4 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </b-col>
      </b-row>

      <b-row class="mapbox-container" v-waypoint="{ active: true, callback: onScroll, options: { threshold: [0] } }">
        <div id="map"></div>
      </b-row>
    </b-container>
    </div>

    <div class="next" style="background-color: white">

      <b-container>
         <b-row>
        <b-col cols='6' offset = '3' class='slide-container'>
          <div class="slide-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols='6' offset = '3' class='slide-container'>
          <div class="slide-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
          </div>
        </b-col>
      </b-row>


      </b-container>

    </div>


  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
 /* eslint-disable */ 
export default {
  name: 'App',
  data() {
    return {
      options:{
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-0.15591514, 51.51830379],
        zoom: 15.5,
        bearing: 27,
        pitch: 45
      },
      accessToken: 'pk.eyJ1Ijoib29udG9uZyIsImEiOiJjank4ajBzN3QwODdvM25uMW83OXJvbTNzIn0.oeKxKdpAg0vYwsq8IX7DTw',
      inView: new Set([]),

    }
  },
  mounted () {
    this.createMap()
  },
   methods: {
      createMap: function () {
        mapboxgl.accessToken = 'pk.eyJ1Ijoib29udG9uZyIsImEiOiJjank4ajBzN3QwODdvM25uMW83OXJvbTNzIn0.oeKxKdpAg0vYwsq8IX7DTw'

        // initialize the map
        var map = new mapboxgl.Map({
          container: 'map', // container id
          style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
          center: [130.0712037,37.2172535], // starting position [lng, lat]
          zoom: 4.8 // starting zoom
          });
      },
      onScroll: function ({ el, going, direction }) {
          // this.log(`#${el.getAttribute('id')} is ${this.wrapSpan(going)} viewport, direction: ${this.wrapSpan(direction)}`)
          el.classList.toggle('active', this.$waypointMap.GOING_IN === going)
          // console.log(el)
          // console.log(going, direction);
          if (this.$waypointMap.GOING_IN === going){
            this.inView.add(el.getAttribute('id'))
            console.log('adding ' + el.getAttribute('id') + ' to inView' );
          } else {
            // console.log('Removing ' + el.getAttribute('id') + ' ITEM INDEX ' + this.inView.indexOf(el.getAttribute('id')))
            // console.log(this.inView);
            // this.inView.splice( this.inView.indexOf(el.getAttribute('id'), 1) );
            this.inView.delete( el.getAttribute('id') )
            // console.log(this.inView);
          }

          if (this.inView.size == 1){
            this.setMap(this.inView.keys().next().value);

          }
      },

      setMap: function(colName){
        console.log(colName);
      }
   }
}
</script>

<style>
#app {
  font-family: 'Literata', serif;
  font-size: 20px;
  z-index: 2;
}

.slide-text{
  text-align: center;
  padding: 20px 0px 20px 0px;

}

.slide-container{
  background: white;
  margin-top: 50vh;
  margin-bottom:51vh;

  z-index: 1;
}

.banner{
  text-align: left;
  padding-top: 50px;
  background: linear-gradient(to bottom, rgba(255,255,255,1) 30%, rgba(0,0,0,0));
}

.header{
  margin-bottom: 60%;

}

.mapbox-container{
  width: 100%;
  height: 140vh; 
  background-color: red;
}


#map {
  position: fixed;
  width:100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: -100;
}

.active {
    border: 3px dashed rgb(0, 0, 0);
    box-sizing: border-box;
  }
</style>
