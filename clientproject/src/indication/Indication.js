import React, { useState } from 'react'
import Acne from './types/Acne'
import Alopecie from './types/Alopecie';
import Cicatrice from './types/Cicatrice';
import Cors from './types/Cors';
import Depigmentation from './types/Depigmentation';
import Hyperpigmentation from './types/Hyperpigmentation'
import Mycoses from './types/Mycoses';
import Protectionsolaire from './types/Protectionsolaire';
import Vieillissementcutane from './types/Vieillissementcutane';
import "./indication.css";

function Indication() {
    const [acne, setAcne] = useState(true);
    const [hyperpigmentation, setHyperpigmentation] = useState(false);
    const [protectionsolaire, setProtectionsolaire] = useState(false);
    const [vieillissementcutane, setVieillissementcutane] = useState(false);
    const [cicatrice, setCicatrice] = useState(false);
    const [alopecie, setAlopecie] = useState(false);
    const [cors, setCors] = useState(false);
    const [mycoses, setMycoses] = useState(false);
    const [depigmentation, setDepigmentation] = useState(false);
    
    const onAcne = ()=>{
        setAcne(true);
        setHyperpigmentation(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onHyperpigmentation = () => {
        setHyperpigmentation(true)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onProtectionsolaire = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(true);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onVieillissementcutane = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(true);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onCicatrice = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(true);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onAlopecie = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(true);
        setCors(false);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onCors = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(true);
        setMycoses(false);
        setDepigmentation(false);
    }
    const onMycoses = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(true);
        setDepigmentation(false);
    }
    const onDepigmentation = () => {
        setHyperpigmentation(false)
        setAcne(false);
        setProtectionsolaire(false);
        setVieillissementcutane(false);
        setCicatrice(false);
        setAlopecie(false);
        setCors(false);
        setMycoses(false);
        setDepigmentation(true);
    }

    return (
        <div>
            <div className="column sc_column_container sc_col-sm-12">
                <div className="sc_column-inner "></div>
                <div className="wrapper" style={{ marginTop: 150 }}>
                    <article className="myportfolio-container minimal-light " id="esg-grid-4-1-wrap">
                        <div id="esg-grid-4-1" className="esg-grid">
                            <article className="esg-filters esg-singlefilters mb-5 ">
                                <div className="esg-filter-wrapper esg-fgc-4 ">
                                    <div className="esg-filterbutton articleStyle" onClick={onAcne}>
                                        <span >ACNE</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onHyperpigmentation}>
                                        <span>HYPERPIGMENTATION</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onProtectionsolaire}>
                                        <span>PROTECTION SOLAIRE</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onVieillissementcutane}>
                                        <span>LE VIEILLISSEMENT CUTANE</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onCicatrice}>
                                        <span>LES CICATRICES</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onAlopecie}>
                                        <span>ALOPECIE</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onCors}>
                                        <span>CORS, DURILLONS ET CALLOSITES</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onMycoses}>
                                        <span>MYCOSES</span>
                                    </div>
                                    <div className="esg-filterbutton articleStyle" onClick={onDepigmentation}>
                                        <span>DEPIGMENTATION OU VITILIGO</span>
                                    </div>
                                    <div className="eg-clearfix"></div>
                                </div>
                            </article>
                            <div className="esg-clear-no-height"></div>

                            <div>

                            </div>

                        </div>
                    </article>
                    <div className="clear"></div>
                    {acne ?
                        <>
                            <Acne />

                        </>
                        : null
                    }
                    {hyperpigmentation ?
                        <>
                            <Hyperpigmentation />
                        </>
                        : null
                    }
                    {protectionsolaire ?
                        <>
                            <Protectionsolaire />
                        </>
                        : null
                    }
                    {vieillissementcutane ?
                        <>
                            <Vieillissementcutane />
                        </>
                        : null
                    }
                    {cors ?
                        <>
                            <Cors />
                        </>
                        : null
                    }
                    {alopecie ?
                        <>
                            <Alopecie />
                        </>
                        : null
                    }
                    {cicatrice ?
                        <>
                            <Cicatrice />
                        </>
                        : null
                    }
                    {mycoses ?
                        <>
                            <Mycoses />
                        </>
                        : null
                    }
                    {depigmentation ?
                        <>
                            <Depigmentation />
                        </>
                        : null
                    }

                </div>
            </div>
        </div>
    )
}

export default Indication