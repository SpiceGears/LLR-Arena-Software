// Define UI elements
var ui = {
    timer: document.getElementById('timer'),
    robotState: document.getElementById('robot-state'),
    gyro: {
        container: document.getElementById('gyro'),
        val: 0,
        offset: 0,
        visualVal: 0,
        arm: document.getElementById('gyro-arm'),
        number: document.getElementById('gyro-number')
    },
    example: {
        button: document.getElementById('example-button'),
        readout: document.getElementById('example-readout')
    },
	examplesecond: {
        readoutsecond: document.getElementById('example-readoutsecond')
    },
	blueScore: document.getElementById('PointsBlue'),
	
	redScore: document.getElementById('PointsRed'),
	
	redBallsRedTeam: {
        readout: document.getElementById('redBallsRedTeam')
    },
	blueBallsRedTeam: {
        readout: document.getElementById('blueBallsRedTeam')
    },
	cubesRedTeam: {
        readout: document.getElementById('cubesRedTeam')
    },
	faulesRedTeam: {
        readout: document.getElementById('faulesRedTeam')
    },
	secondPointsRedTeam: {
        readout: document.getElementById('secondPointsRedTeam')
    },
	parkedRobotsRedTeam: {
        readout: document.getElementById('parkedRobotsRedTeam')
    },
	redBallsBlueTeam: {
        readout: document.getElementById('redBallsBlueTeam')
    },
	blueBallsBlueTeam: {
        readout: document.getElementById('blueBallsBlueTeam')
    },
	cubesBlueTeam: {
        readout: document.getElementById('cubesBlueTeam')
    },
	faulesBlueTeam: {
        readout: document.getElementById('faulesBlueTeam')
    },
	secondPointsBlueTeam: {
        readout: document.getElementById('secondPointsBlueTeam')
    },
	parkedRobotsBlueTeam: {
        readout: document.getElementById('parkedRobotsBlueTeam')
    },

};

// Key Listeners

function onRobotConnection(connected) {
	var state = connected ? 'Robot connected!' : 'Robot disconnected.';
	console.log(state);
	ui.robotState.innerHTML = state;
}


// This button is just an example of triggering an event on the robot by clicking a button.
NetworkTables.addKeyListener('/SmartDashboard/redBallsRedTeam', (key, value) => {
    ui.redBallsRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/scoreBlue', (key, value) => {
	ui.blueScore.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/scoreRed', (key, value) => {
	ui.redScore.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/blueBallsRedTeam', (key, value) => {
    ui.blueBallsRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/cubesRedTeam', (key, value) => {
    ui.cubesRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/faulesRedTeam', (key, value) => {
    ui.faulesRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/secondPointsRedTeam', (key, value) => {
    ui.secondPointsRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/parkedRobotsRedTeam', (key, value) => {
    ui.parkedRobotsRedTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/redBallsBlueTeam', (key, value) => {
    ui.redBallsBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/blueBallsBlueTeam', (key, value) => {
    ui.blueBallsBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/cubesBlueTeam', (key, value) => {
    ui.cubesBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/secondPointsBlueTeam', (key, value) => {
    ui.secondPointsBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/faulesBlueTeam', (key, value) => {
    ui.faulesBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/parkedRobotsBlueTeam', (key, value) => {
    ui.parkedRobotsBlueTeam.readout.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/timer', (key, value) => {
    // This is an example of how a dashboard could display the remaining time in a match.
    // We assume here that value is an integer representing the number of seconds left.
    ui.timer.innerHTML = parseInt(value) < 0 ? '0:00' : Math.floor(parseInt(value) / 60) + ':' + (parseInt(value) % 60 < 10 ? '0' : '') + parseInt(value) % 60;
});

// Load list of prewritten autonomous modes
NetworkTables.addKeyListener('/SmartDashboard/autonomous/modes', (key, value) => {
    // Clear previous list
    while (ui.autoSelect.firstChild) {
        ui.autoSelect.removeChild(ui.autoSelect.firstChild);
    }
    // Make an option for each autonomous mode and put it in the selector
    for (let i = 0; i < value.length; i++) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(value[i]));
        ui.autoSelect.appendChild(option);
    }
    // Set value to the already-selected mode. If there is none, nothing will happen.
    ui.autoSelect.value = NetworkTables.getValue('/SmartDashboard/currentlySelectedMode');
});

// Load list of prewritten autonomous modes
NetworkTables.addKeyListener('/SmartDashboard/autonomous/selected', (key, value) => {
    ui.autoSelect.value = value;
});

// The rest of the doc is listeners for UI elements being clicked on
ui.example.button.onclick = function() {
    // Set NetworkTables values to the opposite of whether button has active class.
    NetworkTables.putValue('/SmartDashboard/example_variable', this.className != 'active');
};
// Reset gyro value to 0 on click
ui.gyro.container.onclick = function() {
    // Store previous gyro val, will now be subtracted from val for callibration
    ui.gyro.offset = ui.gyro.val;
    // Trigger the gyro to recalculate value.
    updateGyro('/SmartDashboard/drive/navx/yaw', ui.gyro.val);
};
// Update NetworkTables when autonomous selector is changed
ui.autoSelect.onchange = function() {
    NetworkTables.putValue('/SmartDashboard/autonomous/selected', this.value);
};
// Get value of arm height slider when it's adjusted
ui.armPosition.oninput = function() {
    NetworkTables.putValue('/SmartDashboard/arm/encoder', parseInt(this.value));
};

addEventListener('error',(ev)=>{
    ipc.send('windowError',{mesg:ev.message,file:ev.filename,lineNumber:ev.lineno})
})

// Gyro rotation
let updateGyro = (key, value) => {
    ui.gyro.val = value;
    ui.gyro.visualVal = Math.floor(ui.gyro.val - ui.gyro.offset);
    ui.gyro.visualVal %= 360;
    if (ui.gyro.visualVal < 0) {
        ui.gyro.visualVal += 360;
    }
    ui.gyro.arm.style.transform = `rotate(${ui.gyro.visualVal}deg)`;
    ui.gyro.number.innerHTML = ui.gyro.visualVal + 'º';
};
NetworkTables.addKeyListener('/SmartDashboard/drive/navx/yaw', updateGyro);

// The following case is an example, for a robot with an arm at the front.
NetworkTables.addKeyListener('/SmartDashboard/arm/encoder', (key, value) => {
    // 0 is all the way back, 1200 is 45 degrees forward. We don't want it going past that.
    if (value > 1140) {
        value = 1140;
    }
    else if (value < 0) {
        value = 0;
    }
    // Calculate visual rotation of arm
    var armAngle = value * 3 / 20 - 45;
    // Rotate the arm in diagram to match real arm
    ui.robotDiagram.arm.style.transform = `rotate(${armAngle}deg)`;
});
