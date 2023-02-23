"use strict"


settings.inventories = [
  {name:'Items Held', alt:'itemsHeld', test:settings.isHeldNotWorn, getLoc:function() { return game.player.name; } },
  {name:'Items Worn', alt:'itemsWorn', test:settings.isWorn, getLoc:function() { return game.player.name; } },
  {name:'Items Here', alt:'itemsHere', test:settings.isHere, getLoc:function() { return game.player.loc; } },
]
settings.status = [
  function() { return "<td>money:</td><td>" + game.player.money + "</td>"; },
]
settings.template = [
  '{b:{cap:{hereName}}} {objectsHere:You can see {objects} here.} {exitsHere:You can go {exits}.} {terse:{hereDesc}} ',
]
settings.title = "ChaseQuest"
settings.subtitle = ""
settings.author = "abrowncownow"
settings.version = "1.0"
settings.cmdEcho = true
settings.textInput = true
settings.moneyFormat = "$!"
settings.debug = false
settings.clearScreenOnRoomEnter = false
settings.thank = []
settings.lang = "lang-en"
settings.givePlayerSayMsg = true
settings.noAskTell = "You cannot use ASK/TELL ABOUT in this game."
settings.dropdownForConv = false
settings.npcReactionsAlways = false
settings.intro = ""
settings.setup = ""
settings.cursor = ">"
settings.textEffectDelay = 50
settings.panes = "left"
settings.compass = true
settings.statusPane = ""
settings.statusWidthLeft = 120
settings.statusWidthRight = 40
settings.divider = false
