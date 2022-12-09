import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Ipropertybase } from '../../../model/ipropertybase';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {

  //@ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;

  addPropertyForm: FormGroup;

  //SellRent = 1;

  listingView: Ipropertybase = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null,
    City: null,
    Image: null
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      Name: [null, Validators.required],
      SellRent: [null, Validators.required],
      Type: [null, Validators.required],
      Price: [null, Validators.required],
      City: [null, Validators.required]
    })
  }

  onBack()
  {
    this.router.navigate(['/']);
  }

  onSubmit() {
    console.log("SellRent=" + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
