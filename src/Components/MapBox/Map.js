import React, {useState} from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import mapData from '../../Assets/codes.json'

// PUT IN .ENV LATER
const apiToken = "pk.eyJ1IjoibmljaG9sYXNob2ZmcyIsImEiOiJja2I0MjF5OWMwcmV2MnNwZHI4aXQ1d3A0In0.-vsvdZrI3bcWsL90UPPYaQ"

const Map = () => {
    
    const [viewport, setViewport] = useState({
        latitude:37.3861,
        longitude:-122.0839,
        width:"100vw",
        height:"90vh",
        zoom: 10
    })

    // const markerClick = (point) =>{
    //     console.log(point)
    // }

    const [selectedPoint, setSelectedPoint] = useState(null)

    return (
        <div>
            <ReactMapGL {...viewport} mapboxApiAccessToken={apiToken}
            mapStyle='mapbox://styles/nicholashoffs/ckb47nvuv1n191jqrnx1z5b7m'
            onViewportChange={(viewport)=>{setViewport(
                viewport
            )}}
            >
                
                {mapData.map((points)=>(
                    // Make this on-click better
                        <Marker key={points.fields.zip} latitude={points.fields.latitude} longitude={points.fields.longitude}>
                            <button onClick={(e)=>{
                                e.preventDefault()
                                setSelectedPoint(points)
                            }} ></button>
                        </Marker>
            ))}
            {selectedPoint ? (
            <Popup latitude={selectedPoint.fields.latitude} longitude={selectedPoint.fields.longitude}>
                <div>Park</div>
            </Popup> 
            ) : null}
            </ReactMapGL>
        </div>
    );
}

export default Map;