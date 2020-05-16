import { Component, OnInit } from '@angular/core';
import { Offer } from '../offer.model';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss'],
})
export class OfferListComponent implements OnInit {
  // public title: string;
  // public summary: string;
  // public postDate: string;
  // public location: string;
  // public salary?: string;
  // public createdAt?: string;
  offers: Offer[] = [
    new Offer('Test', 'Lorem ipsum dolor', '2020-05-04', 'Brest', '35000'),
    new Offer('Test2', 'Lorem ipsum dolor', '2020-05-04', 'Brest', '35000'),
    new Offer('Test3', 'Lorem ipsum dolor', '2020-05-04', 'Brest', '35000'),
    new Offer('Test4', 'Lorem ipsum dolor', '2020-05-04', 'Brest', '35000'),
  ];

  constructor() {}

  ngOnInit() {}
}
