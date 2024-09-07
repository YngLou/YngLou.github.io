$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)

    createPlatform(150, 700, 160, 20); //short but wide platform located 150 pixels from the left of the screen and 700 pixels from the top of the screen
    createPlatform(499, 569, 160, 20); //short but wide platform located 500 pixels from the left of the screen and 567 pixels from the top of the screen
    createPlatform(745, 430, 160, 20); //short but wide platform located 740 pixels from the left of the screen and 450 pixels from the top of the screen
    createPlatform(360, 400, 160, 20); //short but wide platform located 499 pixels from the left of the screen and 300 pixels from the top of the screen
    createPlatform(1200, 400, 160, 20); //short but wide platform located 1200 pixels from the left of the screen and 400 pixels from the top of the screen

    createCollectable("database", 555, 250, 20,0.25); // creates a "database" collectible at the coordinates (555, 250), falling with a high gravity of 20, and bouncing with 25% bounce
    createCollectable("database", 400, 250, 20,0.25); // creates a "database" collectible at the coordinates (555, 250), falling with a high gravity of 20, and bouncing with 25% bounce
    createCollectable("database", 1250, 250, 20,0.25); // creates a "database" collectible at the coordinates (1250, 250), falling with a high gravity of 20, and bouncing with 25% bounce

    createCannon("left", 600, 2000); // cannon on left wall, 600px down, shooting once per second
    createCannon("right", 400,2000); // cannon on left wall, 600px down, shooting once per second
    createCannon("top", 500, 1000); // cannon on left wall, 600px down, shooting once per second

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
