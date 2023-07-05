import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Data } from 'src/app/data/data';
import { Message } from 'src/app/model/message.model';
import { Sujet } from 'src/app/model/sujet.model';

@Component({
  selector: 'app-thematique',
  templateUrl: './thematique.component.html',
  styleUrls: ['./thematique.component.scss']
})
export class ThematiqueComponent {
  idThematique:any;
  sujet : Sujet | undefined;
  data = new Data();
  messages: Message[] = [];

      
  constructor(activatedRouter: ActivatedRoute, public router: Router) {
    this.idThematique = activatedRouter.snapshot.paramMap.get('id');
  }
  
  
  ngOnInit(): void {
    this.sujet = this.data.sujets.find((s: { id: any; }) => s.id == this.idThematique);
    for (let msg of this.data.messages) {
      if(msg.idSujet == this.sujet?.id)
      this.messages.push(msg);
    }
  }

 

 
}
