import React, { useState} from 'react';

import Card from './Card';
import Table from './Table';
import Logo from '../../images/logos/main-logo.png';
import { BoardProp } from '../../interfaces/playboard';

const Board: React.FC<BoardProp> = ({
    remoteCards,
    localPlayedCards,
    localPlayedCard,
    remotePlayedCard
}: BoardProp) => {
    const [showTable, setShowTable] = useState(false);

    const handleClick = () => {
        setShowTable(true);
    };

    return (
        <div className='bg-lightdark shadow-board h-250px w-full rounded-3xl p-4 max-w-3xl mx-auto'>
            {showTable && (
                <Table
                    remoteCards={remoteCards}
                    localPlayedCards={localPlayedCards}
                    setShowTable={setShowTable}
                />
            )}
            <div className='h-full flex items-center justify-center gap-5 rounded-2xl bg-lightdark'>
                {localPlayedCard && (
                    <Card
                        value={localPlayedCard.value}
                        suit={localPlayedCard.suit}
                        initialShow={true}
                        localCard={false}
                        setLocalPlayedCard={null}
                        totalLocalCards={null}
                        setTotalLocalCards={null}
                        setLocalPlayedCards={null}
                    />
                )}
                <img onClick={handleClick} className='h-100px' src={Logo} alt="" />
                {remotePlayedCard && (
                    <Card
                        value={remotePlayedCard.value}
                        suit={remotePlayedCard.suit}
                        initialShow={true}
                        localCard={false}
                        setLocalPlayedCard={null}
                        totalLocalCards={null}
                        setTotalLocalCards={null}
                        setLocalPlayedCards={null}
                    />
                )}
            </div>
        </div>
    )
};

export default Board;