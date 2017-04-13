package com.teamtreehouse.boilerplate;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 *  Marks a field for generating a getter & setter according to the
 *  options provided.
 */
@Retention(RetentionPolicy.SOURCE)
@Target(ElementType.FIELD)
public @interface Property {
    /** Prefix to use for getters instead of default "get", "set", and "is" */
    String prefix() default "";

    /** Whether or not to include a setter */
    boolean setter() default true;
}
