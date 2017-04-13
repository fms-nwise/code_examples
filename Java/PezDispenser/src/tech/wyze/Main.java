package tech.wyze;

public class Main {

    public static void main(String[] args) {
            // Your amazing code goes here...
            //println automatically puts a \n at the end
            System.out.println("We are making a new Pez Dispenser.");
            //Calling the class we just made
            PezDispenser dispenser = new PezDispenser("Bob Saggit");
            //Need to add () to method calls
            System.out.printf("The dispenser character is %s\n",
                    dispenser.getCharacterName());
            if (dispenser.isEmpty()) {
                System.out.println("It is currently empty");
            }
            System.out.println("Loading...");
            dispenser.load();
            if (!dispenser.isEmpty()) {
                System.out.println("Not Empty");
            }
            while (dispenser.dispense()) {
                System.out.println("Chomp!");
            }
            if (dispenser.isEmpty()) {
                System.out.println("Ate all the PEZ!");
            }
        }

    }
