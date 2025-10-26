import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/models/tag';
import { FoodService } from '../services/food/food.service';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
  imports: [NgIf, NgFor, RouterLink],
})
export class TagsComponent implements OnInit {
  @Input()
  foodpagetags?: string[];
  @Input()
  justifycontent: string='center'
  tags?: Tag[] = [];
  constructor(private fs: FoodService) {}
  ngOnInit(): void {
    if(!this.foodpagetags)
    this.tags = this.fs.getalltag();
  }
}
