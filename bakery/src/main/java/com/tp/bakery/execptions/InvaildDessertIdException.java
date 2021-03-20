package com.tp.bakery.execptions;

public class InvaildDessertIdException extends Exception{

    public InvaildDessertIdException(String message){
        super(message);
    }
    public InvaildDessertIdException(String message, Throwable innerexception){
        super(message,innerexception);
    }
}
