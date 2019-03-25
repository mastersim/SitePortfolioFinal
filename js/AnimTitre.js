import {
    Util
} from './Util.js'


export class AnimTitre {


    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {function} animation - l'animation à faire jouer.
         
     }}
     */
    
    constructor() {
        this.animerlesTitres(this.animerlesTitres)
    }

animerlesTitres(animation) {
     console.log('debut_anim');
    
     let aElemGrille = document.getElementsByClassName("img_grid");
     let aTitreGrille = document.getElementsByClassName("titre_grid");
     console.log(aElemGrille);

   for(let i = 0; i < aElemGrille.length; i++){
        aElemGrille[i].onmouseover = function () {
                aTitreGrille[i].classList.remove('titre_animOUT');
                aTitreGrille[i].classList.add('titre_anim');

                console.log(aTitreGrille[i]);
        }

        aElemGrille[i].onmouseout = function () {
            console.log("GOODBYE");
            aTitreGrille[i].classList.remove('titre_anim');
            aTitreGrille[i].classList.add('titre_animOUT');

        }
   }


    /*let elmConteneur = this.creerElement(this.elmParent,
        'section',
        '',
        'mot')
    let i = 0 
    for (let uneLettre of lesLettres)
    {
        let elmlettre = this.creerElement(elmConteneur,
            'div',
            uneLettre,
            '')
        elmlettre.style.animationDelay = (i * 0.5) + "s";
        elmlettre.style.color = this.tabCouleur[(i++) % 6]
    }*/



    }

}





