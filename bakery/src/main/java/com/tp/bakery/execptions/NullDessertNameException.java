package com.tp.bakery.execptions;

public class NullDessertNameException extends Exception {
    public NullDessertNameException(String message){super(message);}
    public NullDessertNameException(String message, Throwable innerException){super(message,innerException);}
}
