import { Component, OnInit } from '@angular/core';

import { Court } from 'src/app/models/Court';
import { CourtServicesService } from 'src/app/services/court-services.service';

@Component({
  selector: 'app-courts',
  templateUrl: './courts.component.html',
  styleUrls: ['./courts.component.css'],
})
export class CourtsComponent implements OnInit {
  constructor(private courtService: CourtServicesService) {}

  ngOnInit(): void {
    this.courtService.getAllCourts().then((resp) => {
      let userString = JSON.stringify(resp);
      this.allCourts = JSON.parse(userString);
    });
  }

  allCourts: Court[] = [];
}
