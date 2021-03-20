package com.tp.bakery.execptions;

public class NullDessertPriceException extends Exception {
    public NullDessertPriceException(String message){
        super(message);
    }
    public NullDessertPriceException(String message, Throwable innerException){
        super(message,innerException);
    }
}
