import React, { useState } from 'react';
import { Button } from "@kuma-ui/core";
import { Color } from "../color";

type SendButtonProps = {
    onClick: () => void
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
    const [disabled, setDisabled] = useState<boolean>(false);
    const _onClick = () => {
        setDisabled(true);
        onClick();
        setDisabled(false);
    }
    return (
        <Button
            onClick={ _onClick }
            disabled={ disabled }
            borderRadius="14px"
            p="16px 32px"
            fontWeight="600"
            _hover={{
                opacity: 0.8,
            }}
            textAlign="center"
            width="100%"
            bg={ disabled ? Color.secondary : Color.primary }
            color={ Color.tertiary }
        >
            送信
        </Button>
    );
};
