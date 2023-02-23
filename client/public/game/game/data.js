"use strict"


createRoom("Master_Bedroom", {
  isroom:true,
  prefix:"the",


  properName:true,
  east:new Exit("Bathroom"),  south:new Exit("Upstairs Hallway"),
})


createItem("player", PLAYER(), {
  loc:"Master_Bedroom",
})


createItem("Bed", {
  loc:"Master_Bedroom",
  examine:"It's a big bed, low to the ground.",
})


createItem("blanket", {
  loc:"Bed",
  lie:"You lay down on the blanket. Your head rests between your paws and you close your eyes for a bit.",
  examine:"A blue blanket at the foot of the bed. Perfect for sleeping on.",
})


createItem("pillow", {
  loc:"Bed",
})


createRoom("Bathroom", {
  prefix:"the",

  properName:true,
  west:new Exit("Master Bedroom"),
})


createItem("tub", {
  loc:"Bathroom",
  examine:"The place where humans take baths.",
})


createItem("clothes_bin", {
  loc:"Bathroom",
  smell:"It smells like delicious dirty laundry. You notice the light aroma of another dog on one of the items in the bin.",
  search:undefined, // WARNING: This script has not been included as it is in ASLX, not JavaScript,
  examine:"A red plastic basket with clothes inside.",
})


createRoom("Upstairs_Hallway", {
  prefix:"the",


  properName:true,
  north:new Exit("Master Bedroom"),  down:new Exit("Living Room"),
})


createRoom("Living_Room", {
  prefix:"the",

  properName:true,
  up:new Exit("Upstairs Hallway"),
})