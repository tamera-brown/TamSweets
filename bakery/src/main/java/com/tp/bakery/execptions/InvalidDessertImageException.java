package com.tp.bakery.execptions;

public class InvalidDessertImageException extends Exception{
    public InvalidDessertImageException(String message){
        super(message);
    }
    public InvalidDessertImageException(String message, Throwable innerException){
        super(message,innerException);
    }
}
