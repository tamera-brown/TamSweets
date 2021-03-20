package com.tp.bakery.execptions;

public class NullDessertIdException extends Exception{
    public NullDessertIdException(String message){
        super(message);
    }
    public NullDessertIdException(String message,Throwable innerException){
        super(message,innerException);
    }
}
