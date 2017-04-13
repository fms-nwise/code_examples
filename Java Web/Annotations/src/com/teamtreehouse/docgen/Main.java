package com.teamtreehouse.docgen;

import com.teamtreehouse.math.MathUtils;

import java.lang.reflect.Method;
import java.lang.reflect.Modifier;

public class Main {

    public static void main(String[] args) {



        /*        // Get a class object
        Class<?> clazz = MathUtils.class;

        // Get all declared methods
        Method[] methods = clazz.getDeclaredMethods();

        // Loop over methods
        for(Method m : methods) {
            //Display method name
            System.out.printf("name: %s%n", m.getName());

            //Display parameter count
            System.out.printf("\t# params: %s%n", m.getParameterCount());

            //Display return type
            System.out.printf("\treturn type: %s%n",m.getReturnType().getSimpleName());

            //Display modifiers
            int mods = m.getModifiers();
            String modStr = Modifier.toString(mods);

            System.out.printf("\tmodifiers: %s%n",modStr);
        }*/

        // TODO: Process the MathUtils class's annotations
        DocProcessor.process(MathUtils.class);


    }
}

