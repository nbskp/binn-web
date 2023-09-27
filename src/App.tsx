import { useState } from 'react';
import { useBottles } from './usecase/useBottles';
import { useSelector } from './usecase/useSelector';
import { useTitles } from './usecase/useTitle';
import { BottleTitleList } from './component/BottleTitleList';
import { SendButton } from './component/SendButton';
import { EditButton } from './component/EditButton';
import { MsgBox } from './component/MsgBox';
import { Flex, Box, VStack, HStack, Spacer } from '@kuma-ui/core';
import { Color } from './color';
import './App.css';


function App() {
  const [bottles, changeMessage, sendBottle] = useBottles();
  const [selectedBottle, selectBottle] = useSelector(bottles);
  const titles = useTitles(bottles);
  const [isEditable, setIsEditable] = useState<boolean>(false);
  const editOnClick = () => {
    setIsEditable(!isEditable)
  }
  const sendOnClick = () => {
    if (selectedBottle != null) {
      sendBottle(selectedBottle.id)
    }
  }
  return (
    <Flex className="app" width="100%" height="100%" justify="center" alignItems="center">
      <HStack width="80%" height="80%">
        <Box width="30%" height="90%">
          <Spacer height="5%" />
          <BottleTitleList titles={ titles }
                           selectedBottleID={ selectedBottle == null ? null : selectedBottle.id }
                           selectBottle={ selectBottle }/>
          <Spacer height="5%" />
        </Box>
        <Spacer size="5%" horizontal />
        <Box bg={ Color.secondary } height="100%" width="2.5px" borderRadius="3px"></Box>
        <Spacer size="5%" horizontal />
        <VStack width="60%" height="100%">
          { selectedBottle == null ?
            <Box>{"ボトルはまだないよ"}</Box> :
            <Box width="100%" height="100%">
              <Spacer size="5%" />
              <Box height="70%">
                <MsgBox bottle={ selectedBottle }
                        isEditable={ isEditable }
                        changeMessage={ changeMessage } />
              </Box>
              <Spacer size="5%" />
              <Box fontSize="12px">有効期限: { selectedBottle.expired_at.toLocaleString() }</Box>
              <Spacer size="5%" />
              <HStack>
                <EditButton onClick={ editOnClick } />
                <Spacer width="5%" horizontal />
                <SendButton onClick={ sendOnClick } />
              </HStack>
            </Box>
          }
        <Spacer size="5%" />
        </VStack>
      </HStack>
    </Flex>
  )
}

export default App
