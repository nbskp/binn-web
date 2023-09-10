import React, { useState, useEffect, useRef } from 'react';
import { Bottle } from '../model/Bottle';
import { changeMessageHandler, sendBottleHandler } from '../usecase/useBottles';
import './BottleItem.css';

type BottleItemProps = {
    bottle: Bottle,
    changeMessage: changeMessageHandler
    sendBottle: sendBottleHandler
}

export const BottleItem: React.FC<BottleItemProps> = ({ bottle, changeMessage, sendBottle }) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    useEffect(() => {
        if (textAreaRef.current == null) {
            return
        }
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }, [bottle.msg])
    const editOnClick = () => setIsEditable(!isEditable);
    const sendOnClick = () => {
        sendBottle(bottle.id);
    }
    return (
        <li className="bottle-item">
            <textarea className="bottle-item-msg"
                ref={textAreaRef}
                value={bottle.msg}
                disabled={!isEditable}
                rows={1}
                onChange={(e) => {changeMessage(bottle.id, e.target.value)}}/>
            <div className="bottle-item-footer">
                <div className="bottle-item-expiration">{ '有効期限:'+bottle.expired_at.toString() }</div>
                <div className="bottle-item-buttons">
                    <button className="bottle-item-edit-button" onClick={ editOnClick }>編集</button>
                    <button className="bottle-item-send-button" onClick={ sendOnClick }>送信</button>
                </div>
            </div>
        </li>
    )
}
