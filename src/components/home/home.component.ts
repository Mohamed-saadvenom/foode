import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../app/services/food/food.service';
import { NgFor } from '@angular/common';
import { Foods } from '../../app/shared/models/food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SearchComponent } from '../header/search/search.component';
import { TagsComponent } from '../../app/tags/tags.component';
import { NotFoundComponent } from '../../app/not-found/not-found.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [NgFor, SearchComponent,RouterModule,NotFoundComponent,TagsComponent],
})
export class HomeComponent implements OnInit {
  foods: Foods[] = [];
  favorite: Foods[] = [];
  rating: number[] = []; // القيمة الحالية
  stars = Array(5); // عدد النجوم (5)

  constructor(private fs: FoodService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      if (params['searchitem'])
        this.foods = this.fs
          .getall()
          .filter((food) =>
            food.name.toLowerCase().includes(params['searchitem'].toLowerCase())
          );
      else if (params['tag']) {
        this.foods = this.fs.getallfoodbytag(params['tag']);
      } else this.foods = this.fs.getall();
    });
  }
  rate(index: number, value: number) {
    this.rating[index] = value; // تحديث تقييم العنصر حسب ترتيبه
  }
}
