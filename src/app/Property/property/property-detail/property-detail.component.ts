import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {

  public propertyId: number;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //this.propertyId = Number(this.route.snapshot.params['id']);
    this.propertyId = +this.route.snapshot.params['id'];

    // Calling a function when parameters are changed in a row
    this.route.params.subscribe(
      (params) => {
        this.propertyId = +params['id'];
      }
    );
  }

  onSelectNext() {
    this.propertyId ++;
    //this.router.navigate(['item-detail/' + this.propertyId]);
    this.router.navigate(['item-detail', this.propertyId]);
  }

}
