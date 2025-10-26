import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  imports: [FormsModule]
})
export class SearchComponent implements OnInit {
searchitem:string = '';
  constructor(private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(params['searchitem'])
      this.searchitem = params['searchitem'];
    })
  }
  search(){
if(this.searchitem)
  this.router.navigateByUrl('/search/' +this.searchitem)
  }

}
