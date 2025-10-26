import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  imports: [RouterLink,NgIf]
})
export class NotFoundComponent  implements OnInit {

  @Input() visible:boolean=false
  @Input() notfoundmessage:string='nothing found'
  @Input() resetlink:string='reset'
  @Input() resetlinkroute:string='/'

  constructor() { }

  ngOnInit(): void {
  }

}
