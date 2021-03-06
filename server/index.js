//test
var PlayerClass = require("./users/player.js")
var LobbyManager = require("./world/lobby.js")
//var Gangwar = require("./users/gangwar.js")
//var Weapons = require("./users/weapons.js")
var Lobby = require("./users/lobby.js")
var getDeathReason = require("./libs/death_reasons.js")
var players = [];




mp.events.add("ServerAccount:Ready", function(player) {
    player.setVariable("loggedIn", false);
    player.call("Server:RequestLogin");
    player.position.x = 9000;
    player.position.y = 9000;

});


mp.events.add("playerQuit", function(player, exitType, reason) {
    console.log("disconnect", exitType, reason)
    if (player.interface) {
        let player_id = player.id;
        if (player.interface.lobby) {
            LobbyManager.leaveLobby(player, player.interface.lobby);
        }
        player.interface.save().then(function() {
            console.log("saved");
        })
        console.log(`${player.name} disconnected; Reason ${exitType}`)
        players[player_id] = null;
    }
});
mp.events.add("ServerAccount:Login", function(player, username, password) {
    console.log(player.interface);
    if (player.interface) {
        console.log("login 1")
        player.interface.login(username, password)
    }
});
mp.events.add("ServerAccount:Register", function(player, username, password) {
    console.log(player.interface);
    if (player.interface) {
        player.interface.register(username, password)
    }
});



var fs = require("fs");
var saveFile = "tactics_save.txt";
mp.events.addCommand("spos", (player) => {
    let pos = (player.vehicle) ? player.vehicle.position : player.position;
    let rot = (player.vehicle) ? player.vehicle.rotation : player.heading;
    rot = (player.vehicle) ? `rx:${rot.x}, ry:${rot.y}, rz:${rot.z}` : player.heading
    fs.appendFile(saveFile, `x:${pos.x}, y:${pos.y}, z:${pos.z}, ${rot}\r\n`, (err) => {
        if (err) {
            player.notify(`~r~SavePos Error: ~w~${err.message}`);
        } else {
            player.notify(`~g~Position saved. ~w~(${name})`);
        }
    });
});