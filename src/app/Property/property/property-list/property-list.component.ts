import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ipropertybase } from '../../../model/ipropertybase';
import { ListingsService } from '../../../services/listings.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  Properties: Ipropertybase[];

  constructor(private route: ActivatedRoute, private listingsService: ListingsService) { }

  ngOnInit(): void {

    if (this.route.snapshot.url.toString()) {
      this.SellRent = 2;
    }

    this.listingsService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.Properties = data;
        console.log(data);
      }, error => {
        console.log('httperror');
        console.log(error);
      }
    );
  }
}
