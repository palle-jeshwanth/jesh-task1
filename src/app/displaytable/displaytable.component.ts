import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css'],
})
export class DisplaytableComponent implements OnInit {
  information: any;

  constructor(private serve: DataserviceService) {}

  ngOnInit(): void {
    this.serve.getinfo().subscribe((data) => {
      this.information = data;
    });
  }
}
