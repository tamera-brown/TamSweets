package com.tp.bakery.service;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import com.tp.bakery.persistence.DessertInMemDAO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

@SpringBootTest
@ActiveProfiles("ServiceTesting")
public class DessertServiceTests {

    @Autowired
    DessertInMemDAO toTest;

    @BeforeEach
    public void setUp() throws NullDessertIdException, InvaildDessertIdException {

        List<Dessert> allDesserts = toTest.getAllDesserts();
        for (int i = 1; i < allDesserts.size(); i++) {

            toTest.deleteDessert(i);
        }

    }
    @Test
    public void addDessertGoldenPathTest() {
        try {
            Dessert test = new Dessert();

            test.setName("Lemon Pound Cake");
            test.setDescription("Made with lemons");
            test.setPrice(14.00);
            test.setImage("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg");

            Dessert added=toTest.addDessert(test);
            Dessert validate = toTest.getDessertById(1);


            assertEquals(1,added.getDessertId());
            assertEquals("Lemon Pound Cake",added.getName());
            assertEquals("Made with lemons",added.getDescription());
            assertEquals(14.00, added.getPrice());
            assertEquals("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg",added.getImage());


            assertEquals(1,validate.getDessertId());
            assertEquals("Lemon Pound Cake",validate.getName());
            assertEquals("Made with lemons",validate.getDescription());
            assertEquals(14.00, validate.getPrice());
            assertEquals("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg",validate.getImage());


            Dessert test2=new Dessert();
            test2.setName("Fruit Cake");
            test2.setDescription("Made with fresh fruit");
            test2.setPrice(17.00);
            test2.setImage("https://www.rockrecipes.com/wp-content/uploads/2019/10/Fruitcake-Loaf-Cake-close-up-of-cut-cake-and-slice-on-white-plate-480x480.jpg");
            Dessert added2=toTest.addDessert(test2);
            Dessert validate2=toTest.getDessertById(2);

            assertEquals(2,added2.getDessertId());
            assertEquals("Fruit Cake",added2.getName());
            assertEquals("Made with fresh fruit",added2.getDescription());
            assertEquals("https://www.rockrecipes.com/wp-content/uploads/2019/10/Fruitcake-Loaf-Cake-close-up-of-cut-cake-and-slice-on-white-plate-480x480.jpg", added2.getImage());
            assertEquals(17.00,added2.getPrice());

            assertEquals(2,validate2.getDessertId());
            assertEquals("Fruit Cake",validate2.getName());
            assertEquals("Made with fresh fruit",validate2.getDescription());
            assertEquals("https://www.rockrecipes.com/wp-content/uploads/2019/10/Fruitcake-Loaf-Cake-close-up-of-cut-cake-and-slice-on-white-plate-480x480.jpg", validate2.getImage());
            assertEquals(17.00,validate2.getPrice());


        } catch (NullDessertObjectException | NullDessertDescriptionException | NulllDessertNameException | InvaildDessertIdException | NullDessertIdException | InvalidDessertPriceException | InvalidDessertNameException | InvalidDessertDescriptionException | InvalidDessertImageException e) {
            fail();

        }
    }
    @Test
    public void addDesertNullObjectTest(){
        assertThrows(NullDessertObjectException.class,()-> toTest.addDessert(null));
    }
    @Test
    public void addDessertNullNameTest(){
        Dessert test = new Dessert();
        test.setName(null);
        test.setDescription("Sweet Icing");
        assertThrows(NulllDessertNameException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertNullDescriptionTest(){
        Dessert test= new Dessert();
        test.setName("Chocolate Cake");
        test.setDescription(null);
        test.setPrice(7.00);
        test.setImage("");
        assertThrows(NullDessertDescriptionException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertPriceLowerBound(){
        Dessert test=new Dessert();
        test.setName("Carrot Cake");
        test.setDescription("White icing");
        test.setImage("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg");
        test.setPrice((double) Integer.MIN_VALUE);

        assertThrows(InvalidDessertPriceException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertEmptyName(){
        Dessert test=new Dessert();
        test.setName("");
        test.setDescription("White icing");
        test.setImage("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg");
        test.setPrice(17.00);

        assertThrows(InvalidDessertNameException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertEmptyDescription(){
        Dessert test=new Dessert();
        test.setName("Pound Cake");
        test.setDescription("");
        test.setImage("https://preppykitchen.com/wp-content/uploads/2020/04/carrot-cake-Recipe-new.jpg");
        test.setPrice(17.00);

        assertThrows(InvalidDessertDescriptionException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertEmptyImage(){
        Dessert test=new Dessert();
        test.setName("Pound Cake");
        test.setDescription("Moist");
        test.setImage("");
        test.setPrice(17.00);

        assertThrows(InvalidDessertImageException.class,()->toTest.addDessert(test));
    }
}

