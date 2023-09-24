import React from 'react';
import { Color } from '../color';
import { Button } from '@kuma-ui/core';

type BottleTitleItemProps = {
    value: string
    isSelected: boolean
    onClick: () => void
}

export const BottleTitleItem: React.FC<BottleTitleItemProps> = ({value, isSelected, onClick}) => {
    return (
        <Button
            onClick={ onClick }
            p="16px 32px"
            fontWeight="600"
            _hover={ {opacity: 0.8} }
            bg="#FFFFFF"
            color={ isSelected ? Color.primary : Color.quanternary }
            textAlign="left">
            { value }
        </Button>
    )
};
