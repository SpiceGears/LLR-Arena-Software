// RobotBuilder Version: 2.0
//
// This file was generated by RobotBuilder. It contains sections of
// code that are automatically generated and assigned by robotbuilder.
// These sections will be updated in the future when you export to
// Java from RobotBuilder. Do not put any code or make any change in
// the blocks indicating autogenerated code or it will be lost on an
// update. Deleting the comments indicating the section will prevent
// it from being updated in the future.


package org.usfirst.frc5883.SoftwareLLR;

import edu.wpi.first.wpilibj.DriverStation;
import edu.wpi.first.wpilibj.PWM;
import edu.wpi.first.wpilibj.TimedRobot;
import edu.wpi.first.wpilibj.command.Command;
import edu.wpi.first.wpilibj.command.Scheduler;
import edu.wpi.first.wpilibj.smartdashboard.SendableChooser;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;
import org.usfirst.frc5883.SoftwareLLR.commands.*;

/**
 * The VM is configured to automatically run this class, and to call the
 * functions corresponding to each mode, as described in the TimedRobot
 * documentation. If you change the name of this class or the package after
 * creating this project, you must also update the build.properties file in 
 * the project.
 */
public class Robot extends TimedRobot {

    Command autonomousCommand;
    SendableChooser<Command> chooser = new SendableChooser<>();

    public static OI oi;
    // BEGIN AUTOGENERATED CODE, SOURCE=ROBOTBUILDER ID=DECLARATIONS


    double redBallsBlueTeam = 0;
    double blueBallsBlueTeam = 0;
    double cubesBlueTeam = 0;
    double parkedRobotsBlueTeam = 0;
    double secondsPointsBlueTeam = 0;
    double faulesBlueTeam = 0;
    
    double redBallsRedTeam = 0;
    double blueBallsRedTeam = 0;
    double cubesRedTeam = 0;
    double parkedRobotsRedTeam = 0;
    double secondsPointsRedTeam = 0;
    double faulesRedTeam = 0;
    
    double scoreBlue = 0;
    double scoreRed = 0;
    double finalScoreBlue = 0;
    double finalScoreRed = 0;

    
    double oldTime = 0;
    double dTime = 0;
    double pkt = 0;
    
    double reset = 0;
    
    @Override
    public void robotInit() {
        RobotMap.init();
        
        oi = new OI();

        // Add commands to Autonomous Sendable Chooser
        // BEGIN AUTOGENERATED CODE, SOURCE=ROBOTBUILDER ID=AUTONOMOUS

        chooser.addDefault("Autonomous Command", new AutonomousCommand());

        // END AUTOGENERATED CODE, SOURCE=ROBOTBUILDER ID=AUTONOMOUS
        SmartDashboard.putData("Auto mode", chooser);
    }

    /**
     * This function is called when the disabled button is hit.
     * You can use it to reset subsystems before shutting down.
     */
    @Override
    public void disabledInit(){

    }

    @Override
    public void disabledPeriodic() {
        Scheduler.getInstance().run();
    }

    @Override
    public void autonomousInit() {
        autonomousCommand = chooser.getSelected();
        // schedule the autonomous command (example)
        if (autonomousCommand != null) autonomousCommand.start();
    }

    /**
     * This function is called periodically during autonomous
     */
    @Override
    public void autonomousPeriodic() {
        Scheduler.getInstance().run();
    }

    @Override
    public void teleopInit() {
    	SmartDashboard.putNumber("redBallsRedTeam", 0);
    	SmartDashboard.putNumber("blueBallsRedTeam", 0);
    	SmartDashboard.putNumber("cubesRedTeam", 0);
    	SmartDashboard.putNumber("parkedRobotsRedTeam", 0);
    	SmartDashboard.putNumber("redBallsBlueTeam", 0);
    	SmartDashboard.putNumber("blueBallsBlueTeam", 0);
    	SmartDashboard.putNumber("cubesBlueTeam", 0);
    	SmartDashboard.putNumber("parkedRobotsBlueTeam", 0);
    	SmartDashboard.putNumber("faulesBlueTeam", 0);
    	SmartDashboard.putNumber("faulesRedTeam", 0);
    	SmartDashboard.putNumber("secondPointsBlueTeam", 0);
    	SmartDashboard.putNumber("secondPointsRedTeam", 0);
    	SmartDashboard.putNumber("finalScoreBlue", 0);
    	SmartDashboard.putNumber("finalScoreRed", 0);
    	SmartDashboard.putNumber("scoreBlue", 0);
    	SmartDashboard.putNumber("scoreRed", 0);
    	SmartDashboard.putNumber("RPBlue", 0);
    	SmartDashboard.putNumber("RPRed", 0);
        if (autonomousCommand != null) autonomousCommand.cancel();
    }
    
    public PWM pwnOutHuman = new PWM(0);
    public PWM pwnOutTeams = new PWM(1);
    public PWM pwnOutCubeRed = new PWM(2);
    public PWM pwnOutCubeBlue = new PWM(3);
    


    @Override
    public void teleopPeriodic() {
    	
    	//int outPWN = (int) (255 * Math.random());
    	
    	double matchTime = (int) DriverStation.getInstance().getMatchTime();
    	SmartDashboard.putNumber("timer", DriverStation.getInstance().getMatchTime());
    	
    	redBallsRedTeam = SmartDashboard.getNumber("redBallsRedTeam", 0);
    	blueBallsRedTeam = SmartDashboard.getNumber("blueBallsRedTeam", 0);
    	cubesRedTeam = SmartDashboard.getNumber("cubesRedTeam", 0);
    	parkedRobotsRedTeam = SmartDashboard.getNumber("parkedRobotsRedTeam", 0);
    	redBallsBlueTeam = SmartDashboard.getNumber("redBallsBlueTeam", 0);
    	blueBallsBlueTeam = SmartDashboard.getNumber("blueBallsBlueTeam", 0);
    	cubesBlueTeam = SmartDashboard.getNumber("cubesBlueTeam", 0);
    	parkedRobotsBlueTeam = SmartDashboard.getNumber("parkedRobotsBlueTeam", 0);
    	faulesBlueTeam = SmartDashboard.getNumber("faulesBlueTeam", 0);
    	faulesRedTeam = SmartDashboard.getNumber("faulesRedTeam", 0);
    	
    	double newTime = System.nanoTime()/1000000000;
    	if(cubesBlueTeam > 0){
        	dTime += newTime - oldTime;
        	if(dTime > 0){
        		dTime = 0;
        		secondsPointsBlueTeam++;
        	}
    	}
    	if(cubesRedTeam > 0){
        	dTime += newTime - oldTime;;
        	if(dTime > 0){
        		dTime = 0;
        		secondsPointsRedTeam++;
        	}
    	}
    	oldTime = newTime;
    	
    	scoreBlue = redBallsBlueTeam*2 + blueBallsBlueTeam + cubesBlueTeam*15 + secondsPointsBlueTeam + parkedRobotsBlueTeam*30;
    	finalScoreBlue = redBallsBlueTeam*2 + blueBallsBlueTeam + cubesBlueTeam*15 + secondsPointsBlueTeam + parkedRobotsBlueTeam*30 - faulesBlueTeam;
    	
    	scoreRed = redBallsRedTeam*2 + blueBallsRedTeam + cubesRedTeam*15 + secondsPointsRedTeam + parkedRobotsRedTeam*30;
    	finalScoreRed = redBallsRedTeam*2 + blueBallsRedTeam + cubesRedTeam*15 + secondsPointsRedTeam + parkedRobotsRedTeam*30 - faulesRedTeam;
    	
    	if(DriverStation.getInstance().getMatchTime() < 0.3){	    
    	    double RPRed = 0;
    	    double RPBlue = 0;
    	if(finalScoreBlue > finalScoreRed){
    		RPBlue += 2;
    	}else if(finalScoreBlue < finalScoreRed){
    		RPRed += 2;
    	}else{
    		RPRed += 1;
    		RPBlue += 1;
    	}
    	if(redBallsBlueTeam+blueBallsBlueTeam >= 20){
    		RPBlue += 1;
    		if(cubesBlueTeam >= 3){
    			RPBlue += 1;
    		}
    	}
    	
    	if(redBallsRedTeam+blueBallsRedTeam >= 20){
    		RPRed += 1;
    		if(cubesRedTeam >= 3){
    			RPRed += 1;
    		}
    	}
    	SmartDashboard.putNumber("RPBlue", RPBlue);
    	SmartDashboard.putNumber("RPRed", RPRed);
    	}
    	SmartDashboard.putNumber("scoreBlue", scoreBlue);
    	SmartDashboard.putNumber("scoreRed", scoreRed);
    	SmartDashboard.putNumber("finalScoreBlue", finalScoreBlue);
    	SmartDashboard.putNumber("finalScoreRed", finalScoreRed);

    	
    	//Set outPut to arduino to change the leds colors
    	//0 dla zgaszonych 
    	//125 dla zapalonych
    	//255 maja migac
    	
    	//Human Player leds
    	if(matchTime > 120 && matchTime < 180) {
    		pwnOutHuman.setRaw(0);
    	} else if(matchTime < 120 && matchTime > 10) {
    		pwnOutHuman.setRaw(125);    		
    	} else if(matchTime <= 10){
    		pwnOutHuman.setRaw(255);
    	} else {
    		pwnOutHuman.setRaw(0);
    	}
    	
    	//TEAMS led
    	if(matchTime > 10 && matchTime < 180) {
    		pwnOutTeams.setRaw(125);
    	} else if(matchTime <= 10){
    		pwnOutTeams.setRaw(255);
    	} else {
    		pwnOutTeams.setRaw(0);
    	}
    	
    	//Cube red team LED
    	if (cubesRedTeam > 0) {
    		if(matchTime < 10) {
    			pwnOutCubeRed.setRaw(255);
    		} else {
    			pwnOutCubeRed.setRaw(125);
    		}
    	} else {
			pwnOutCubeRed.setRaw(0);
    	}
    	
    	//Cube blue team LED
    	if (cubesBlueTeam > 0) {
    		if(matchTime < 10) {
    			pwnOutCubeBlue.setRaw(255);
    		} else {
    			pwnOutCubeBlue.setRaw(125);
    		}
    	} else {
			pwnOutCubeBlue.setRaw(0);
    	}
    	
        Scheduler.getInstance().run();
    }
}

