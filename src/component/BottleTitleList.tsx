import React from 'react';
import { Title } from '../model/Title';
import { SelectBottleHandler } from '../usecase/useSelector';
import { BottleTitleItem } from './BottleTitleItem';
import { VStack } from '@kuma-ui/core';

type BottleTitleListProps = {
  titles: Array<Title>
  selectedBottleID: string | null
  selectBottle: SelectBottleHandler
}

export const BottleTitleList: React.FC<BottleTitleListProps> = ({ titles, selectedBottleID, selectBottle }) => {
  const items = titles.map((title: Title) => <BottleTitleItem key={ title.id } value={title.value} isSelected={ title.id == selectedBottleID} onClick={ ()=>{selectBottle(title.id)} } />);
    return (
      <VStack overflow="scroll" width="100%" height="100%">
        {items}
      </VStack>
    );
}
