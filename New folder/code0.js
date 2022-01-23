gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects3= [];
gdjs.New_32sceneCode.GDplatformObjects1= [];
gdjs.New_32sceneCode.GDplatformObjects2= [];
gdjs.New_32sceneCode.GDplatformObjects3= [];
gdjs.New_32sceneCode.GDNewObjectObjects1= [];
gdjs.New_32sceneCode.GDNewObjectObjects2= [];
gdjs.New_32sceneCode.GDNewObjectObjects3= [];
gdjs.New_32sceneCode.GDNewObject2Objects1= [];
gdjs.New_32sceneCode.GDNewObject2Objects2= [];
gdjs.New_32sceneCode.GDNewObject2Objects3= [];
gdjs.New_32sceneCode.GDNewObject3Objects1= [];
gdjs.New_32sceneCode.GDNewObject3Objects2= [];
gdjs.New_32sceneCode.GDNewObject3Objects3= [];
gdjs.New_32sceneCode.GDNewObject4Objects1= [];
gdjs.New_32sceneCode.GDNewObject4Objects2= [];
gdjs.New_32sceneCode.GDNewObject4Objects3= [];
gdjs.New_32sceneCode.GDNewObject5Objects1= [];
gdjs.New_32sceneCode.GDNewObject5Objects2= [];
gdjs.New_32sceneCode.GDNewObject5Objects3= [];
gdjs.New_32sceneCode.GDNewObject6Objects1= [];
gdjs.New_32sceneCode.GDNewObject6Objects2= [];
gdjs.New_32sceneCode.GDNewObject6Objects3= [];
gdjs.New_32sceneCode.GDNewObject7Objects1= [];
gdjs.New_32sceneCode.GDNewObject7Objects2= [];
gdjs.New_32sceneCode.GDNewObject7Objects3= [];
gdjs.New_32sceneCode.GDNewObject8Objects1= [];
gdjs.New_32sceneCode.GDNewObject8Objects2= [];
gdjs.New_32sceneCode.GDNewObject8Objects3= [];
gdjs.New_32sceneCode.GDNewObject9Objects1= [];
gdjs.New_32sceneCode.GDNewObject9Objects2= [];
gdjs.New_32sceneCode.GDNewObject9Objects3= [];
gdjs.New_32sceneCode.GDNewObject10Objects1= [];
gdjs.New_32sceneCode.GDNewObject10Objects2= [];
gdjs.New_32sceneCode.GDNewObject10Objects3= [];
gdjs.New_32sceneCode.GDNewObject11Objects1= [];
gdjs.New_32sceneCode.GDNewObject11Objects2= [];
gdjs.New_32sceneCode.GDNewObject11Objects3= [];
gdjs.New_32sceneCode.GDNewObject12Objects1= [];
gdjs.New_32sceneCode.GDNewObject12Objects2= [];
gdjs.New_32sceneCode.GDNewObject12Objects3= [];
gdjs.New_32sceneCode.GDNewObject13Objects1= [];
gdjs.New_32sceneCode.GDNewObject13Objects2= [];
gdjs.New_32sceneCode.GDNewObject13Objects3= [];
gdjs.New_32sceneCode.GDNewObject14Objects1= [];
gdjs.New_32sceneCode.GDNewObject14Objects2= [];
gdjs.New_32sceneCode.GDNewObject14Objects3= [];
gdjs.New_32sceneCode.GDNewObject15Objects1= [];
gdjs.New_32sceneCode.GDNewObject15Objects2= [];
gdjs.New_32sceneCode.GDNewObject15Objects3= [];
gdjs.New_32sceneCode.GDNewObject16Objects1= [];
gdjs.New_32sceneCode.GDNewObject16Objects2= [];
gdjs.New_32sceneCode.GDNewObject16Objects3= [];
gdjs.New_32sceneCode.GDNewObject17Objects1= [];
gdjs.New_32sceneCode.GDNewObject17Objects2= [];
gdjs.New_32sceneCode.GDNewObject17Objects3= [];
gdjs.New_32sceneCode.GDNewObject18Objects1= [];
gdjs.New_32sceneCode.GDNewObject18Objects2= [];
gdjs.New_32sceneCode.GDNewObject18Objects3= [];
gdjs.New_32sceneCode.GDNewObject19Objects1= [];
gdjs.New_32sceneCode.GDNewObject19Objects2= [];
gdjs.New_32sceneCode.GDNewObject19Objects3= [];

gdjs.New_32sceneCode.conditionTrue_0 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.New_32sceneCode.conditionTrue_1 = {val:false};
gdjs.New_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.New_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects = Hashtable.newFrom({"NewObject2": gdjs.New_32sceneCode.GDNewObject2Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject3Objects1Objects = Hashtable.newFrom({"NewObject3": gdjs.New_32sceneCode.GDNewObject3Objects1});gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects2);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
gdjs.New_32sceneCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.New_32sceneCode.condition0IsTrue_0.val = true;
        gdjs.New_32sceneCode.GDPlayerObjects2[k] = gdjs.New_32sceneCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerObjects2.length = k;}if ( gdjs.New_32sceneCode.condition0IsTrue_0.val ) {
{
gdjs.New_32sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}}
if (gdjs.New_32sceneCode.condition1IsTrue_0.val) {
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("PlatformerObject").setMaxFallingSpeed(100);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(700);
}
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject6Objects1Objects = Hashtable.newFrom({"NewObject6": gdjs.New_32sceneCode.GDNewObject6Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject7Objects1Objects = Hashtable.newFrom({"NewObject7": gdjs.New_32sceneCode.GDNewObject7Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject13Objects1Objects = Hashtable.newFrom({"NewObject13": gdjs.New_32sceneCode.GDNewObject13Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject14Objects1Objects = Hashtable.newFrom({"NewObject14": gdjs.New_32sceneCode.GDNewObject14Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject15Objects1Objects = Hashtable.newFrom({"NewObject15": gdjs.New_32sceneCode.GDNewObject15Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject16Objects1Objects = Hashtable.newFrom({"NewObject16": gdjs.New_32sceneCode.GDNewObject16Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject17Objects1Objects = Hashtable.newFrom({"NewObject17": gdjs.New_32sceneCode.GDNewObject17Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject18Objects1Objects = Hashtable.newFrom({"NewObject18": gdjs.New_32sceneCode.GDNewObject18Objects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.New_32sceneCode.GDPlayerObjects1});gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject19Objects1Objects = Hashtable.newFrom({"NewObject19": gdjs.New_32sceneCode.GDNewObject19Objects1});gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].putAroundObject((gdjs.New_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.New_32sceneCode.GDPlayerObjects1[0] : null), 40, 270);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxFallingSpeed(700);
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
{gdjs.New_32sceneCode.conditionTrue_1 = gdjs.New_32sceneCode.condition0IsTrue_0;
gdjs.New_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7785652);
}
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: RED");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("255;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject2"), gdjs.New_32sceneCode.GDNewObject2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject2Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject2Objects1 */
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject2Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject2Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(600);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: BLUE");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject3"), gdjs.New_32sceneCode.GDNewObject3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject3Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject3Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject3Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject3Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(2);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Green");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;255;0");
}
}}

}


{


gdjs.New_32sceneCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject6"), gdjs.New_32sceneCode.GDNewObject6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject6Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject6Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject6Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject6Objects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(0).setNumber(3);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Phage");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{


gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setCanJump();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject7"), gdjs.New_32sceneCode.GDNewObject7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject7Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject7Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject7Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject7Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: common cold");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject13"), gdjs.New_32sceneCode.GDNewObject13Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject13Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject13Objects1 */
/* Reuse gdjs.New_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject13Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject13Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Covid-19");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject14"), gdjs.New_32sceneCode.GDNewObject14Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject14Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject14Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject14Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject14Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Cancer");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject15"), gdjs.New_32sceneCode.GDNewObject15Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject15Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject15Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject15Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject15Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Autism");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject16"), gdjs.New_32sceneCode.GDNewObject16Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject16Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject16Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject16Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject16Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Low IQ");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject17"), gdjs.New_32sceneCode.GDNewObject17Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject17Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject17Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject17Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject17Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: free will");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject18"), gdjs.New_32sceneCode.GDNewObject18Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject18Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject18Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject18Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject18Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("Target: Mortality");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewObject19"), gdjs.New_32sceneCode.GDNewObject19Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);

gdjs.New_32sceneCode.condition0IsTrue_0.val = false;
{
gdjs.New_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDPlayerObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_46New_9532sceneCode_46GDNewObject19Objects1Objects, false, runtimeScene, false);
}if (gdjs.New_32sceneCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewObject"), gdjs.New_32sceneCode.GDNewObjectObjects1);
/* Reuse gdjs.New_32sceneCode.GDNewObject19Objects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObject19Objects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObject19Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setString("You Win!");
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDNewObjectObjects1[i].setColor("0;0;0");
}
}}

}


{


{
}

}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDplatformObjects1.length = 0;
gdjs.New_32sceneCode.GDplatformObjects2.length = 0;
gdjs.New_32sceneCode.GDplatformObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects1.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects2.length = 0;
gdjs.New_32sceneCode.GDNewObjectObjects3.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject2Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject3Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject4Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject5Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject6Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject7Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject8Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject9Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject10Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject10Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject10Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject11Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject11Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject11Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject12Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject12Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject12Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject13Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject13Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject13Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject14Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject14Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject14Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject15Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject15Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject15Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject16Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject16Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject16Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject17Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject17Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject17Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject18Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject18Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject18Objects3.length = 0;
gdjs.New_32sceneCode.GDNewObject19Objects1.length = 0;
gdjs.New_32sceneCode.GDNewObject19Objects2.length = 0;
gdjs.New_32sceneCode.GDNewObject19Objects3.length = 0;

gdjs.New_32sceneCode.eventsList2(runtimeScene);
return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
