import React from 'react';
import { k } from '@kuma-ui/core';
import { changeMessageHandler } from '../usecase/useBottles';
import { Bottle } from '../model/Bottle';
import { Color } from '../color';

type MsgBoxProps = {
    bottle: Bottle
    isEditable: boolean
    changeMessage: changeMessageHandler
};

export const MsgBox: React.FC<MsgBoxProps> = ({ bottle, isEditable, changeMessage }) => {
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeMessage(bottle.id, event.currentTarget.value);
    };
    return (
        <k.textarea
            value={ bottle.msg }
            disabled={!isEditable}
            onChange={ onChange }
            rows={10}
            borderRadius="8px"
            fontSize="24px"
            lineHeight="1.5em"
            border={ isEditable ? "1px solid "+ Color.secondary : "1px solid #FFFFFF" }
            style={{resize: "none"}}
            width="100%"
            height="100%" />
    );
};
