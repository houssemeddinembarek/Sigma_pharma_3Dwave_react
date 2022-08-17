import React from 'react'
import './types.css'

function Acne() {
    return (
        <div>
            <div className="container mb-5">
                {/* <h6 className="sc_services_subtitle sc_item_subtitle">L’acné</h6> */}
                <h2 className="sc_services_title sc_item_title">L’acné</h2>
                <p className='mb-5 text'>
                    Problème de peau très fréquent, l'acné apparaît le plus souvent à l'adolescence. Le plus souvent bénigne, elle peut dans certains cas revêtir des formes sévères, avec des boutons sur le visage, le cou, le thorax et parfois le dos. Découvrez les causes, les traitements et les mythes qui entourent cette maladie d'origine hormonale. Points noirs, points blancs... A l'adolescence, l'acné empêche bien souvent de voir la vie en rose. Mais quelles sont les causes de cette maladie de
                    peau qui affecte près de 80 % des jeunes.
                    C’est une maladie affectant le follicule pileux, à la racine de nos poils. A sa base se trouvent les glandes sébacées responsables de la production de sébum, matière grasse empêchant le dessèchement de la peau. Mais lors de la puberté, ce mécanisme bien huilé s'enraye !
                </p>
                <h2 className="sc_services_title sc_item_title">Mécanisme de l'acné</h2>
                <p className='mb-5 text'>
                    L'apparition d'un bouton au niveau du follicule est due à la conjonction de trois évènements :
                    <ul>
                        <li>
                            Sécrétion excessive de sébum dans le follicule
                        </li>
                        <li>
                            Obstruction du follicule
                        </li>
                        <li>
                            Développement bactérien à l'intérieur du follicule
                        </li>
                    </ul>
                    Lors de la puberté, la production d'hormones sexuelles masculines (androgènes) entraîne un excès de sébum au niveau des glandes sébacées. Le sébum en excès s'écoule à la surface de la peau qui devient alors plus grasse. Mais le canal peut s'encombrer et le pore se bouche, c'est l'apparition du point noir ou comédon ou d'un microkyste blanc.
                    Par la suite, le développement d'une inflammation à l'intérieur des follicules et l'infection de ceux-ci par une bactérie, Propionibacterium acnes, entraîne des boutons (papules, pustules et nodules).
                </p>
                <h2 className="sc_services_title sc_item_title">Conséquences de l’acné</h2>
                <p className='mb-5 text'>
                    L’acné peut être lourde de conséquence
                    <br/>

                    <span className='text Bold text'> Sur le plan psychologique :</span>
                    <br/>
                    L’acné est une dermatose affichante puisqu’elle touche principalement les zones exposées : visage, décolleté et dos. L’acné survient le plus souvent dans une période d’instabilité et de fragilité émotionnelle : l’adolescence. Il est donc important de prendre en charge l’acné le plutôt possible et d’opter pour un traitement spécifique afin d’éviter son aggravation.
                    <br/>
                    <span className='text Bold text'>Sur le plan physique :</span>
                    <br/>
                    L’acné peut engendrer des cicatrices d’acné, qui peuvent être comme des trous dans la peau dont le traitement correcteur est parfois difficile.                </p>

            </div>
        </div>
    )
}

export default Acne