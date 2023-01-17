<script setup>
    import Datepicker from '@vuepic/vue-datepicker';
    import '@vuepic/vue-datepicker/dist/main.css';

    import { MapboxMap, MapboxPopup, MapboxMarker, MapboxGeolocateControl, MapboxNavigationControl, MapboxGeocoder } from '@studiometa/vue-mapbox-gl';
    import 'mapbox-gl/dist/mapbox-gl.css';
    import '@mapbox/mapbox-gl-geocoder/lib/mapbox-gl-geocoder.css';
</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="flex flex-col w-full">
            <div class="grid card bg-base-300 rounded-box place-items-center">
                <div class="card">
                    <div class="card-body">
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Judul Acara</span>
                            </label>
                            <input type="text" placeholder="Input Judul Acara" class="input input-bordered w-full max-w-xs" />
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Waktu Acara</span>
                            </label>
                            <Datepicker v-model="date" placeholder="Input Waktu Acara" menuClassName="dp-custom-menu" ></Datepicker>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Alamat Acara</span>
                            </label>
                            <textarea class="textarea" placeholder="Input Alamat Acara" ></textarea>
                            
                        </div>
                    </div>
                </div>
            </div> 
            <div class="divider"></div> 
            <div class="grid card bg-base-300 rounded-box place-items-center">
                <div class="relative h-96 w-full">
                    <MapboxMap
                        class="absolute h-full w-full"
                        :access-token="accessToken"
                        :center="center"
                        :zoom="zoom"
                        map-style="mapbox://styles/mapbox/streets-v11">
                        <MapboxGeocoder />
                        <MapboxGeolocateControl />
                        <MapboxNavigationControl position="bottom-right" />
                        <MapboxMarker :lng-lat="center" :draggable="true" @mb-dragend="getLonglat">
                            <p class="p-1 bg-gray-500 border-r-amber-50">Hello world!</p>
                        </MapboxMarker>
                        <!-- <MapboxPopup :lng-lat="[10, 80]">
                            <p>Hello world !</p>
                        </MapboxPopup> -->
                    </MapboxMap>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss">
    .dp-custom-menu {
        // @apply bg-gray-900;
        left: 50% !important;
        top: 20% !important;
    }
</style>

<script>
export default {
    data() {
        return {
            date: null,
            accessToken: 'pk.eyJ1IjoieWF5YW4tc29waWFuIiwiYSI6ImNrZGRyNGtoZTFwZ2szMW1rYzMybjVjdzAifQ.3Efkru6X3bmOXNMikeHR6w',
            mapStyle: {},
            zoom: 10,
            center: [108.15628898565814, -7.126416406325575],
            longlat: {},
        }
    },
    created() {
    },
    computed: {

    },
    methods: {
        getLonglat(e){
            this.longlat = e.target._lngLat;
            this.center = [e.target._lngLat.lng, e.target._lngLat.lat];
            console.log(this.center);
        }  
    },
}
</script>