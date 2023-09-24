import React from 'react';
import { Button } from "@kuma-ui/core";
import { Color } from "../color";

type SendButtonProps = {
    onClick: () => void
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }) => {
    return (
        <Button
            onClick={ onClick }
            borderRadius="14px"
            p="16px 32px"
            fontWeight="600"
            _hover={{
                opacity: 0.8,
            }}
            textAlign="center"
            width="100%"
            bg={ Color.primary }
            color={ Color.tertiary }
        >
            送信
        </Button>
    );
};
