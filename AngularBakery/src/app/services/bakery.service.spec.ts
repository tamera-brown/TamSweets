import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController,
} from '@angular/common/http/testing';
import { BakeryService } from './bakery.service';
import { Dessert} from '../interfaces/dessert'
import {mockDessert1,mockDessert2,mockDessert3,mockDessertArray} from '../../mocks/mockDessert';

describe('BakeryService', () => {
  let service: BakeryService;
  let httpController: HttpTestingController;

  let url = 'http://localhost:8080/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(BakeryService);
    httpController = TestBed.inject(HttpTestingController);
  });

  afterEach(()=>{
    httpController=TestBed.inject(HttpTestingController)
  })

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getAllDesserts and return an array of Desserts', () => {
    service.getAllDesserts().subscribe((res) => {
      expect(res).toEqual(mockDessertArray);
    });
    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/desserts`,
    });

    req.flush(mockDessertArray);
});

it('should call getDessertById and return the appropriate Dessert', () => {
  const id = 1;

  service.getDessertById(id).subscribe((data) => {
    expect(data).toEqual(mockDessert1);
  });

  const req = httpController.expectOne({
    method: 'GET',
    url: `${url}/dessert/${id}`,
  });

  req.flush(mockDessert1);
});


it('should call editDessert and return the updated Dessert from the API', () => {
  const updatedDessert: Dessert = {
    dessertId:3,
    name:"M&M Cookies",
    description: "yummy",
    price :10.00,
    image:"some image"
  };

  service.editDessert(mockDessert3).subscribe((data) => {
    expect(data).toEqual(updatedDessert);
  });

  const req = httpController.expectOne({
    method: 'PUT',
    url: `${url}/editDessert`,
  });

  req.flush(updatedDessert);
});
it('should call addDessert and the API should return the Dessert that was added', () => {
  service.addDessert(mockDessert2).subscribe((data) => {
    expect(data).toEqual(mockDessert2);
  });

  const req = httpController.expectOne({
    method: 'POST',
    url: `${url}/addDessert`,
  });

  req.flush(mockDessert2);
});

it('should call deleteDessert and return the dessert that was deleted from the API', () => {
  const id=3
  service.deleteDessert(id).subscribe((data) => {
    expect(data).toEqual(mockDessert3);
  });

  const req = httpController.expectOne({
    method: 'DELETE',
    url: `${url}/deleteDessert/${mockDessert3.dessertId}`,
  });

  req.flush(mockDessert3);
});
});
