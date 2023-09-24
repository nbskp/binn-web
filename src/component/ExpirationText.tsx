import React from 'react';
import { Text } from '@kuma-ui/core';

type ExpirationTextProps = {
    expiredAt: Date
};

export const ExpirationText: React.FC<ExpirationTextProps> = ({ expiredAt }) => {
    return (
        <Text justify="center" alignItems="center">{ '有効期限:' + expiredAt.toString() }</Text>
    );
};
