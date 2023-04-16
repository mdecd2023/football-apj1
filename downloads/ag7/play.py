
import sim
import sys
import time
import keyboard

# Connect to the simulation
sim.simxFinish(-1)
clientID = sim.simxStart('127.0.0.1', 19998, True, True, 5000, 5)

if clientID != -1:
    print('Hello,bubbleRob,我們是ag7分組')

    # Get handles for BubbleRob and its left and right motors
    res, bubbleRob = sim.simxGetObjectHandle(clientID, 'bubbleRob', sim.simx_opmode_oneshot_wait)
    res, leftMotor = sim.simxGetObjectHandle(clientID, 'leftMotor', sim.simx_opmode_oneshot_wait)
    res, rightMotor = sim.simxGetObjectHandle(clientID, 'rightMotor', sim.simx_opmode_oneshot_wait)
    leftMotor = 24
    rightMotor = 26
    bubbleRob = 23
    # Set the initial motor velocities to zero
    sim.simxSetJointTargetVelocity(clientID, leftMotor, 0, sim.simx_opmode_oneshot_wait)
    sim.simxSetJointTargetVelocity(clientID, rightMotor, 0, sim.simx_opmode_oneshot_wait)

    # Control BubbleRob using the keyboard
    while True:
        # Set the motor velocities based on the arrow keys being pressed
        if keyboard.is_pressed('up'):
            print("up")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, 7, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, 7, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('down'):
            print("down")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, -3, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, -3, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('left'):
            print("left")
            sim.simxSetJointTargetVelocity(clientID, leftMotor, -4, sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID, rightMotor, 4, sim.simx_opmode_oneshot_wait)
        elif keyboard.is_pressed('right'):
            print("right")
            sim.simxSetJointTargetVelocity(clientID,leftMotor , 4 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor , -4,sim.simx_opmode_oneshot_wait)
        else:
            # Stop the motors if no arrow keys are being pressed
            sim.simxSetJointTargetVelocity(clientID,leftMotor , 0 ,sim.simx_opmode_oneshot_wait)
            sim.simxSetJointTargetVelocity(clientID,rightMotor , 0 ,sim.simx_opmode_oneshot_wait)

        time.sleep(0.1)

else:
    print('Failed connecting to remote API server')