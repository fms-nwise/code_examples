package tech.wyze;


public class PezDispenser {
    //Max Pez is a constant
    //final means the value can't be changed
    public static final int MAX_PEZ = 12;
    //m is a common prefix for member variables
    private String mCharacterName;
    private int mPezCount;

    //This is a Constructor
    public PezDispenser(String characterName) {
        mCharacterName = characterName;
        mPezCount = 0;
    }

    public boolean dispense() {
        boolean wasDispensed = false;
        if (!isEmpty()) {
            mPezCount--;
            wasDispensed = true;
        }
        return wasDispensed;
    }

    //Does bool compare to see if Pez is empty
    public boolean isEmpty() {
        return mPezCount == 0;
    }

    //void means the method returns nothing
    //now turns around and calls below, giving a default value of MAX_PEZ to load
    //this is how we can provide default values in Java
    public void load() {
        load(MAX_PEZ);
    }

    //I can give this method the same name as above because the params are different
    public void load(int pezAmount) {
        mPezCount += pezAmount;
    }


    public String getCharacterName() {
        //This is a Getter!
        //Getters and Setters are often called Properties in Java
        return mCharacterName;
    }

}
