const controls = {
    panLeft: ((player, state) => {
        player.position.x -= state.cosY/10;
        player.position.z += state.sinY/10;
    }),
    panRight: ((player, state) => {
        player.position.x += state.cosY/10;
        player.position.z -= state.sinY/10;
    }),
    rotateLeft: ((player, state) => {
        player.rotation.y += 0.1;
        state.cosY = Math.cos(player.rotation.y);
        state.sinY = Math.sin(player.rotation.y);
    }),
    rotateRight: ((player, state) => {
        player.rotation.y -= 0.1;
        state.cosY = Math.cos(player.rotation.y);
        state.sinY = Math.sin(player.rotation.y);
    }),
    moveForwards: ((player, state) => {
        player.position.x -= state.sinY/10;
        player.position.z -= state.cosY/10;
    }),
    moveBackwards: ((player, state) => {
        player.position.x += state.sinY/10;
        player.position.z += state.cosY/10;
    }),

}

module.exports = controls;