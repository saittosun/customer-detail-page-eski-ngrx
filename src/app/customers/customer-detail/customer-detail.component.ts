import { Customer } from 'src/app/models/customer';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { map, take } from 'rxjs/operators';
import { LeadFacade } from 'src/app/leads/lead-store/lead.facade';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customer: Customer;
  customers: Customer[];

  constructor(private store: LeadFacade,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    // this.store.allLeads$;
    this.route.params.subscribe((params: Params) => {
      console.log(params.id);
      this.store.allLeads$.pipe(take(1), map(customers => {
        this.customers = customers;
        console.log(customers);
        return customers.find(customer => customer.id === +params.id)
      }
      )).subscribe(customer => this.customer = customer)
      console.log(this.customer);
    })
  }


  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }

}

