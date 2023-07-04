import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sujet',
  templateUrl: './sujet.component.html',
  styleUrls: ['./sujet.component.scss']
})
export class SujetComponent {
  constructor( public router: Router){

  }
  
  @Input() id: any;
  @Input() titre: any;
  @Input() text: any;
  @Input() auteur: any;

  changePage(){
    this.router.navigate(['/thematique', this.id]);
  }
}
