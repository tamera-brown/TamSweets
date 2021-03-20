package com.tp.bakery.execptions;

public class NullDessertDescriptionException extends Exception{
    public NullDessertDescriptionException(String message){
        super(message);
    }
    public NullDessertDescriptionException(String message, Throwable innerException){
        super(message,innerException);
    }
}
