class Game {
  constructor() { }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  start() {
    if (gameState === 0) {
      player = new PLAYER();
      player.getCount();
      form = new Form()
      form.display();
    }
  }


  play() {
    form.hide1();
    PLAYER.getPlayerInfo();
    // console.log(allPlayer)

    if (allPlayer !== undefined) {
      var pos = 100;
      for (var player in allPlayer) {
        text(allPlayer[player].name + "  : " + allPlayer[player].distance, 20, pos)
        pos = pos + 20;
      }

     


    }

    if (keyIsDown(UP_ARROW) && player.index != null) {
      console.log("playerdistansce")
      player.distance += 50
      player.update();

    }





  }







}
