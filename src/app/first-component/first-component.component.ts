import { Component, OnInit } from '@angular/core';
import Category from 'src/app/types/Category';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name = 'Name';
  description = 'Description of Name';
  price = 1000;
  isAvailable = false;
  category: Category = Category.First;

  constructor() { }

  ngOnInit() {
  }

}
