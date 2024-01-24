import { Component, OnInit } from '@angular/core';
import { DataviewServiceService } from '../service/dataview-service.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css']
})
export class DataViewComponent implements OnInit {
  allTableData: any;
  constructor(private dataService: DataviewServiceService) {

  }

  ngOnInit(): void {
    this.dataService.fetchProducts().subscribe(
      (data: any) => {
        console.log(data);
        this.allTableData = data;
      },
      (error: HttpErrorResponse) => {
        alert("something went wrong..!!")
      }
    )
  }

  onClickView(data: any) {
    window.open(data.image)
  }

}
