import { Component } from '@angular/core';
import { Sujet } from 'src/app/model/sujet.model';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent {
  sujets : Sujet[] = [
    {id : 1, titre :'COMMENT NE PAS AVOIR FROID LA NUIT ?', text : 'La nuit commence a être froide, comment faites vous ?', auteur: 'Jack'},
    {id : 2, titre :'MON EXEPERIENCE DEHORS', text : 'J\'ai envie de vous partager mon experience [...]', auteur: 'Enzo'},
    {id : 3, titre :'SE NOURIR QUAND ON GALÈRE', text : 'J\'ai développé des techniques pour arriver a manger correctement [...]', auteur: 'Diane'},
      ];
}
