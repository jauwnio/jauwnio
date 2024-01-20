var gdjs;(function(n){const d=new n.Logger("Game manager"),h=l=>new Promise(e=>setTimeout(e,l)),u=l=>l.usedResources.map(e=>e.name);class c{constructor(e,s){this._notifyScenesForGameResolutionResize=!1;this._paused=!1;this._hasJustResumed=!1;this._sessionMetricsInitialized=!1;this._disableMetrics=!1;this._options=s||{},this._variables=new n.VariablesContainer(e.variables),this._data=e,this._resourcesLoader=new n.ResourceLoader(this,e.resources.resources,u(e),e.layouts),this._effectsManager=new n.EffectsManager,this._maxFPS=this._data.properties.maxFPS,this._minFPS=this._data.properties.minFPS,this._gameResolutionWidth=this._data.properties.windowWidth,this._gameResolutionHeight=this._data.properties.windowHeight,this._originalWidth=this._gameResolutionWidth,this._originalHeight=this._gameResolutionHeight,this._resizeMode=this._data.properties.sizeOnStartupMode,this._adaptGameResolutionAtRuntime=this._data.properties.adaptGameResolutionAtRuntime,this._scaleMode=e.properties.scaleMode||"linear",this._pixelsRounding=this._data.properties.pixelsRounding,this._antialiasingMode=this._data.properties.antialiasingMode,this._isAntialisingEnabledOnMobile=this._data.properties.antialisingEnabledOnMobile,this._renderer=new n.RuntimeGameRenderer(this,this._options.forceFullscreen||!1),this._watermark=new n.watermark.RuntimeWatermark(this,e.properties.authorUsernames,this._data.properties.watermark),this._sceneStack=new n.SceneStack(this),this._inputManager=new n.InputManager,this._injectExternalLayout=this._options.injectExternalLayout||"",this._debuggerClient=n.DebuggerClient?new n.DebuggerClient(this):null,this._isPreview=this._options.isPreview||!1,this._sessionId=null,this._playerId=null,this._embeddedResourcesMappings=new Map;for(const t of this._data.resources.resources)if(t.metadata)try{const i=JSON.parse(t.metadata);i?.embeddedResourcesMapping&&this._embeddedResourcesMappings.set(t.name,i.embeddedResourcesMapping)}catch{d.error("Some metadata of resources can not be successfully parsed.")}if(this._eventsBasedObjectDatas=new Map,this._data.eventsFunctionsExtensions)for(const t of this._data.eventsFunctionsExtensions)for(const i of t.eventsBasedObjects)this._eventsBasedObjectDatas.set(t.name+"::"+i.name,i);this.isUsingGDevelopDevelopmentEnvironment()&&d.info("This game will run on the development version of GDevelop APIs.")}setProjectData(e){this._data=e,this._resourcesLoader.setResources(e.resources.resources,u(e),e.layouts)}getAdditionalOptions(){return this._options}getRenderer(){return this._renderer}getVariables(){return this._variables}getSoundManager(){return this._resourcesLoader.getSoundManager()}getImageManager(){return this._resourcesLoader.getImageManager()}getFontManager(){return this._resourcesLoader.getFontManager()}getBitmapFontManager(){return this._resourcesLoader.getBitmapFontManager()}getJsonManager(){return this._resourcesLoader.getJsonManager()}getModel3DManager(){return this._resourcesLoader.getModel3DManager()}getInputManager(){return this._inputManager}getEffectsManager(){return this._effectsManager}getGameData(){return this._data}getEventsBasedObjectData(e){const s=this._eventsBasedObjectDatas.get(e);return s||(d.error('The game has no events-based object of the type "'+e+'"'),null)}getSceneData(e){let s=null;for(let t=0,i=this._data.layouts.length;t<i;++t){const r=this._data.layouts[t];if(e===void 0||r.name===e){s=r;break}}return s===null&&d.error('The game has no scene called "'+e+'"'),s}hasScene(e){let s=!1;for(let t=0,i=this._data.layouts.length;t<i;++t){const r=this._data.layouts[t];if(e===void 0||r.name==e){s=!0;break}}return s}getExternalLayoutData(e){let s=null;for(let t=0,i=this._data.externalLayouts.length;t<i;++t){const r=this._data.externalLayouts[t];if(r.name===e){s=r;break}}return s}getInitialObjectsData(){return this._data.objects||[]}getOriginalWidth(){return this._originalWidth}getOriginalHeight(){return this._originalHeight}getGameResolutionWidth(){return this._gameResolutionWidth}getGameResolutionHeight(){return this._gameResolutionHeight}setGameResolutionSize(e,s){if(this._gameResolutionWidth=e,this._gameResolutionHeight=s,this._adaptGameResolutionAtRuntime&&n.RuntimeGameRenderer&&n.RuntimeGameRenderer.getWindowInnerWidth&&n.RuntimeGameRenderer.getWindowInnerHeight){const t=n.RuntimeGameRenderer.getWindowInnerWidth(),i=n.RuntimeGameRenderer.getWindowInnerHeight();this._resizeMode==="adaptWidth"?this._gameResolutionWidth=this._gameResolutionHeight*t/i:this._resizeMode==="adaptHeight"&&(this._gameResolutionHeight=this._gameResolutionWidth*i/t)}this._renderer.updateRendererSize(),this._notifyScenesForGameResolutionResize=!0}setGameResolutionResizeMode(e){this._resizeMode=e,this._forceGameResolutionUpdate()}getGameResolutionResizeMode(){return this._resizeMode}setAdaptGameResolutionAtRuntime(e){this._adaptGameResolutionAtRuntime=e,this._forceGameResolutionUpdate()}getAdaptGameResolutionAtRuntime(){return this._adaptGameResolutionAtRuntime}getMinimalFramerate(){return this._minFPS}getScaleMode(){return this._scaleMode}getPixelsRounding(){return this._pixelsRounding}getAntialiasingMode(){return this._antialiasingMode}isAntialisingEnabledOnMobile(){return this._isAntialisingEnabledOnMobile}pause(e){this._paused!==e&&(this._paused=e,this._debuggerClient&&(this._paused?this._debuggerClient.sendGamePaused():this._debuggerClient.sendGameResumed()))}hasJustResumed(){return this._hasJustResumed}prioritizeLoadingOfScene(e){this._resourcesLoader.loadSceneResources(e)}getSceneLoadingProgress(e){return this._resourcesLoader.getSceneLoadingProgress(e)}areSceneAssetsLoaded(e){return this._resourcesLoader.areSceneAssetsLoaded(e)}areSceneAssetsReady(e){return this._resourcesLoader.areSceneAssetsReady(e)}loadAllAssets(e,s){this.loadFirstAssetsAndStartBackgroundLoading(this._getFirstSceneName(),s).then(e)}async loadFirstAssetsAndStartBackgroundLoading(e,s){try{const t=this._data.properties.loadingScreen.backgroundImageResourceName;t&&await this._resourcesLoader.getImageManager().loadResource(t),await Promise.all([this._loadAssetsWithLoadingScreen(!0,async i=>{await this._resourcesLoader.loadGlobalAndFirstSceneResources(e,i),this._resourcesLoader.loadAllSceneInBackground()},s),n.getAllAsynchronouslyLoadingLibraryPromise()])}catch(t){throw this._debuggerClient&&this._debuggerClient.onUncaughtException(t),t}}async loadSceneAssets(e,s){await this._loadAssetsWithLoadingScreen(!1,async t=>{await this._resourcesLoader.loadAndProcessSceneResources(e,t)},s)}async _loadAssetsWithLoadingScreen(e,s,t){this.pause(!0);const i=new n.LoadingScreenRenderer(this.getRenderer(),this._resourcesLoader.getImageManager(),this._data.properties.loadingScreen,this._data.properties.watermark.showWatermark,e);await s(async(a,o)=>{const g=Math.floor(100*a/o);i.setPercent(g),t&&t(g),i.renderIfNeeded()&&await h(1)}),await i.unload(),this.pause(!1)}_getFirstSceneName(){const e=this._data.firstLayout;return this.hasScene(e)?e:this.getSceneData().name}startGameLoop(){try{if(!this.hasScene()){d.error("The game has no scene.");return}this._forceGameResolutionUpdate(),this._sceneStack.push(this._getFirstSceneName(),this._injectExternalLayout),this._watermark.displayAtStartup(),this._setupGameVisibilityEvents();let e=0;this._hasJustResumed=!1,this._renderer.startGameLoop(s=>{try{if(this._paused||(e+=s,this._maxFPS>0&&1e3/e>this._maxFPS+7))return!0;const t=e;return e=0,this._notifyScenesForGameResolutionResize&&(this._sceneStack.onGameResolutionResized(),this._notifyScenesForGameResolutionResize=!1),this._sceneStack.step(t)?(this.getInputManager().onFrameEnded(),this._hasJustResumed=!1,!0):!1}catch(t){throw this._debuggerClient&&this._debuggerClient.onUncaughtException(t),t}}),setTimeout(()=>{this._setupSessionMetrics()},1e4)}catch(e){throw this._debuggerClient&&this._debuggerClient.onUncaughtException(e),e}}enableMetrics(e){this._disableMetrics=!e,e&&this._setupSessionMetrics()}_setupGameVisibilityEvents(){typeof navigator!="undefined"&&typeof document!="undefined"&&(document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&(this._hasJustResumed=!0)}),window.addEventListener("resume",()=>{this._hasJustResumed=!0},!1))}_setupSessionMetrics(){if(this._sessionMetricsInitialized||this._disableMetrics||this.isPreview()||typeof fetch=="undefined"||!this._data.properties.projectUuid)return;const e="https://api.gdevelop-app.com/analytics";this._playerId=this._makePlayerUuid();let s=0,t=0,i=Date.now();fetch(e+"/session",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({gameId:this._data.properties.projectUuid,playerId:this._playerId,game:{name:this._data.properties.name||"",packageName:this._data.properties.packageName||"",version:this._data.properties.version||"",location:window.location.href},platform:{isCordova:!!window.cordova,devicePlatform:typeof device!="undefined"&&device.platform||"",navigatorPlatform:typeof navigator!="undefined"?navigator.platform:"",hasTouch:typeof navigator!="undefined"?!!navigator.maxTouchPoints&&navigator.maxTouchPoints>2:!1}})}).then(a=>{if(!a.ok)throw console.error("Error while creating the session",a),new Error("Error while creating the session");return a}).then(a=>a.text()).then(a=>{this._sessionId=a}).catch(()=>{});const r=()=>{if(!this._sessionId)return;const a=Date.now();if(t+=a-i,i=a,t<5*1e3)return;const o=Math.floor(t/1e3)*1e3;s+=o,t-=o,navigator.sendBeacon(e+"/session-hit",JSON.stringify({gameId:this._data.properties.projectUuid,playerId:this._playerId,sessionId:this._sessionId,duration:Math.floor(s/1e3)}))};if(typeof navigator!="undefined"&&typeof document!="undefined"){document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?i=Date.now():r()}),window.addEventListener("pagehide",r,!1),window.addEventListener("pause",r,!1),window.addEventListener("resume",()=>{i=Date.now()},!1);const a=typeof safari=="object"&&safari.pushNotification,o=/electron/i.test(navigator.userAgent);(a||o)&&window.addEventListener("beforeunload",()=>{r()})}this._sessionMetricsInitialized=!0,this._sessionId=this._sessionId}_makePlayerUuid(){try{const e="GDJS-internal-player-uuid",s=localStorage.getItem(e);if(s)return s;const t=n.makeUuid();return localStorage.setItem(e,t),t}catch{return n.makeUuid()}}getSessionId(){return this._sessionId}getPlayerId(){return this._playerId}onWindowInnerSizeChanged(){this._forceGameResolutionUpdate()}_forceGameResolutionUpdate(){this.setGameResolutionSize(this._gameResolutionWidth,this._gameResolutionHeight)}startCurrentSceneProfiler(e){const s=this._sceneStack.getCurrentScene();return s?(s.startProfiler(e),!0):!1}stopCurrentSceneProfiler(){const e=this._sceneStack.getCurrentScene();!e||e.stopProfiler()}wasFirstSceneLoaded(){return this._sceneStack.wasFirstSceneLoaded()}getSceneStack(){return this._sceneStack}isPreview(){return this._isPreview}isUsingGDevelopDevelopmentEnvironment(){return this._options.environment==="dev"}getExtensionProperty(e,s){for(let t of this._data.properties.extensionProperties)if(t.extension===e&&t.property===s)return t.value;return null}resolveEmbeddedResource(e,s){const t=this._embeddedResourcesMappings.get(e);return t&&t[s]?t[s]:s}}n.RuntimeGame=c})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimegame.js.map
