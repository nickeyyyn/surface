/****************** 
 * Choicertt Test *
 ******************/

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});
var my = psychoJS;

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new Color([0, 0, 0]),
  units: 'norm'
});

// store info about the experiment session:
my.expName = 'choiceRTT';  // from the Builder filename that created this script
my.expInfo = {'participant': '', 'condition': '1'};


// set up the experiment:
psychoJS.schedule(setupExperiment);

// register all available resources and download them:
psychoJS.scheduleResources();

// dialog box:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: my.expInfo,
  title: my.expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(() => (psychoJS.gui.dialogComponent.button === 'OK'), flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin);
flowScheduler.add(instructionsRoutineEachFrame);
flowScheduler.add(instructionsRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(thanksRoutineBegin);
flowScheduler.add(thanksRoutineEachFrame);
flowScheduler.add(thanksRoutineEnd);
flowScheduler.add(quitPsychoJS);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS);

psychoJS.start();


function setupExperiment() {
  if (psychoJS.status === PsychoJS.Status.NOT_CONFIGURED) {
    psychoJS.status = PsychoJS.Status.CONFIGURING;

    psychoJS.configure('config.json')
    .then( config => {

      // An ExperimentHandler isn't essential but helps with data saving
      psychoJS.experiment = new ExperimentHandler({extraInfo: my.expInfo});

      /*
      // logging:
      my.logger.console.setLevel(psychoJS.logging.WARNING);
      my.logger.server.set({'level':psychoJS.logging.WARNING, 'saveTo':'EXPERIMENT_SERVER', 'experimentInfo': my.expInfo});*/

      // change status to leave setupExperiment loop:
      psychoJS.status = PsychoJS.Status.CONFIGURED;
    });
  }

  // the loop will return until the configuration is completed
  // at which point the status changes to CONFIGURED
  if (psychoJS.status === PsychoJS.Status.CONFIGURED) {
    psychoJS.status = PsychoJS.Status.STARTED;
    return Scheduler.Event.NEXT;
  } else
    return Scheduler.Event.FLIP_REPEAT;
}

function updateInfo() {
  my.expInfo['date'] = MonotonicClock.getDateStr();  // add a simple timestamp
  my.expInfo['expName'] = my.expName;

  // store frame rate of monitor if we can measure it successfully
  my.expInfo['frameRate'] = my.window.getActualFrameRate();
  if (typeof my.expInfo['frameRate'] !== 'undefined')
    my.frameDur = 1.0/Math.round(my.expInfo['frameRate']);
  else
    my.frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  addInfoFromUrl(my.expInfo);

  return Scheduler.Event.NEXT;
}

function experimentInit() {
  // Initialize components for Routine "instructions"
  my.instructionsClock = new Clock();
  my.image = new ImageStim({
    win : my.window,
    name : 'my.image', 
    image : (('guidance1_' + my.expInfo['condition']) + '.png'), mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  my.text_2 = new TextStim({
    win : my.window,
    name : 'my.text_2',
    text : '按任意键继续',
    font : 'Arial',
    pos : [0, (- 0.8)], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new Color('black'),  opacity : 1,
    depth : -2.0 
  });
  
  // Initialize components for Routine "main"
  my.mainClock = new Clock();
  my.targImage = new ImageStim({
    win : my.window,
    name : 'my.targImage', units : 'norm', 
    image : my.stimulus, mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  my.text = new TextStim({
    win : my.window,
    name : 'my.text',
    text : '1   2   3   4   5   6   7',
    font : 'Arial',
    pos : [0, (- 0.88)], height : 0.05,  wrapWidth : undefined, ori: 0,
    color : new Color('black'),  opacity : 1,
    depth : -1.0 
  });
  
  // Initialize components for Routine "thanks"
  my.thanksClock = new Clock();
  my.image_2 = new ImageStim({
    win : my.window,
    name : 'my.image_2', 
    image : (('guidance5_' + my.expInfo['condition']) + '.png'), mask : undefined,
    ori : 0, pos : [0, 0], size : [2, 2],
    color : new Color ([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  // Create some handy timers
  my.globalClock = new Clock();  // to track the time since experiment started
  my.routineTimer = new CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  my.t = 0;
  my.instructionsClock.reset(); // clock
  my.frameN = -1;
  // update component parameters for each repeat
  my.startInst = new BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  my.instructionsComponents = [];
  my.instructionsComponents.push(my.image);
  my.instructionsComponents.push(my.startInst);
  my.instructionsComponents.push(my.text_2);
  
  for (const thisComponent of my.instructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  my.t = my.instructionsClock.getTime();
  my.frameN = my.frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *my.image* updates
  if (my.t >= 0.0 && my.image.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.image.tStart = my.t;  // (not accounting for frame time here)
    my.image.frameNStart = my.frameN;  // exact frame index
    my.image.setAutoDraw(true);
  }
  
  // *my.startInst* updates
  if (my.t >= 0.0 && my.startInst.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.startInst.tStart = my.t;  // (not accounting for frame time here)
    my.startInst.frameNStart = my.frameN;  // exact frame index
    my.startInst.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    my.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (my.startInst.status === PsychoJS.Status.STARTED) {
    let theseKeys = my.eventManager.getKeys();
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *my.text_2* updates
  if (my.t >= 0.0 && my.text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.text_2.tStart = my.t;  // (not accounting for frame time here)
    my.text_2.frameNStart = my.frameN;  // exact frame index
    my.text_2.setAutoDraw(true);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of my.instructionsComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  for (const thisComponent of my.instructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
  my.routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  my.trials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: my.expInfo, originPath: undefined,
    trialList: (my.expInfo['condition'] + '.xlsx'),
    seed: undefined, name: 'my.trials'});
  psychoJS.experiment.addLoop(my.trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of my.trials) {
    thisScheduler.add(importTrialAttributes(thisTrial));
    thisScheduler.add(mainRoutineBegin);
    thisScheduler.add(mainRoutineEachFrame);
    thisScheduler.add(mainRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}

function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(my.trials);
  psychoJS.experiment.save({
    attributes: my.trials.getAttributes()
  });

  return Scheduler.Event.NEXT;
}

function mainRoutineBegin() {
  //------Prepare to start Routine 'main'-------
  my.t = 0;
  my.mainClock.reset(); // clock
  my.frameN = -1;
  // update component parameters for each repeat
  my.targImage.setImage(my.stimulus);
  my.response = new BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  my.mainComponents = [];
  my.mainComponents.push(my.targImage);
  my.mainComponents.push(my.text);
  my.mainComponents.push(my.response);
  
  for (const thisComponent of my.mainComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function mainRoutineEachFrame() {
  //------Loop for each frame of Routine 'main'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  my.t = my.mainClock.getTime();
  my.frameN = my.frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *my.targImage* updates
  if (my.t >= 0 && my.targImage.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.targImage.tStart = my.t;  // (not accounting for frame time here)
    my.targImage.frameNStart = my.frameN;  // exact frame index
    my.targImage.setAutoDraw(true);
  }
  
  // *my.text* updates
  if (my.t >= 0.0 && my.text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.text.tStart = my.t;  // (not accounting for frame time here)
    my.text.frameNStart = my.frameN;  // exact frame index
    my.text.setAutoDraw(true);
  }
  
  // *my.response* updates
  if (my.t >= 0.0 && my.response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.response.tStart = my.t;  // (not accounting for frame time here)
    my.response.frameNStart = my.frameN;  // exact frame index
    my.response.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    my.response.clock.reset();  // now t=0
    my.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (my.response.status === PsychoJS.Status.STARTED) {
    let theseKeys = my.eventManager.getKeys({keyList:['1', '2', '3', '4', '5', '6', '7']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      if (my.response.keys.length == 0) {  // then this was the first keypress
        my.response.keys = theseKeys[0];  // just the first key pressed
        my.response.rt = my.response.clock.getTime();
        // a response ends the routine
        continueRoutine = false;
      }
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of my.mainComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function mainRoutineEnd() {
  //------Ending Routine 'main'-------
  for (const thisComponent of my.mainComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(my.response.keys) >= 0) {    // No response was made
      my.response.keys = undefined;
  }
  my.experiment.addData('my.response.keys', my.response.keys);
  if (my.response.keys != undefined) {  // we had a response
      my.experiment.addData('my.response.rt', my.response.rt);
      my.routineTimer.reset();
      }
  // the Routine "main" was not non-slip safe, so reset the non-slip timer
  my.routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

function thanksRoutineBegin() {
  //------Prepare to start Routine 'thanks'-------
  my.t = 0;
  my.thanksClock.reset(); // clock
  my.frameN = -1;
  my.routineTimer.add(2.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  my.thanksComponents = [];
  my.thanksComponents.push(my.image_2);
  
  for (const thisComponent of my.thanksComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

function thanksRoutineEachFrame() {
  //------Loop for each frame of Routine 'thanks'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  my.t = my.thanksClock.getTime();
  my.frameN = my.frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *my.image_2* updates
  if (my.t >= 0.0 && my.image_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    my.image_2.tStart = my.t;  // (not accounting for frame time here)
    my.image_2.frameNStart = my.frameN;  // exact frame index
    my.image_2.setAutoDraw(true);
  }
  my.frameRemains = 0.0 + 2.0 - my.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (my.image_2.status === PsychoJS.Status.STARTED && my.t >= my.frameRemains) {
    my.image_2.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of my.thanksComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && my.routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}

function thanksRoutineEnd() {
  //------Ending Routine 'thanks'-------
  for (const thisComponent of my.thanksComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}

function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      my.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}

function importTrialAttributes(thisTrial) {
  return function () {
    psychoJS.importAttributes(thisTrial);

    return Scheduler.Event.NEXT;
  };
}

function quitPsychoJS() {
  my.window.close();
  psychoJS.quit();

  return Scheduler.Event.QUIT;
}
