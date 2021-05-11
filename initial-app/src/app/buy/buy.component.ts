import { Component, OnInit } from '@angular/core';
import {TestServiceService} from "../services/test-service.service"

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

  constructor(private test:TestServiceService) { }

  ngOnInit(): void {
    this.test.makeTestServiceCall().subscribe(
      Response => console.log('test')
    )
  }

}
