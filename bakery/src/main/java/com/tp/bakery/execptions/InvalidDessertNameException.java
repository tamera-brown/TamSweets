package com.tp.bakery.execptions;

public class InvalidDessertNameException extends Exception {

    public InvalidDessertNameException(String message){
    super(message);
    }
    public InvalidDessertNameException(String message, Throwable innerException){
        super(message,innerException);
    }
}

