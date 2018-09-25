package frc.team5883.robot;

import edu.wpi.first.wpilibj.DigitalInput;
import edu.wpi.first.wpilibj.IterativeRobot;
import edu.wpi.first.wpilibj.Timer;
import edu.wpi.first.wpilibj.smartdashboard.SmartDashboard;

public class Robot extends IterativeRobot {
    @Override
    public void robotInit() {

        System.out.println("Hello World! Beep Boop!");
    }


    public void autonomousInit() {

    }

    public void teleopInit() {

    }

    private int random = 0;
    DigitalInput limitSwitch1 = new DigitalInput(0);
    DigitalInput limitSwitch2 = new DigitalInput(1);
    public void teleopPeriodic() {

        random += 1;

        //wysyłanie

        SmartDashboard.putNumber("Timer", Math.round(Timer.getMatchTime()));
        SmartDashboard.putNumber("randomNumber", random);
        SmartDashboard.putBoolean("limitSwitch1", !limitSwitch1.get());
        SmartDashboard.putBoolean("limitSwitch2", !limitSwitch2.get());
        Timer.getMatchTime();

    }
}