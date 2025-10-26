import { Injectable } from '@angular/core';
import { Foods } from '../../shared/models/food';
import { Tag } from '../../shared/models/tag';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  getfoodbyid(id: number): Foods {
    return this.getall().find((food) => food.id == id)!;
  }

  getallfoodbytag(tag: string): Foods[] {
    // return tag == 'All'
    //   ? this.getall()
    //   : this.getall().filter((food) => food.tags?.includes(tag));
    if (tag == 'All') return this.getall();
    else return this.getall().filter((food) => food.tags?.includes(tag));
  }
  getalltag(): Tag[] {
    return [
      { name: 'fastfood', count: 4 },
      { name: 'pizza', count: 3 },
      { name: 'hamburger', count: 1 },
      { name: 'slowfood', count: 3 },
      { name: 'lunch', count: 1 },
      { name: 'fry', count: 1 },
      { name: 'soap', count: 1 },
    ];
  }
  getall(): Foods[] {
    return [
      {
        id: 1,
        name: 'pizza pepperoni',
        cooktime: '10-20',
        price: 10,
        favorite: false,
        star: 4,
        tags: ['fastfood', 'pizza'],
        imageurl: '/assets/food1.jpg',

        origins: ['italy'],
      },
      {
        id: 2,
        name: 'meatball',
        cooktime: '20-30',
        price: 20,
        favorite: true,
        star: 4.7,
        tags: ['slowfood', 'lunch'],
        imageurl: '/assets/food2.jpg',

        origins: ['persia', 'middle east', 'china'],
      },
      {
        id: 3,
        name: 'Hamburger',
        cooktime: '10-15',
        price: 5,
        favorite: false,
        star: 3.5,
        tags: ['fastfood', 'hamburger'],
        imageurl: '/assets/download.png',

        origins: ['germany', 'us'],
      },
      {
        id: 4,
        name: 'fried potatoes',
        cooktime: '15-20',
        price: 2,
        favorite: true,
        star: 3.0,
        tags: ['slowfood', 'fry'],
        imageurl: '/assets/food4.jpg',

        origins: ['belgium', 'france'],
      },
      {
        id: 5,
        name: 'chicken soap',
        cooktime: '40-50',
        price: 11,
        favorite: true,
        star: 3.0,
        tags: ['slowfood', 'soap'],
        imageurl: '/assets/food5.jpg',

        origins: ['india', 'asia'],
      },
      {
        id: 6,
        name: 'vegetabales pizza',
        cooktime: '40-50',
        price: 9,
        favorite: false,
        star: 3.0,
        tags: ['fastfood', 'pizza'],
        imageurl: '/assets/do1wnload.png',

        origins: ['indian'],
      },
      {
        id: 7,
        name: 'vegetabales spicy pizza',
        cooktime: '20-30',
        price: 10,
        favorite: false,
        star: 4.0,
        tags: ['fastfood', 'pizza'],
        imageurl: '/assets/image8.jpg',

        origins: ['italy'],
      },
    ];
  }
}
