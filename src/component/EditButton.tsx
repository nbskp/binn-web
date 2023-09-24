import React from 'react';
import { Button } from "@kuma-ui/core";
import { Color } from "../color";

type EditButtonProps = {
    onClick: () => void
};

export const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
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
            編集
        </Button>
    );
};
