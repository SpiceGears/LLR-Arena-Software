// Define UI elements
var ui = {
    timer: document.getElementById('timer'),
    robotState: document.getElementById('robot-state'),
	
	team1: document.getElementById('Team1'),
	
	team2: document.getElementById('Team2'),
	
	team3: document.getElementById('Team3'),
	
	team4: document.getElementById('Team4'),
	
	blueScore: document.getElementById('PointsBlue'),
	
	redScore: document.getElementById('PointsRed'),
	
	redBallsRedTeam: document.getElementById('redBallsRedTeam'),

	blueBallsRedTeam: document.getElementById('blueBallsRedTeam'),

	cubesRedTeam: document.getElementById('cubesRedTeam'),

	faulesRedTeam: document.getElementById('faulesRedTeam'),

	secondPointsRedTeam: document.getElementById('secondPointsRedTeam'),

	parkedRobotsRedTeam: document.getElementById('parkedRobotsRedTeam'),

	redBallsBlueTeam: document.getElementById('redBallsBlueTeam'),

	blueBallsBlueTeam: document.getElementById('blueBallsBlueTeam'),

	cubesBlueTeam: document.getElementById('cubesBlueTeam'),

	faulesBlueTeam: document.getElementById('faulesBlueTeam'),

	secondPointsBlueTeam: document.getElementById('secondPointsBlueTeam'),

	parkedRobotsBlueTeam: document.getElementById('parkedRobotsBlueTeam'),
	
	finalScoreBlue: document.getElementById('finalScoreBlue'),
	
	finalScoreRed: document.getElementById('finalScoreRed'),
	
	RPRed: document.getElementById('RPRed'),
	
	RPBlue: document.getElementById('RPBlue'),

};

// Key Listeners

function onRobotConnection(connected) {
	var state = connected ? 'Robot connected!' : 'Robot disconnected.';
	console.log(state);
	ui.robotState.innerHTML = state;
}


// This button is just an example of triggering an event on the robot by clicking a button.
NetworkTables.addKeyListener('/SmartDashboard/redBallsRedTeam', (key, value) => {
    ui.redBallsRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/scoreBlue', (key, value) => {
	ui.blueScore.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/scoreRed', (key, value) => {
	ui.redScore.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/finalScoreBlue', (key, value) => {
	ui.finalScoreBlue.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/finalScoreRed', (key, value) => {
	ui.finalScoreRed.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/blueBallsRedTeam', (key, value) => {
    ui.blueBallsRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/cubesRedTeam', (key, value) => {
    ui.cubesRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/faulesRedTeam', (key, value) => {
    ui.faulesRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/secondPointsRedTeam', (key, value) => {
    ui.secondPointsRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/parkedRobotsRedTeam', (key, value) => {
    ui.parkedRobotsRedTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/redBallsBlueTeam', (key, value) => {
    ui.redBallsBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/blueBallsBlueTeam', (key, value) => {
    ui.blueBallsBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/cubesBlueTeam', (key, value) => {
    ui.cubesBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/secondPointsBlueTeam', (key, value) => {
    ui.secondPointsBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/faulesBlueTeam', (key, value) => {
    ui.faulesBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/parkedRobotsBlueTeam', (key, value) => {
    ui.parkedRobotsBlueTeam.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/Team1', (key, value) => {
    ui.team1.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/Team2', (key, value) => {
    ui.team2.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/Team3', (key, value) => {
    ui.team3.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/Team4', (key, value) => {
    ui.team4.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/RPRed', (key, value) => {
    ui.RPRed.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/RPBlue', (key, value) => {
    ui.RPBlue.innerHTML = value;
});

NetworkTables.addKeyListener('/SmartDashboard/timer', (key, value) => {
    // This is an example of how a dashboard could display the remaining time in a match.
    // We assume here that value is an integer representing the number of seconds left.
    ui.timer.innerHTML = parseInt(value) < 0 ? '0:00' : Math.floor(parseInt(value) / 60) + ':' + (parseInt(value) % 60 < 10 ? '0' : '') + parseInt(value) % 60;
});


