// Imports
const controls = require("./controls");

// Set up Three.js scene
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
let renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
let geometry = new THREE.BoxGeometry( 1, 1, 1 );
let material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
let material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
let material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
let cube = new THREE.Mesh( geometry, material );
let cube2 = new THREE.Mesh( geometry, material2 );
let cube3 = new THREE.Mesh( geometry, material3 );
let grid = new THREE.GridHelper(80, 15, 0xffffff, 0xffffff);
grid.position.y = -0.2;

// Add objects to scene
scene.add(grid);
scene.add( cube );
scene.add( cube2 );
scene.add( cube3 );
cube2.position.set(5, 0, 1);
cube3.position.set(-5, 0, 1)
camera.position.set(0, 2.5, 5);
cube.add( camera );

var state = {
      pressedKeys: {
        panLeft: false,
        panRight: false,
        forwards: false,
        backwards: false
      },
      cosY: Math.cos(cube.rotation.y),
      sinY: Math.sin(cube.rotation.y)
    }

var keyMap = {
    68: 'panRight',
    65: 'panLeft',
    87: 'forwards',
    83: 'backwards',
    37: 'rotateLeft',
    39: 'rotateRight',
    38: 'shoot'
}

function keydown(event) { 
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = true
}

function keyup(event) {
  var key = keyMap[event.keyCode]
  state.pressedKeys[key] = false
}


// Update game state
function update() {

    if (state.pressedKeys.panLeft) {
        controls.panLeft(cube, state)
    }
    if (state.pressedKeys.panRight) {
        controls.panRight(cube, state)
    }
    if (state.pressedKeys.forwards) {
        controls.moveForwards(cube, state)
    }
    if (state.pressedKeys.backwards) {
        controls.moveBackwards(cube, state)
    }

    if (state.pressedKeys.rotateLeft) {
      controls.rotateLeft(cube, state)

    }
    if (state.pressedKeys.rotateRight) {
      controls.rotateRight(cube, state)
    }
        
    moveCounter = 0;
}

// Game loop
let moveInterval = (1/60);
let moveCounter = 0;
let lastTime = 0;

var loop = function (time = 0) {
    requestAnimationFrame( loop );

    const deltaTime = time - lastTime;
    lastTime = time
    moveCounter += deltaTime

    if(moveCounter > moveInterval){
      update();
    }
    
    renderer.render(scene, camera);
};

window.addEventListener("keydown", keydown, false)
window.addEventListener("keyup", keyup, false)
window.requestAnimationFrame(loop)