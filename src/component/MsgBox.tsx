import React, { useEffect, useRef } from 'react';
import { Box, Spacer, k } from '@kuma-ui/core';
import { changeMessageHandler } from '../usecase/useBottles';
import { Bottle } from '../model/Bottle';
import { Color } from '../color';

type MsgBoxProps = {
    bottle: Bottle
    isEditable: boolean
    changeMessage: changeMessageHandler
};

export const MsgBox: React.FC<MsgBoxProps> = ({ bottle, isEditable, changeMessage }) => {
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    useEffect(() => {
        if (textAreaRef.current == null) {
            return
        }
        textAreaRef.current.style.height = 'auto';
        textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }, [bottle])
    const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        changeMessage(bottle.id, event.currentTarget.value)
    }
    return (
        <Box>
            <Spacer height="30px" />
            <k.textarea
                ref={ textAreaRef }
                value={ bottle.msg }
                disabled={!isEditable}
                onChange={ onChange }
                rows={10}
                borderRadius="8px"
                border={ isEditable ? "1px solid "+ Color.secondary : "1px solid #FFFFFF"}
                width="100%"/>
        </Box>
    );
};
