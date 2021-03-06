import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';
import { Country } from 'src/app/models/country';
import { Countries } from 'src/app/models/countries';
import { Subject } from 'rxjs';
import { LeadFacade } from '../../leads/lead-store/lead.facade';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customername: any;
  id: number;
  leadForm: FormGroup;
  customers: Customer[] = [];
  countries: Country [] = new Countries().countries;
  edited: boolean = false;
  private destroyed$ = new Subject<boolean>();

  constructor(private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private store: LeadFacade) {}


    ngOnInit(): void {
      this.store.loadCustomers();
      this.store.allLeads$.pipe(take(1)).subscribe(customers => this.customers = customers);
      console.log(this.customers);
      this.createForm();
    }

  save(val) {
    const customer: Customer = {
      id: Date.now(),
      customerName: val.customerName,
      projectName: val.projectName,
      status: null,
      date: null,
      firstName: val.firstName,
      lastName: val.lastName,
      email: val.email,
      phonenumber: val.phonenumber,
      vat: val.vat,
      address: {
        addressline: val.addressline1,
        city: val.city,
        state: val.state,
        country: val.country,
        zip: val.zip
      },

    }
    this.store.saveCustomer(customer);
    console.log(this.store.loadCustomers());
    return customer.id;
  }

  private createForm() {
    const id = this.route.snapshot.params.id;
    console.log(id);
    this.leadForm = this.fb.group({
      customername: new FormControl(this.customers[id].customerName, Validators.required),
      addressline1: new FormControl(this.customers[id].address.addressline, Validators.required),
      addressline2: new FormControl(''),
      country: new FormControl(this.customers[id].address.country, Validators.required),
      city: new FormControl(this.customers[id].address.city, Validators.required),
      state: new FormControl(this.customers[id].address.state, Validators.required),
      zip: new FormControl(this.customers[id].address.zip, Validators.required),
      vat: new FormControl(this.customers[id].vat, Validators.required),
      firstname: new FormControl(this.customers[id].firstName, Validators.required),
      lastname: new FormControl(this.customers[id].lastName, Validators.required),
      email: new FormControl(this.customers[id].email, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      phonenumber: new FormControl(this.customers[id].phonenumber, [
        Validators.required,
        Validators.minLength(10),
        Validators.pattern("^[0-9]*$"),
      ]),
    })
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }


  onEditForm() {
    console.log('sait');
    this.edited = true;
    if (this.leadForm.invalid) {
      alert('You must fill the required fields!')
      return;
    };
    const id = this.save(this.leadForm.value);
    console.log(this.leadForm.value);
    this.router.navigate(['../'], {relativeTo: this.route});
    this.leadForm.reset()
    this.edited = false;
  }


}

