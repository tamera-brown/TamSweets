package com.tp.bakery.execptions;

public class InvaildDessertPriceException extends Exception{
    InvaildDessertPriceException(String message){
        super(message);
    }
    InvaildDessertPriceException(String message, Throwable innerException){
        super(message,innerException);
    }
}
