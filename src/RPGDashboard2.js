import { useState } from 'react';
import PlayersCard from './components/cards/PlayersCard';
import LifeCard from './components/cards/LifeCard';
import Sheet from './components/cards/Sheet';

function RPGDashboard2(props) {

    const [players, setPlayers] = useState(props.data);
    const [player, setPlayer] = useState({});

    const changeHandle = (data) => {
        setPlayers(data);
    }

    const charSetHandle = (data) => {
        setPlayer(data);
    }

    const handleAtack = (index, custo) => {
        if (index === -1)
            return;

        let playersCopy = [...players];
        let pmsAtuais = playersCopy[index].atualPM;

        if (pmsAtuais - custo > -1) {
            pmsAtuais -= custo
            playersCopy[index].atualPM = pmsAtuais;
        }

        setPlayers(playersCopy);
    }

    const handleDamage = (index, dano) => {
        if (index === -1)
            return;
        let playersCopy = [...players];
        let pvsAtuais = playersCopy[index].atualPV;

        if (pvsAtuais < dano)
            pvsAtuais = 0;
        else
            pvsAtuais -= dano
        playersCopy[index].atualPV = pvsAtuais;


        setPlayers(playersCopy);
    }
    return (
        <div className="row">
            <div className="col-md-9">
                <PlayersCard data={players} title={props.title} onChangeData={changeHandle} onCharSet={charSetHandle} />
                <Sheet data={player} onAtack={handleAtack} onDamage={handleDamage} />
            </div>
            <div className="col-md-3">
                <LifeCard exibeMana={props.exibeMana} data={players} />
            </div>
        </div>
    );
}

export default RPGDashboard2;
