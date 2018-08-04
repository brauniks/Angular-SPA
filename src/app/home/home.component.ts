import { Component, OnInit } from '@angular/core';
import { DragulaService } from '../../../node_modules/ng2-dragula/dist/components/dragula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dragulaService: DragulaService) {
    dragulaService.createGroup('VAMPIRES', {
      removeOnSpill: true
    });
  }

  ngOnInit() {
  }

}
