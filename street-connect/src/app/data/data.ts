import { Message } from "../model/message.model";
import { Sujet } from "../model/sujet.model";

export class Data {
    sujets : Sujet[] = [
        {id : 1, titre :'COMMENT NE PAS AVOIR FROID LA NUIT ?', text : 'La nuit commence a être froide, comment faites vous ?', auteur: 'Jack'},
        {id : 2, titre :'MON EXPERIENCE DEHORS', text : 'Comment se proteger des agressions ?', auteur: 'Enzo'},
        {id : 3, titre :'SE NOURIR QUAND ON GALÈRE', text : 'Vous faites comment pour vos démarches en ligne ?', auteur: 'Diane'},
          ];

    messages : Message[] = [
    {id : 1, pseudo :'Léon', text : 'marcher pour se réchauffer', idSujet : 1},
    {id : 2, pseudo :'Vincent', text : 'une bâche sous les arbres', idSujet : 1},
    {id : 3, pseudo :'Antoine', text : 'd\accord avec @Léon, dormir en décaller et etre en mouvement', idSujet : 1},
    {id : 4, pseudo :'Louis', text : 'perso, j\ai toujours de quoi me defendre dans ma poche en cas de besoin', idSujet : 2},
    {id : 5, pseudo :'Rogé', text : 'reste dans des endroit passant et éclairé', idSujet : 2},
    {id : 6, pseudo :'Emily', text : 'compliqué de pas se faire agressser quand tu dors dehors ...', idSujet : 2},
    {id : 7, pseudo :'Stan', text : 'y a des endroit ou tu peux acceder a un pc gratuitement en ville', idSujet : 3},
    {id : 8, pseudo :'Francine', text : 'je fais pas de demarche moi !', idSujet : 3}  

];     
  }
  