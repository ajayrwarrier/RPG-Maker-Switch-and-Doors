/*
>>>>>>[AUTHORS]<<<<<<
^     BUNNY         ^
^     DANTE         ^
^     KRYPTON       ^
<<<<<<<<<<<<<<<<<<<<<
/*


-----------------------------------------------------------------------------
[TOGGLE SWITCH EVENT]
=====================
First element of the array is the map Id, second element is the event ID and 
the third element is the Self Switch ID.
The second argument is the boolean value of the switch.
Don't forget to turn on Self Switch in the second Page Event.
-----------------------------------------------------------------------------
*/
//Page Event 1 ON Script:
$gameSelfSwitches.setValue([1,2,'A'],true);
//Page Event 2 OFF Script:
$gameSelfSwitches.setValue([1,2,'A'],false);
/****************************************************************************/




/*
-----------------------------------------------------------------------------
[DOOR CONTROL FOR TWO SWTICH] MAP 1
===================================
Enable Self switch in Page Event 2.
Trigger type Parallel for both.
-----------------------------------------------------------------------------
*/
// Page Event 1 Open Door Script: 
state1 = $gameSelfSwitches.value([1,2,'A']);  //Switch 1 Value
state2 = $gameSelfSwitches.value([1,4,'A']);    //Switch 2 Value
if(state1 && state2){
$gameSelfSwitches.setValue([1,1,'A'],true); //Self Switch of Event 2 of Door.
}
// Page Event 2 Open Door Script:
state1 = $gameSelfSwitches.value([1,2,'A']);
state2 = $gameSelfSwitches.value([1,4,'A']);
if((state1===false) || (state2===false)){
$gameSelfSwitches.setValue([1,1,'A'],false);
}
// Move the player to next level if the door is open.
if(($gamePlayer.x === 14) && ($gamePlayer.y === 2)){
$gamePlayer.reserveTransfer(2, 4, 10,$gamePlayer.direction(),0);
}
/******************************************************************************/




/*
[RETURN DOOR] MAP 2
===================
-----------------------------------------------------------------------------------------
NO NEED TO CHECK CONDITION JUST SET TRIGGER TO PLAYER TOUCH AND RUN THE TRANSFER CODE.
-----------------------------------------------------------------------------------------
*/
$gamePlayer.reserveTransfer(2, 4, 10,$gamePlayer.direction(),0);
/****************************************************************************************/
