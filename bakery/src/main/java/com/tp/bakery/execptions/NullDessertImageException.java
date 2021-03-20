package com.tp.bakery.execptions;

public class NullDessertImageException extends Exception {
    public NullDessertImageException(String message){
        super(message);
    }
    public NullDessertImageException(String message, Throwable innerException){
        super(message,innerException);
    }
}
