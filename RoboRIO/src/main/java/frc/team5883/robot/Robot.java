package frc.team5883.robot;

import edu.wpi.first.wpilibj.IterativeRobot;
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

    private int xd = 0;

    public void teleopPeriodic() {

        xd += 1;

        //wysyłanie
        SmartDashboard.putNumber("Losowa liczba: ", xd);

    }
}