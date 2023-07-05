import { Component } from '@angular/core';
import { Data } from 'src/app/data/data';
import { Sujet } from 'src/app/model/sujet.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  data = new Data();
  sujets = this.data.sujets;
}
