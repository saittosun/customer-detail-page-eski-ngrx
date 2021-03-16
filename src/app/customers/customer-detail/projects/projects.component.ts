import { LeadFacade } from 'src/app/leads/lead-store/lead.facade';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortable } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['projectName', 'status', 'date'];
  // dataSource: MatTableDataSource<Customer>;
  dataSource;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // dataSource = new MatTableDataSource(this.customer)
  constructor(private store: LeadFacade) {}

  ngOnInit(): void {
    // this.store.allLeads$.pipe(take(1), map(customers => {
    //     this.customers = customers;
    //     console.log(customers);
    //   })).subscribe()
    this.store.allLeads$.subscribe((results) => {
      if (!results) return;
      this.dataSource = new MatTableDataSource(results);
    });
  }
}
