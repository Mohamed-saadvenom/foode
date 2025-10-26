import { Component ,OnInit} from '@angular/core';
import { Foods } from '../shared/models/food';
import { NgFor } from '@angular/common';
import { CartService } from '../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-foodpage',
  standalone: false,
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css',
})

export class FoodpageComponent implements OnInit {
  food!: Foods;
  rating: number[] = []; // القيمة الحالية
  stars = Array(5); // عدد النجوم (5)
  constructor(private activatedroute: ActivatedRoute, private fooddservice: FoodService,private cartservice:CartService,private router:Router) {
    activatedroute.params.subscribe((params) => {
      if (params['id']) this.food = fooddservice.getfoodbyid(params['id']);
    })
  }
ngOnInit(): void {
  // Initialization logic can go here
}
addtocart(){
  this.cartservice.addtocart(this.food)
  this.router.navigateByUrl('/cart')
}

}

