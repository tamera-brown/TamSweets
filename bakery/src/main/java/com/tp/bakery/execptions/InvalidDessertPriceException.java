package com.tp.bakery.execptions;

public class InvalidDessertPriceException extends  Exception {
    public InvalidDessertPriceException(String message){
        super(message);
    }
    public InvalidDessertPriceException(String message, Throwable innerException){
        super(message,innerException);
    }
}
