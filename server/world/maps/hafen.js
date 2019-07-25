module.exports = {
   name: "Hafen",
   objects: [],
   spawns: [
       {team:0,x:1028.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1030.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1032.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1034.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1026.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1024.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1022.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:0,x:1020.812 ,y:-3105.215 ,z:5.901,heading:178.384},
       {team:1,x:1028.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1030.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1032.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1034.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1026.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1024.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1022.812 ,y:-3105.215 ,z:5.901,heading:1.865},
       {team:1,x:1020.812 ,y:-3105.215 ,z:5.901,heading:1.865}
   ],
   max_players: 16,
   image: "https://cdn.discordapp.com/attachments/597607496357642250/601864435732054026/Grand_Theft_Auto_V_Screenshot_2019.07.19_-_21.41.49.90.png",
   weapons:[
       {hash:mp.joaat("weapon_pistol_mk2"),ammo:100},
       {hash:mp.joaat("weapon_pumpshotgun_mk2"),ammo:10},
       {hash:mp.joaat("weapon_carbinerifle_mk2"),ammo:300}
   ],
   teams: [{
       name: "Team Los Santos Vagos",
       clothing: [
           {gender:0,componentNumber:11, drawable:240, texture:1, palette:0},
           {gender:0,componentNumber:8, drawable:0, texture:16, palette:0},
           {gender:0,componentNumber:6, drawable:6, texture:0, palette:0},
           {gender:0,componentNumber:4, drawable:59, texture:9, palette:0},
           {gender:0,componentNumber:3, drawable:14, texture:0, palette:0},
           {gender:0,componentNumber:1, drawable:110, texture:19, palette:0}
       ],
       max:8
   }, {
       name: "Team Triaden",
       clothing: [
           {gender:0,componentNumber:11, drawable:206, texture:0, palette:0},
           {gender:0,componentNumber:8, drawable:0, texture:26, palette:0},
           {gender:0,componentNumber:6, drawable:36, texture:3, palette:0},
           {gender:0,componentNumber:4, drawable:24, texture:2, palette:0},
           {gender:0,componentNumber:3, drawable:2, texture:0, palette:0},
           {gender:0,componentNumber:1, drawable:106, texture:0, palette:0}
       ],
       max:8
   }],
   previewCam:{
       x:1028.812 ,y:-3105.215 ,z:5.901,
       px:1028.812 ,py:-3105.215 ,pz:55.901
   }
}