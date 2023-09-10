import React from 'react';
import { Bottle } from '../model/Bottle';
import { BottleItem } from './BottleItem';
import { changeMessageHandler, sendBottleHandler } from '../usecase/useBottles';
import './BottleList.css'

type BottleListProps = {
    bottles: Array<Bottle>,
    changeMessage: changeMessageHandler
    sendBottle: sendBottleHandler
}

export const BottleList: React.FC<BottleListProps> = ({ bottles, changeMessage, sendBottle: sendBottle }) => {
    const items = bottles.map((bottle: Bottle) => <BottleItem
                                                      key={bottle.id}
                                                      bottle={bottle}
                                                      changeMessage={changeMessage}
                                                      sendBottle={sendBottle} />);
    return (
        <>
            {items.length == 0 ? (<div>ボトルはまだないです</div>) : (<ul className="bottle-list">{items}</ul>)}
        </>
    );
}
