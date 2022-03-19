import { Pipe, PipeTransform } from '@angular/core';
import { Dessert } from './interfaces/dessert';

@Pipe({
  name: 'dessertFilter'
})
export class DessertFilterPipe implements PipeTransform {

  transform(value: Dessert[], filterBy: string): Dessert[] {
    filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
    return filterBy ? value.filter((product: Dessert) =>
        product.name.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
}
}
