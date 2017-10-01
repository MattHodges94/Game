
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var material2 = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
var material3 = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
var cube = new THREE.Mesh( geometry, material );
var cube2 = new THREE.Mesh( geometry, material2 );
var cube3 = new THREE.Mesh( geometry, material3 );

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
      x: 1,
      z: 1
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

function update() {
    var move = 10;

    if (state.pressedKeys.panLeft) {
        cube.position.x -= state.x/10;
        cube.position.z += state.z/10;
    }
    if (state.pressedKeys.panRight) {
        cube.position.x += state.x/10;
        cube.position.z -= state.z/10;
    }
    if (state.pressedKeys.forwards) {
        //  ??

    }
    if (state.pressedKeys.backwards) {

        // ??
    }

    if (state.pressedKeys.rotateLeft) {
      cube.rotation.y += 0.1;
      state.x = Math.cos(cube.rotation.y);
      state.z = Math.sin(cube.rotation.y);

    }
    if (state.pressedKeys.rotateRight) {
      cube.rotation.y -= 0.1;
      state.x = Math.cos(cube.rotation.y);
      state.z = Math.sin(cube.rotation.y);

    }
        
    moveCounter = 0;
}

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