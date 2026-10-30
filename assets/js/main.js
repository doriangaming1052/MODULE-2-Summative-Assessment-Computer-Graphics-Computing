import * as THREE from './three.module.js';
import { OrbitControls } from './OrbitControls.js';
import { GLTFLoader } from './GLTFLoader.js';
//--------------------------------------------------------------------------------------------------------------//

// let sun, sunGeo

// MODELS //
//--------------------------------------------------------------------------------------------------------------//
let modelhouse;

let modellawnmower;

let modelfence;


let modelnut1;
let modelnut2;
let modelnut3;
let modelnut4;
let modelnut5;

let modelzombie1;
let modelzombie2;
let modelzombie3;
let modelzombie4;
let modelzombie5;

let modelzombie6;
let modelzombie7;
let modelzombie8;
let modelzombie9;
let modelzombie10;

let modelzombie11;
let modelzombie12;
let modelzombie13;
let modelzombie14;
let modelzombie15;

let modelzombie16;
let modelzombie17;
let modelzombie18;
let modelzombie19;
let modelzombie20;
//--------------------------------------------------------------------------------------------------------------//

// Making a Scene
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// particles()

const cameraControl = new OrbitControls(camera, renderer.domElement);

// Textures
const pavementTexture = new THREE.TextureLoader().load("./assets/textures/pavement.png");
const greengrass1Texture = new THREE.TextureLoader().load("./assets/textures/green grass 1.jpg");
const greengrass2Texture = new THREE.TextureLoader().load("./assets/textures/green grass 2.jpg");
const roadTexture = new THREE.TextureLoader().load("./assets/textures/road.jpg");
const skyTexture = new THREE.TextureLoader().load("./assets/textures/Sky.avif");

// Camera
camera.position.z = 0;
camera.position.y = 100;
camera.position.x = -100;

// Background
scene.background=new THREE.Color(0x00ddff)
scene.background=new THREE.TextureLoader().load("./assets/textures/Sky.avif");

// LIGHTINGS //
const directionalLight = new THREE.DirectionalLight(0xdec487, 5);
scene.add(directionalLight);

const pointLightSouth = new THREE.PointLight(0xf5b158, 1, 0);
pointLightSouth.position.set(0, 0, 300);
scene.add(pointLightSouth);

const pointLightNorth = new THREE.PointLight(0xf5b158, 1, 0);
pointLightNorth.position.set(0, 0, -300);
scene.add(pointLightNorth);

const pointLightEast = new THREE.PointLight(0xf5b158, 1, 0);
pointLightEast.position.set(300, 0, 0);
scene.add(pointLightEast);

const pointLightWest = new THREE.PointLight(0xf5b158, 1, 0);
pointLightWest.position.set(-300, 0, 0);
scene.add(pointLightWest);


//--------------------------------------------------------------------------------------------------------------//
// PARTICLES. WARNING! ACTIVATION CAUSES SEVERE LAGGING//
//--------------------------------------------------------------------------------------------------------------//
// function particles() { 
//   const points = [];

//   for (let i = 0; i < 20; i++) {
//     let sun = new THREE.Vector3(
//       Math.random() * 100 - 100,
//       Math.random() * 100 - 100,
//       Math.random() * 500 - 300
//     );
//     points.push(sun);
//   }

//   sunGeo = new THREE.BufferGeometry().setFromPoints(points);

//   let sprite = new THREE.TextureLoader().load("assets/images/sun2.webp");
//   let sunMaterial = new THREE.PointsMaterial({
//     color: 0xfafa00,
//     size: 10,
//     map: sprite,
//   });

//   sun = new THREE.Points(sunGeo, sunMaterial);
//   scene.add(sun);
// }

// function animateParticles() {
//   sunGeo.verticesNeedUpdate = true;
//   sun.position.y -= 0.1;

//   if(sun.position.y < -50) {sun.position.y = 200;}
//   }

//---------------------------------------------------------------------------------------------------------------//


// NEIGHBORS HOUSE, A COLUMN OF LAWNMOWERS, AND TWO SIDES OF FENCES //
//--------------------------------------------------------------------------------------------------------------//
// A HOUSE //
const model3d3 = new GLTFLoader();
model3d3.load("./assets/models/house/scene.gltf", function(house){
    modelhouse = house;
    scene.add(house.scene);
    house.scene.position.set(0,-5,-40);
    house.scene.scale.set(9,9,9)
    renderer.render(scene, camera);
})

// LAWNMOWERS //
const model3dlawnmower1 = new GLTFLoader();
model3dlawnmower1.load("./assets/models/lawnmower/scene.gltf", function(lawnmower){
    modellawnmower = lawnmower;
    scene.add(lawnmower.scene);
    lawnmower.scene.position.set(46,-4,33);
    lawnmower.scene.scale.set(7,7,7)
    renderer.render(scene, camera);
})

const model3dlawnmower2 = new GLTFLoader();
model3dlawnmower2.load("./assets/models/lawnmower/scene.gltf", function(lawnmower){
    modellawnmower = lawnmower;
    scene.add(lawnmower.scene);
    lawnmower.scene.position.set(23,-4,33);
    lawnmower.scene.scale.set(7,7,7)
    renderer.render(scene, camera);
})

const model3dlawnmower3 = new GLTFLoader();
model3dlawnmower3.load("./assets/models/lawnmower/scene.gltf", function(lawnmower){
    modellawnmower = lawnmower;
    scene.add(lawnmower.scene);
    lawnmower.scene.position.set(0,-4,33);
    lawnmower.scene.scale.set(7,7,7)
    renderer.render(scene, camera);
})

const model3dlawnmower4 = new GLTFLoader();
model3dlawnmower4.load("./assets/models/lawnmower/scene.gltf", function(lawnmower){
    modellawnmower = lawnmower;
    scene.add(lawnmower.scene);
    lawnmower.scene.position.set(-23,-4,33);
    lawnmower.scene.scale.set(7,7,7)
    renderer.render(scene, camera);
})

const model3dlawnmower5 = new GLTFLoader();
model3dlawnmower5.load("./assets/models/lawnmower/scene.gltf", function(lawnmower){
    modellawnmower = lawnmower;
    scene.add(lawnmower.scene);
    lawnmower.scene.position.set(-46,-4,33);
    lawnmower.scene.scale.set(7,7,7)
    renderer.render(scene, camera);
})


// FENCES //
const model3dfencer1 = new GLTFLoader();
model3dfencer1.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(66,0,195);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})

const model3dfencer2 = new GLTFLoader();
model3dfencer2.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(66,0,110);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})

const model3dfencer3 = new GLTFLoader();
model3dfencer3.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(66,0,25);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})



const model3dfencel1 = new GLTFLoader();
model3dfencel1.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(-48,0,195);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})

const model3dfencel2 = new GLTFLoader();
model3dfencel2.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(-48,0,110);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})

const model3dfencel3 = new GLTFLoader();
model3dfencel3.load("./assets/models/fence/scene.gltf", function(fence){
    modelfence = fence;
    scene.add(fence.scene);
    fence.scene.position.set(-48,0,25);
    fence.scene.scale.set(24,24,24)
    renderer.render(scene, camera);
})


// PLANTS VS. ZOMBIES //
//--------------------------------------------------------------------------------------------------------------//
// TEAM WALLNUTS //
const model3dnut1 = new GLTFLoader();
model3dnut1.load("./assets/models/Wallnut/scene.gltf", function(Wallnut){
    modelnut1 = Wallnut;
    scene.add(Wallnut.scene);
    Wallnut.scene.position.set(0,0,89);
    Wallnut.scene.scale.set(5,5,5)
    renderer.render(scene, camera);
})

const model3dnut2 = new GLTFLoader();
model3dnut2.load("./assets/models/Wallnut/scene.gltf", function(Wallnut){
    modelnut2 = Wallnut;
    scene.add(Wallnut.scene);
    Wallnut.scene.position.set(-23,0,66);
    Wallnut.scene.scale.set(5,5,5)
    renderer.render(scene, camera);
})

const model3dnut3 = new GLTFLoader();
model3dnut3.load("./assets/models/Wallnut/scene.gltf", function(Wallnut){
    modelnut3 = Wallnut;
    scene.add(Wallnut.scene);
    Wallnut.scene.position.set(23,0,66);
    Wallnut.scene.scale.set(5,5,5)
    renderer.render(scene, camera);
})

const model3dnut4 = new GLTFLoader();
model3dnut4.load("./assets/models/Wallnut/scene.gltf", function(Wallnut){
    modelnut4 = Wallnut;
    scene.add(Wallnut.scene);
    Wallnut.scene.position.set(-46,0,43);
    Wallnut.scene.scale.set(5,5,5)
    renderer.render(scene, camera);
})

const model3dnut5 = new GLTFLoader();
model3dnut5.load("./assets/models/Wallnut/scene.gltf", function(Wallnut){
    modelnut5 = Wallnut;
    scene.add(Wallnut.scene);
    Wallnut.scene.position.set(46,0,43);
    Wallnut.scene.scale.set(5,5,5)
    Wallnut.scene.color.set(red)
    renderer.render(scene, camera);
})





// A HOARD OF ZOMBIES //
const model3dzombie1 = new GLTFLoader();
model3dzombie1.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie1 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(46,-4,158);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie2 = new GLTFLoader();
model3dzombie2.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie2 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(23,-4,158);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie3 = new GLTFLoader();
model3dzombie3.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie3 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(0,-4,158);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie4 = new GLTFLoader();
model3dzombie4.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie4 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-23,-4,158);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie5 = new GLTFLoader();
model3dzombie5.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie5 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-46,-4,158);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})





const model3dzombie6 = new GLTFLoader();
model3dzombie6.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie6 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(46,-4,181);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie7 = new GLTFLoader();
model3dzombie7.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie7 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(23,-4,181);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie8 = new GLTFLoader();
model3dzombie8.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie8 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(0,-4,181);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie9 = new GLTFLoader();
model3dzombie9.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie9 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-23,-4,181);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie10 = new GLTFLoader();
model3dzombie10.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie10 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-46,-4,181);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})





const model3dzombie11 = new GLTFLoader();
model3dzombie11.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie11 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(46,-4,204);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie12 = new GLTFLoader();
model3dzombie12.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie12 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(23,-4,204);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie13 = new GLTFLoader();
model3dzombie13.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie13 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(0,-4,204);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie14 = new GLTFLoader();
model3dzombie14.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie14 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-23,-4,204);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie15 = new GLTFLoader();
model3dzombie15.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie15 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-46,-4,204);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})





const model3dzombie16 = new GLTFLoader();
model3dzombie16.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie16 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(46,-4,227);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie17 = new GLTFLoader();
model3dzombie17.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie17 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(23,-4,227);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie18 = new GLTFLoader();
model3dzombie18.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie18 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(0,-4,227);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie19 = new GLTFLoader();
model3dzombie19.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie19 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-23,-4,227);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})

const model3dzombie20 = new GLTFLoader();
model3dzombie20.load("./assets/models/zombie/scene.gltf", function(zombie){
    modelzombie20 = zombie;
    scene.add(zombie.scene);
    zombie.scene.position.set(-46,-4,227);
    zombie.scene.scale.set(10,10,10)
    renderer.render(scene, camera);
})




//--------------------------------------------------------------------------------------------------------------//
// THE ENTIRE LAWN //
//-------------------------------------------------------------------------------------------------------------//


// RED LINE
const lgeometry = new THREE.BoxGeometry( 110, 1, 1 );
const lmaterial = new THREE.MeshBasicMaterial( { color: "red" } );
const linecube = new THREE.Mesh( lgeometry, lmaterial );
scene.add( linecube );

linecube.position.x = 0
linecube.position.y = -4.5
linecube.position.z = 100.5

linecube.rotation.x = 0
linecube.rotation.y = 0
linecube.rotation.z = 0


// THE ROAD
const rgeometry = new THREE.PlaneGeometry( 45, 150 );
const rmaterial = new THREE.MeshBasicMaterial( { map: roadTexture } );
const roadplane = new THREE.Mesh( rgeometry, rmaterial );
scene.add( roadplane );

roadplane.position.x = 0
roadplane.position.y = -5
roadplane.position.z = 274

roadplane.rotation.x = -1.57
roadplane.rotation.y = 0
roadplane.rotation.z = 1.57


// column1
//--------------------------------------------------------------------------------------------------------------//

const GrassTile1geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile1material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile1 = new THREE.Mesh( GrassTile1geometry, GrassTile1material );
GrassTile1.position.set(46,-9,43);
scene.add( GrassTile1 );

const GrassTile2geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile2material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile2 = new THREE.Mesh( GrassTile2geometry, GrassTile2material );
GrassTile2.position.set(23,-9,43);
scene.add( GrassTile2 );

const GrassTile3geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile3material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile3 = new THREE.Mesh( GrassTile3geometry, GrassTile3material );
GrassTile3.position.set(0,-9,43);
scene.add( GrassTile3 );

const GrassTile4geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile4material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile4 = new THREE.Mesh( GrassTile4geometry, GrassTile4material );
GrassTile4.position.set(-23,-9,43);
scene.add( GrassTile4 );

const GrassTile5geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile5material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile5 = new THREE.Mesh( GrassTile5geometry, GrassTile5material );
GrassTile5.position.set(-46,-9,43);
scene.add( GrassTile5 );





//column2
//--------------------------------------------------------------------------------------------------------------//

const GrassTile6geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile6material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile6 = new THREE.Mesh( GrassTile6geometry, GrassTile6material );
GrassTile6.position.set(46,-9,66);
scene.add( GrassTile6 );

const GrassTile7geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile7material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile7 = new THREE.Mesh( GrassTile7geometry, GrassTile7material );
GrassTile7.position.set(23,-9,66);
scene.add( GrassTile7 );

const GrassTile8geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile8material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile8 = new THREE.Mesh( GrassTile8geometry, GrassTile8material );
GrassTile8.position.set(0,-9,66);
scene.add( GrassTile8 );

const GrassTile9geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile9material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile9 = new THREE.Mesh( GrassTile9geometry, GrassTile9material );
GrassTile9.position.set(-23,-9,66);
scene.add( GrassTile9 );

const GrassTile10geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile10material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile10 = new THREE.Mesh( GrassTile10geometry, GrassTile10material );
GrassTile10.position.set(-46,-9,66);
scene.add( GrassTile10 );





//column3
//--------------------------------------------------------------------------------------------------------------//

const GrassTile11geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile11material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile11 = new THREE.Mesh( GrassTile11geometry, GrassTile11material );
GrassTile11.position.set(46,-9,89);
scene.add( GrassTile11 );

const GrassTile12geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile12material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile12 = new THREE.Mesh( GrassTile12geometry, GrassTile12material );
GrassTile12.position.set(23,-9,89);
scene.add( GrassTile12 );

const GrassTile13geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile13material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile13 = new THREE.Mesh( GrassTile13geometry, GrassTile13material );
GrassTile13.position.set(0,-9,89);
scene.add( GrassTile13 );

const GrassTile14geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile14material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile14 = new THREE.Mesh( GrassTile14geometry, GrassTile14material );
GrassTile14.position.set(-23,-9,89);
scene.add( GrassTile14 );

const GrassTile15geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile15material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile15 = new THREE.Mesh( GrassTile15geometry, GrassTile15material );
GrassTile15.position.set(-46,-9,89);
scene.add( GrassTile15 );





//column4
//--------------------------------------------------------------------------------------------------------------//

const GrassTile16geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile16material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile16 = new THREE.Mesh( GrassTile16geometry, GrassTile16material );
GrassTile16.position.set(46,-9,112);
scene.add( GrassTile16 );

const GrassTile17geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile17material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile17 = new THREE.Mesh( GrassTile17geometry, GrassTile17material );
GrassTile17.position.set(23,-9,112);
scene.add( GrassTile17 );

const GrassTile18geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile18material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile18 = new THREE.Mesh( GrassTile18geometry, GrassTile18material );
GrassTile18.position.set(0,-9,112);
scene.add( GrassTile18 );

const GrassTile19geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile19material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile19 = new THREE.Mesh( GrassTile19geometry, GrassTile19material );
GrassTile19.position.set(-23,-9,112);
scene.add( GrassTile19 );

const GrassTile20geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile20material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile20 = new THREE.Mesh( GrassTile20geometry, GrassTile20material );
GrassTile20.position.set(-46,-9,112);
scene.add( GrassTile20 );





//column5
//--------------------------------------------------------------------------------------------------------------//

const GrassTile21geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile21material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile21 = new THREE.Mesh( GrassTile21geometry, GrassTile21material );
GrassTile21.position.set(46,-9,135);
scene.add( GrassTile21 );

const GrassTile22geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile22material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile22 = new THREE.Mesh( GrassTile22geometry, GrassTile22material );
GrassTile22.position.set(23,-9,135);
scene.add( GrassTile22 );

const GrassTile23geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile23material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile23 = new THREE.Mesh( GrassTile23geometry, GrassTile23material );
GrassTile23.position.set(0,-9,135);
scene.add( GrassTile23 );

const GrassTile24geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile24material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile24 = new THREE.Mesh( GrassTile24geometry, GrassTile24material );
GrassTile24.position.set(-23,-9,135);
scene.add( GrassTile24 );

const GrassTile25geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile25material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile25 = new THREE.Mesh( GrassTile25geometry, GrassTile25material );
GrassTile25.position.set(-46,-9,135);
scene.add( GrassTile25 );





//column6
//--------------------------------------------------------------------------------------------------------------//

const GrassTile26geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile26material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile26 = new THREE.Mesh( GrassTile26geometry, GrassTile26material );
GrassTile26.position.set(46,-9,158);
scene.add( GrassTile26 );

const GrassTile27geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile27material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile27 = new THREE.Mesh( GrassTile27geometry, GrassTile27material );
GrassTile27.position.set(23,-9,158);
scene.add( GrassTile27 );

const GrassTile28geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile28material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile28 = new THREE.Mesh( GrassTile28geometry, GrassTile28material );
GrassTile28.position.set(0,-9,158);
scene.add( GrassTile28 );

const GrassTile29geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile29material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile29 = new THREE.Mesh( GrassTile29geometry, GrassTile29material );
GrassTile29.position.set(-23,-9,158);
scene.add( GrassTile29 );

const GrassTile30geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile30material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile30 = new THREE.Mesh( GrassTile30geometry, GrassTile30material );
GrassTile30.position.set(-46,-9,158);
scene.add( GrassTile30 );





//column7
//--------------------------------------------------------------------------------------------------------------//

const GrassTile31geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile31material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile31 = new THREE.Mesh( GrassTile31geometry, GrassTile31material );
GrassTile31.position.set(46,-9,181);
scene.add( GrassTile31 );

const GrassTile32geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile32material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile32 = new THREE.Mesh( GrassTile32geometry, GrassTile32material );
GrassTile32.position.set(23,-9,181);
scene.add( GrassTile32 );

const GrassTile33geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile33material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile33 = new THREE.Mesh( GrassTile33geometry, GrassTile33material );
GrassTile33.position.set(0,-9,181);
scene.add( GrassTile33 );

const GrassTile34geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile34material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile34 = new THREE.Mesh( GrassTile34geometry, GrassTile34material );
GrassTile34.position.set(-23,-9,181);
scene.add( GrassTile34 );

const GrassTile35geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile35material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile35 = new THREE.Mesh( GrassTile35geometry, GrassTile35material );
GrassTile35.position.set(-46,-9,181);
scene.add( GrassTile35 );





//column8
//--------------------------------------------------------------------------------------------------------------//

const GrassTile36geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile36material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile36 = new THREE.Mesh( GrassTile36geometry, GrassTile36material );
GrassTile36.position.set(46,-9,204);
scene.add( GrassTile36 );

const GrassTile37geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile37material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile37 = new THREE.Mesh( GrassTile37geometry, GrassTile37material );
GrassTile37.position.set(23,-9,204);
scene.add( GrassTile37 );

const GrassTile38geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile38material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile38 = new THREE.Mesh( GrassTile38geometry, GrassTile38material );
GrassTile38.position.set(0,-9,204);
scene.add( GrassTile38 );

const GrassTile39geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile39material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile39 = new THREE.Mesh( GrassTile39geometry, GrassTile39material );
GrassTile39.position.set(-23,-9,204);
scene.add( GrassTile39 );

const GrassTile40geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile40material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile40 = new THREE.Mesh( GrassTile40geometry, GrassTile40material );
GrassTile40.position.set(-46,-9,204);
scene.add( GrassTile40 );





//column9
//--------------------------------------------------------------------------------------------------------------//

const GrassTile41geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile41material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile41 = new THREE.Mesh( GrassTile41geometry, GrassTile41material );
GrassTile41.position.set(46,-9,227);
scene.add( GrassTile41 );

const GrassTile42geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile42material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile42 = new THREE.Mesh( GrassTile42geometry, GrassTile42material );
GrassTile42.position.set(23,-9,227);
scene.add( GrassTile42 );

const GrassTile43geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile43material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile43 = new THREE.Mesh( GrassTile43geometry, GrassTile43material );
GrassTile43.position.set(0,-9,227);
scene.add( GrassTile43 );

const GrassTile44geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile44material = new THREE.MeshBasicMaterial( { map: greengrass2Texture } );
const GrassTile44 = new THREE.Mesh( GrassTile44geometry, GrassTile44material );
GrassTile44.position.set(-23,-9,227);
scene.add( GrassTile44 );

const GrassTile45geometry = new THREE.BoxGeometry( 23, 9, 23 );
const GrassTile45material = new THREE.MeshBasicMaterial( { map: greengrass1Texture } );
const GrassTile45 = new THREE.Mesh( GrassTile45geometry, GrassTile45material );
GrassTile45.position.set(-46,-9,227);
scene.add( GrassTile45 );





// PAVEMENTS
const leftpavement1geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement1material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement1 = new THREE.Mesh( leftpavement1geometry, leftpavement1material );
leftpavement1.position.set(-64,-9,43);
scene.add( leftpavement1 );

const leftpavement2geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement2material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement2 = new THREE.Mesh( leftpavement2geometry, leftpavement2material );
leftpavement2.position.set(-64,-9,66);
scene.add( leftpavement2 );

const leftpavement3geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement3material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement3 = new THREE.Mesh( leftpavement3geometry, leftpavement3material );
leftpavement3.position.set(-64,-9,89);
scene.add( leftpavement3 );

const leftpavement4geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement4material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement4 = new THREE.Mesh( leftpavement4geometry, leftpavement4material );
leftpavement4.position.set(-64,-9,112);
scene.add( leftpavement4 );

const leftpavement5geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement5material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement5 = new THREE.Mesh( leftpavement5geometry, leftpavement5material );
leftpavement5.position.set(-64,-9,135);
scene.add( leftpavement5 );

const leftpavement6geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement6material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement6 = new THREE.Mesh( leftpavement6geometry, leftpavement6material );
leftpavement6.position.set(-64,-9,158);
scene.add( leftpavement6 );

const leftpavement7geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement7material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement7 = new THREE.Mesh( leftpavement7geometry, leftpavement7material );
leftpavement7.position.set(-64,-9,181);
scene.add( leftpavement7 );

const leftpavement8geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement8material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement8 = new THREE.Mesh( leftpavement8geometry, leftpavement8material );
leftpavement8.position.set(-64,-9,204);
scene.add( leftpavement8 );

const leftpavement9geometry = new THREE.BoxGeometry( 13, 9, 23 );
const leftpavement9material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const leftpavement9 = new THREE.Mesh( leftpavement9geometry, leftpavement9material );
leftpavement9.position.set(-64,-9,227);
scene.add( leftpavement9 );





const rightpavement1geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement1material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement1 = new THREE.Mesh( rightpavement1geometry, rightpavement1material );
rightpavement1.position.set(64,-9,43);
scene.add( rightpavement1 );

const rightpavement2geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement2material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement2 = new THREE.Mesh( rightpavement2geometry, rightpavement2material );
rightpavement2.position.set(64,-9,66);
scene.add( rightpavement2 );

const rightpavement3geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement3material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement3 = new THREE.Mesh( rightpavement3geometry, rightpavement3material );
rightpavement3.position.set(64,-9,89);
scene.add( rightpavement3 );

const rightpavement4geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement4material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement4 = new THREE.Mesh( rightpavement4geometry, rightpavement4material );
rightpavement4.position.set(64,-9,112);
scene.add( rightpavement4 );

const rightpavement5geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement5material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement5 = new THREE.Mesh( rightpavement5geometry, rightpavement5material );
rightpavement5.position.set(64,-9,135);
scene.add( rightpavement5 );

const rightpavement6geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement6material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement6 = new THREE.Mesh( rightpavement6geometry, rightpavement6material );
rightpavement6.position.set(64,-9,158);
scene.add( rightpavement6 );

const rightpavement7geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement7material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement7 = new THREE.Mesh( rightpavement7geometry, rightpavement7material );
rightpavement7.position.set(64,-9,181);
scene.add( rightpavement7 );

const rightpavement8geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement8material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement8 = new THREE.Mesh( rightpavement8geometry, rightpavement8material );
rightpavement8.position.set(64,-9,204);
scene.add( rightpavement8 );

const rightpavement9geometry = new THREE.BoxGeometry( 13, 9, 23 );
const rightpavement9material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const rightpavement9 = new THREE.Mesh( rightpavement9geometry, rightpavement9material );
rightpavement9.position.set(64,-9,227);
scene.add( rightpavement9 );





const backpavement1geometry = new THREE.BoxGeometry( 23, 9, 13 );
const backpavement1material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const backpavement1 = new THREE.Mesh( backpavement1geometry, backpavement1material );
backpavement1.position.set(-46,-9,245);
scene.add( backpavement1 );

const backpavement2geometry = new THREE.BoxGeometry( 23, 9, 13 );
const backpavement2material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const backpavement2 = new THREE.Mesh( backpavement2geometry, backpavement2material );
backpavement2.position.set(-23,-9,245);
scene.add( backpavement2 );

const backpavement3geometry = new THREE.BoxGeometry( 23, 9, 13 );
const backpavement3material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const backpavement3 = new THREE.Mesh( backpavement3geometry, backpavement3material );
backpavement3.position.set(0,-9,245);
scene.add( backpavement3 );

const backpavement4geometry = new THREE.BoxGeometry( 23, 9, 13 );
const backpavement4material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const backpavement4 = new THREE.Mesh( backpavement4geometry, backpavement4material );
backpavement4.position.set(23,-9,245);
scene.add( backpavement4 );

const backpavement5geometry = new THREE.BoxGeometry( 23, 9, 13 );
const backpavement5material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const backpavement5 = new THREE.Mesh( backpavement5geometry, backpavement5material );
backpavement5.position.set(46,-9,245);
scene.add( backpavement5 );





const pointpavement1geometry = new THREE.BoxGeometry( 13, 9, 13 );
const pointpavement1material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const pointpavement1 = new THREE.Mesh( pointpavement1geometry, pointpavement1material );
pointpavement1.position.set(-64,-9,245);
scene.add( pointpavement1 );

const pointpavement2geometry = new THREE.BoxGeometry( 13, 9, 13 );
const pointpavement2material = new THREE.MeshBasicMaterial( { map: pavementTexture } );
const pointpavement2 = new THREE.Mesh( pointpavement2geometry, pointpavement2material );
pointpavement2.position.set(64,-9,245);
scene.add( pointpavement2 );

//--------------------------------------------------------------------------------------------------------------//





function animate( time ) {

    cameraControl.update();


    if (modelhouse) {modelhouse.scene.rotation.y = -1.57;}

    if (modellawnmower) {}

    if (modelfence) {}


    // TEAM OF WALLNUTS //
    if (modelnut1) {modelnut1.scene.rotation.x += .10;}
    if (modelnut2) {modelnut2.scene.rotation.x += .09;}
    if (modelnut3) {modelnut3.scene.rotation.x += .08;}
    if (modelnut4) {modelnut4.scene.rotation.x += .07;}
    if (modelnut5) {modelnut5.scene.rotation.x += .06;}


// HOARD OF ZOMBIES //
if (modelzombie1) {modelzombie1.scene.rotation.y = -3.1}
if (modelzombie2) {modelzombie2.scene.rotation.y = -3.1}
if (modelzombie3) {modelzombie3.scene.rotation.y = -3.1}
if (modelzombie4) {modelzombie4.scene.rotation.y = -3.1}
if (modelzombie5) {modelzombie5.scene.rotation.y = -3.1}

if (modelzombie6) {modelzombie6.scene.rotation.y = -3.1}
if (modelzombie7) {modelzombie7.scene.rotation.y = -3.1}
if (modelzombie8) {modelzombie8.scene.rotation.y = -3.1}
if (modelzombie9) {modelzombie9.scene.rotation.y = -3.1}
if (modelzombie10) {modelzombie10.scene.rotation.y = -3.1}

if (modelzombie11) {modelzombie11.scene.rotation.y = -3.1}
if (modelzombie12) {modelzombie12.scene.rotation.y = -3.1}
if (modelzombie13) {modelzombie13.scene.rotation.y = -3.1}
if (modelzombie14) {modelzombie14.scene.rotation.y = -3.1}
if (modelzombie15) {modelzombie15.scene.rotation.y = -3.1}

if (modelzombie16) {modelzombie16.scene.rotation.y = -3.1}
if (modelzombie17) {modelzombie17.scene.rotation.y = -3.1}
if (modelzombie18) {modelzombie18.scene.rotation.y = -3.1}
if (modelzombie19) {modelzombie19.scene.rotation.y = -3.1}
if (modelzombie20) {modelzombie20.scene.rotation.y = -3.1}


    
// requestAnimationFrame(animate); animateParticles()


  renderer.render( scene, camera );
}
renderer.setAnimationLoop( animate );