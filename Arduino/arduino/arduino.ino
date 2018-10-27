    int relay0 = 2; //HUMAN VALUE
    int relay1 = 3; // Team red leds
    int relay2 = 4; // team blue
    int relay3 = 5; // cube red
    int relay4 = 6; // cube blue

    int pwn0 = 9;
    int pwn1 = 10;
    int pwn2 = 11;
    int pwn3 = 12;

    int human_value = 0;
    int cubeRed_value = 0;
    int cubeBlue_value = 0;
    int teams_value = 0;

    
    void setup() {
      //output to leds
      pinMode(relay0, OUTPUT);
      pinMode(relay1, OUTPUT);
      pinMode(relay2, OUTPUT);
      pinMode(relay3, OUTPUT);
      pinMode(relay4, OUTPUT);
      //input from RIO
     pinMode(pwn0, INPUT);
     pinMode(pwn1, INPUT);
     pinMode(pwn2, INPUT);
     pinMode(pwn3, INPUT);
     
      digitalWrite(relay0, HIGH);
      digitalWrite(relay1, HIGH);
      digitalWrite(relay2, HIGH);
      digitalWrite(relay3, HIGH);
      digitalWrite(relay4, HIGH);

     Serial.begin(115200);
    }
    
    int x = 0;
    
    void loop() {
    human_value = pulseIn(pwn0, HIGH);
    teams_value = pulseIn(pwn1, HIGH);
    cubeRed_value = pulseIn(pwn2, HIGH);
    cubeBlue_value = pulseIn(pwn3, HIGH);
    
    //HUMAN PLAYER
    if (human_value > 600) {
      digitalWrite(relay0, LOW);
    }else if (human_value < 600){
      digitalWrite(relay0, HIGH);
    }
    //TEAMS
    if (teams_value > 600) {
      digitalWrite(relay1, LOW);
      digitalWrite(relay2, LOW);
    }else if (teams_value < 600){
      digitalWrite(relay1, HIGH);
      digitalWrite(relay2, HIGH);
    }
    //RED  CUBE
    if (cubeRed_value > 600) {
      digitalWrite(relay3, LOW);
    }else if (cubeRed_value < 600){
      digitalWrite(relay3, HIGH);
    }
    //BLUE CUBE
    if (cubeBlue_value > 600) {
      digitalWrite(relay4, LOW);
    }else if (cubeBlue_value < 600){
      digitalWrite(relay4, HIGH);
    }

    
    
    Serial.println("HUM TEM CR CB");  
    Serial.println(human_value);
    Serial.println(teams_value);
    Serial.println(cubeRed_value);
    Serial.println(cubeBlue_value);
    }
