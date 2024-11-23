package com.tp.bakery.persistence;

import com.tp.bakery.execptions.*;
import com.tp.bakery.model.Dessert;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.jdbc.core.JdbcTemplate;



import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class DessertPostgresDAOTests {
    @Autowired
    PostgresDessertDAO toTest;
    @Autowired
    JdbcTemplate template;

    @BeforeEach
    public void setUp(){
        template.update("truncate \"Menus\",\"Desserts\",\"DessertMenus\",\"Orders\" restart identity;");
        template.update("insert into \"Desserts\"(\"dessertName\",\"dessertDescription\",\"dessertPrice\", \"dessertImg\")\n" +
                "                values('Pineapple Cake','Diced Pineapples in cream cheese icing','16.00','https://thestayathomechef.com/wp-content/uploads/2020/02/Pineapple-Upsidedown-Cake-7.jpg');");

    }

    @Test
   public void addDessertGoldenPathTest(){
        try {
            Dessert partialDessert = new Dessert();
            partialDessert.setName("Pound Cake");
            partialDessert.setDescription("Moist");
            partialDessert.setPrice(25.00);
            partialDessert.setImage("https://www.biggerbolderbaking.com/wp-content/uploads/2021/01/Sour-Cream-Pound-Cake-Thumbnail-scaled.jpg");

            Dessert returned = toTest.addDessert(partialDessert);

            assertEquals(2, returned.getDessertId());
            assertEquals("Pound Cake", returned.getName());
            assertEquals("Moist", returned.getDescription());
            assertEquals(25.00,returned.getPrice());
            assertEquals("https://www.biggerbolderbaking.com/wp-content/uploads/2021/01/Sour-Cream-Pound-Cake-Thumbnail-scaled.jpg",returned.getImage());

            Dessert dessert = toTest.getDessertById(1);

            assertEquals(1, dessert.getDessertId());
            assertEquals("Pineapple Cake", dessert.getName());
            assertEquals("Diced Pineapples in cream cheese icing", dessert.getDescription());
            assertEquals(16.00,dessert.getPrice());
            assertEquals("https://thestayathomechef.com/wp-content/uploads/2020/02/Pineapple-Upsidedown-Cake-7.jpg",dessert.getImage());
        }catch (NullDessertObjectException | NullDessertNameException | NullDessertDescriptionException | NullDessertIdException | NullDessertPriceException | NullDessertImageException | InvalidDessertPriceException e){
            fail();
        }

    }
    @Test
    public void addDessertNullObjectTest() {

        assertThrows(NullDessertObjectException.class, () -> toTest.addDessert(null));
    }
    @Test
    public void addDessertNullNameTest(){
        Dessert test= new Dessert();
        test.setName(null);
        test.setDescription("Cake with Butter Cream Icing");
        test.setPrice(16.00);
        test.setImage("https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTg5MzEyNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTA0MzkyMn0.RSZCq8bh1oJdoe4FYxhd0MutXPsKy1CrWOF4T3Rb2l8/image.jpg?width=600&quality=85");
        assertThrows(NullDessertNameException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertNullDescriptionTest(){
        Dessert test= new Dessert();
        test.setName("Friut Cake");
        test.setDescription(null);
        test.setPrice(16.00);
        test.setImage("https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTg5MzEyNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTA0MzkyMn0.RSZCq8bh1oJdoe4FYxhd0MutXPsKy1CrWOF4T3Rb2l8/image.jpg?width=600&quality=85");
        assertThrows(NullDessertDescriptionException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertNullPriceTest(){
        Dessert test=new Dessert();
        test.setName("Strawberry Cheesecake");
        test.setDescription("Fresh Strawberries");
        test.setPrice(null);
        test.setImage("https://www.brit.co/media-library/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy8yMTg5MzEyNS9vcmlnaW4uanBnIiwiZXhwaXJlc19hdCI6MTY3NTA0MzkyMn0.RSZCq8bh1oJdoe4FYxhd0MutXPsKy1CrWOF4T3Rb2l8/image.jpg?width=600&quality=85");
        assertThrows(NullDessertPriceException.class,()->toTest.addDessert(test));
    }
    @Test
    public void addDessertNullImageTest(){
        Dessert test=new Dessert();
        test.setName("Chocolate Cake");
        test.setDescription("Rich Chocolate");
        test.setPrice(14.00);
        test.setImage(null);
        assertThrows(NullDessertImageException.class,()->toTest.addDessert(test));
    }

    @Test
    public void deleteDessertGlodenPathTest() throws NullDessertIdException {
        toTest.deleteDessert(1);
    }
    @Test
    public void deleteDessertNullIdTest(){
        assertThrows(NullDessertIdException.class,()->toTest.deleteDessert(null));
    }
    @Test
    public void getAllDesertsGlodenPathTest() {
        assertEquals(1,toTest.getAllDesserts().size());
        assertEquals(1, toTest.getAllDesserts().get(0).getDessertId());
        assertEquals("Pineapple Cake",toTest.getAllDesserts().get(0).getName());
        assertEquals("Diced Pineapples in cream cheese icing",toTest.getAllDesserts().get(0).getDescription());
        assertEquals(16.00,toTest.getAllDesserts().get(0).getPrice());
        assertEquals("https://thestayathomechef.com/wp-content/uploads/2020/02/Pineapple-Upsidedown-Cake-7.jpg",toTest.getAllDesserts().get(0).getImage());
    }
    @Test
    public void editDessertGlodenPathTest() {
        try {
            Dessert edit = toTest.getDessertById(1);
            edit.setName("Yellow Cake");
            edit.setDescription("White Icing");
            edit.setPrice(24.00);
            edit.setImage("https://www.thespruceeats.com/thmb/y9Sj9blj6uM14YUdM6FlZv2dhEI=/2667x2000/smart/filters:no_upscale()/piece-of-yellow-cake-with-vanilla-frosting-186880544-57eade013df78c690fe89768.jpg");

            int returned = toTest.editDessert(edit);

            assertEquals(1, returned);
            assertEquals("Yellow Cake", toTest.getAllDesserts().get(0).getName());
            assertEquals("White Icing", toTest.getAllDesserts().get(0).getDescription());
            assertEquals(24.00,toTest.getAllDesserts().get(0).getPrice());
            assertEquals("https://www.thespruceeats.com/thmb/y9Sj9blj6uM14YUdM6FlZv2dhEI=/2667x2000/smart/filters:no_upscale()/piece-of-yellow-cake-with-vanilla-frosting-186880544-57eade013df78c690fe89768.jpg",toTest.getAllDesserts().get(0).getImage());


        } catch (NullDessertIdException | NullDessertObjectException | NullDessertNameException | NullDessertDescriptionException | NullDessertPriceException | NullDessertImageException e) {
            fail();
        }
    }
    @Test
    public void editDessertNullId() throws NullDessertIdException {
        Dessert test= toTest.getDessertById(1);
        test.setName("Red Velvet Cake");
        test.setDescription("White Icing");
        test.setDessertId(null);
        test.setPrice(12.00);
        test.setImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg");
        assertThrows(NullDessertIdException.class,()->toTest.editDessert(test));
    }
    @Test
    public void editDessertNullDessertObject(){
        assertThrows(NullDessertObjectException.class,()->toTest.editDessert(null));
    }
    @Test
    public void editDessertNullDessertName(){
        Dessert test=toTest.getAllDesserts().get(0);
        test.setName(null);
        test.setDescription("Good");
        test.setPrice(11.00);
        test.setImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg");
        assertThrows(NullDessertNameException.class,()->toTest.editDessert(test));
    }
    @Test
    public void editDessertNullDescription(){
        Dessert test=toTest.getAllDesserts().get(0);
        test.setName("Strawberry Shortcake");
        test.setDescription(null);
        test.setPrice(12.00);
        test.setImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg");
        assertThrows(NullDessertDescriptionException.class,()->toTest.editDessert(test));
    }
    @Test
    public void editDeesertNullPrice(){
        Dessert test=new Dessert();
        test.setDessertId(1);
        test.setName("Cookie Cake");
        test.setDescription("Yummy");
        test.setPrice(null);
        test.setImage("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-oreo-truffles-078-1544222424.jpg");
        assertThrows(NullDessertPriceException.class,()->toTest.editDessert(test));
    }
    @Test
    public void editDeesertNullImage(){
        Dessert test=new Dessert();
        test.setDessertId(1);
        test.setName("Fruit Cake");
        test.setDescription("Fresh Fruit");
        test.setPrice(17.00);
        test.setImage(null);

        assertThrows(NullDessertImageException.class,()->toTest.editDessert(test));

    }


}
