package com.tp.bakery.execptions;

public class InvalidDessertDescriptionException extends Exception {
    public InvalidDessertDescriptionException(String message){
        super(message);
    }
    public InvalidDessertDescriptionException(String message, Throwable innerException){
        super(message,innerException);
    }
}
