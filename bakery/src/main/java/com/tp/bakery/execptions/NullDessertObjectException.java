package com.tp.bakery.execptions;

public class NullDessertObjectException extends Exception {
    public NullDessertObjectException(String message){
        super(message);
    }
    public NullDessertObjectException(String message, Throwable innerException){
        super(message,innerException);
    }
}
