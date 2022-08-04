
import React, { Suspense, useEffect, useRef } from "react"
import { Canvas, Dom, useFrame } from "react-three-fiber"
import * as THREE from 'three'
import Car3D from "./Components/Car3D"
import * as dat from 'lil-gui'
// import { Content } from "./Components/Content"
// import { Startup } from "./Components/Startup"
// import { Clouds } from "./Components/Clouds"
// import { Buildings } from "./Components/Buildings"
// import state from "./Database"

// import Header from "./Components/Header/Header"
// import { useMeasures } from "./Measures"


// function Dolly() {
//   const { fullHeight } = useMeasures()
//   // This one makes the camera move
//   useFrame(({ clock, camera }) => {

//     var startPoint = -4
//     var cameraTarget = new THREE.Vector3(startPoint + startPoint * -1 * 2 * (state.top.current / fullHeight), 0.5, 3);
//     camera.position.lerp(cameraTarget, 0.05);

//     // USE THIS TO TEST LERP
//     // camera.position.x = -2 + 4 * (state.top.current / fullHeight)
//     // console.log(state.top.current)
//   })
//   return null
// }


function Experience() {
  // TODO viewport aspect useblock
  const camera = new THREE.PerspectiveCamera(30, 0, 0.1, 100)
  // const cam = useRef()
//   camera.position.set(-4, 0.5, 3)
  camera.position.set(-10, 3, 20)
  camera.lookAt(0, 0, 0)

  /**
 * Debug
 */
const gui = new dat.GUI({
    // closed: true,
    width: 500
})
gui.hide()



useEffect(() => {

    gui.add(camera.position, 'x').min(- 20).max(20).step(0.1).name('Camera-X')
    gui.add(camera.position, 'y').min(- 20).max(20).step(0.1).name('Camera-Y')
    gui.add(camera.position, 'z').min(- 20).max(20).step(0.1).name('Camera-Z')

  }, [])
  
  // const last = state.top.current
  // useFrame(() => {
  //   cam.current.position.y = lerp(camera.position.y, (state.top.current - last) / 100, 0.1)
  //   // console.log(lerp(camera.position.y, (state.top.current - last) / 100, 0.1))
  //   last = state.top.current
  // })
      

    // // const color = "#FFD792"
    const color = "#ffffff"
    // const scrollArea = useRef()
    // const onScroll = e => (state.top.current = e.target.scrollTop)
    // useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
      <>
        {/* <Canvas className="canvas" concurrent pixelRatio={1} camera={{ zoom: state.zoom, position: [0, 3, 500]}}> */}
        <Canvas className="experience__canvas" style={{ position:"absolute", height:"100vh", zIndex:-1 }} concurrent="true" pixelRatio={1} camera={camera} onCreated={state => state.gl.setClearColor(color)}>
          <Suspense 
        //   fallback={
            // <Dom center className="loading">
            //   <div className="loading__inner">Loading...</div>
            // </Dom>
            // }
            >

          {/* <Clouds  args={[14,7, 256, 256]} rotation={[- Math.PI * 0.5, 0, 0]} position={[0, 0, -1]} frustumCulled={false} /> */}
          {/* <Car3D position={[0, 0, 0]}></Car3D> */}
          {/* <Buildings /> */}
          
          <ambientLight color="white" intensity={3} />

          {/* <Dolly /> */}

            {/* <Content /> */}
            
            {/* <Startup /> */}
          </Suspense>
        </Canvas>
        {/* <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          {new Array(state.sections).fill().map((_, index) => (
            <div className="scrollArea__inner" key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }}>
              <div className="scrollArea__textWrapper">
                <p className="scrollArea__text">
                  Hello World! N°{index}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="frame">
          <Header />
        </div> */}
      </>
    )
  }



  export default Experience;