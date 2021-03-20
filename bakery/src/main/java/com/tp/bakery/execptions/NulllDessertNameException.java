package com.tp.bakery.execptions;

public class NulllDessertNameException extends Exception{
    public NulllDessertNameException(String message){
        super(message);
    }
    public NulllDessertNameException(String message, Throwable innerException){
        super(message,innerException);
    }
}
