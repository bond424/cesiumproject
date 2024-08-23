import { Viewer, Entity, Cesium3DTileset } from "resium";
import { IonResource, Cartesian3  } from "cesium";

function App() {
  let viewer; // This will be raw Cesium's Viewer object.

  const handleReady = tileset => {
    if (viewer) {
      viewer.zoomTo(tileset);
    }
  };

  return (
    <Viewer full>
      <Entity
        description="test"
        name="tokyo"
        point={{ pixelSize: 10 }}
        position={Cartesian3.fromDegrees(139.767052, 35.681167, 100)}
      />
    </Viewer>
  );
}

export default App;