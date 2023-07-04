import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  sujets : Sujet[] = [
    {id : 1, titre :'COMMENT NE PAS AVOIR FROID LA NUIT ?', text : 'La nuit commence a être froide, comment faites vous ?', auteur: 'Jack'},
    {id : 2, titre :'MON EXEPERIENCE DEHORS', text : 'J\'ai envie de vous partager mon experience [...]', auteur: 'Enzo'},
    {id : 3, titre :'SE NOURIR QUAND ON GALÈRE', text : 'J\'ai développé des techniques pour arriver a manger correctement [...]', auteur: 'Diane'},
      ];
  
  messages : Message[] = [
    {id : 1, pseudo :'Léon', text : 'marcher pour se réchauffer'},
    {id : 2, pseudo :'Vincent', text : 'une bâche sous les arbres'},
    {id : 3, pseudo :'Antoine', text : 'd\accord avec @Léon, dormir en décaller et etre en mouvement'},
      ];
      
  constructor(activatedRouter: ActivatedRoute, public router: Router) {
    this.idThematique = activatedRouter.snapshot.paramMap.get('id');
  }
  
  
  ngOnInit(): void {
    this.sujet = this.sujets.find((s: { id: any; }) => s.id == this.idThematique);
  }

 

 
}
