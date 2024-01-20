gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDclickerObjects1= [];
gdjs.Untitled_32sceneCode.GDclickerObjects2= [];
gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1= [];
gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects2= [];
gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1= [];
gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects2= [];
gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1= [];
gdjs.Untitled_32sceneCode.GDpointsPerClickObjects2= [];
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1= [];
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects2= [];
gdjs.Untitled_32sceneCode.GDBlueDotBarObjects1= [];
gdjs.Untitled_32sceneCode.GDBlueDotBarObjects2= [];
gdjs.Untitled_32sceneCode.GDPointCounterObjects1= [];
gdjs.Untitled_32sceneCode.GDPointCounterObjects2= [];


gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("buy_clicks"), gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1);
gdjs.copyArray(runtimeScene.getObjects("clicker"), gdjs.Untitled_32sceneCode.GDclickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("pointsPerClick"), gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1);
{gdjs.playerAuthentication.displayAuthenticationBanner(runtimeScene);
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1[i].getBehavior("Text").setText("Points Per Click: " + ((gdjs.Untitled_32sceneCode.GDclickerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDclickerObjects1[0].getVariables()).getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].SetLabelText("+1 POINT PER CLICK \nCOST: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].getVariables().getFromIndex(0)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("clicker"), gdjs.Untitled_32sceneCode.GDclickerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDclickerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDclickerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDclickerObjects1[k] = gdjs.Untitled_32sceneCode.GDclickerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDclickerObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PointCounter"), gdjs.Untitled_32sceneCode.GDPointCounterObjects1);
/* Reuse gdjs.Untitled_32sceneCode.GDclickerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)).add((gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDclickerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDclickerObjects1[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)).setNumber(Math.ceil((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PointCounter"), gdjs.Untitled_32sceneCode.GDPointCounterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)) >= (gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(1))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPointCounterObjects1[k] = gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPointCounterObjects1 */
gdjs.copyArray(runtimeScene.getObjects("levelIndicator"), gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(1)).mul(1.5);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(1)).setNumber(Math.ceil(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(1).getAsNumber()));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetMaxValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(1))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1[i].getBehavior("Text").setText("Current Level: " + (gdjs.RuntimeObject.getVariableString(gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1[i].getVariables().getFromIndex(0))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PointCounter"), gdjs.Untitled_32sceneCode.GDPointCounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("buy_clicks"), gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[k] = gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)) >= (gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[0].getVariables()).getFromIndex(0))) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPointCounterObjects1[k] = gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPointCounterObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1 */
gdjs.copyArray(runtimeScene.getObjects("clicker"), gdjs.Untitled_32sceneCode.GDclickerObjects1);
gdjs.copyArray(runtimeScene.getObjects("pointsPerClick"), gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)).sub((gdjs.RuntimeObject.getVariableNumber(((gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[0].getVariables()).getFromIndex(0))));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDclickerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDclickerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDclickerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].getVariables().getFromIndex(0)).mul(2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].SetLabelText("+1 POINT PER CLICK \nCOST: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1[i].getVariables().getFromIndex(0)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1[i].getBehavior("Text").setText("Points Per Click: " + ((gdjs.Untitled_32sceneCode.GDclickerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDclickerObjects1[0].getVariables()).getFromIndex(0).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PointCounter"), gdjs.Untitled_32sceneCode.GDPointCounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("buy_autoClicker"), gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[k] = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].getVariableNumber(gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].getVariables().getFromIndex(1)) <= ((gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDPointCounterObjects1[0].getVariables()).getFromIndex(0).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[k] = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPointCounterObjects1 */
/* Reuse gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1 */
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AutoClicker");
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].getVariables().getFromIndex(0)).add(1);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)).sub(((gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[0].getVariables()).getFromIndex(1).getAsNumber());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].getVariables().getFromIndex(1)).mul(2);
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].SetLabelText("+1 POINT PER SECOND\nCOST: " + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[i].getVariables().getFromIndex(1)))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "AutoClicker") >= 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PointCounter"), gdjs.Untitled_32sceneCode.GDPointCounterObjects1);
gdjs.copyArray(runtimeScene.getObjects("buy_autoClicker"), gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].returnVariable(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0)).add(((gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1[0].getVariables()).getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].SetValue((gdjs.RuntimeObject.getVariableNumber(gdjs.Untitled_32sceneCode.GDPointCounterObjects1[i].getVariables().getFromIndex(0))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "AutoClicker");
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDclickerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDclickerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDlevelIndicatorObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbuy_9595clicksObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpointsPerClickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpointsPerClickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbuy_9595autoClickerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDBlueDotBarObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDBlueDotBarObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDPointCounterObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPointCounterObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
