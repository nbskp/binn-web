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
        <Box width="30%" height="100%">
          <BottleTitleList titles={ titles }
                           selectedBottleID={ selectedBottle == null ? null : selectedBottle.id }
                           selectBottle={ selectBottle }/>
        </Box>
        <Spacer size="5%" horizontal />
        <Box bg={ Color.quanternary } height="80vh" width="2.5px" borderRadius="3px"></Box>
        <Spacer size="5%" horizontal />
        <VStack width="60%">
          { selectedBottle == null ?
            <Box>{"ボトルはまだないよ"}</Box> :
            <Box>
              <MsgBox bottle={ selectedBottle }
                      isEditable={ isEditable }
                      changeMessage={ changeMessage } />
              <Spacer width="5%" />
              <Box fontSize="12px">有効期限: { selectedBottle.expired_at.toLocaleString() }</Box>
              <Spacer size="5%" />
              <HStack>
                <EditButton onClick={ editOnClick } />
                <Spacer width="5%"/>
                <SendButton onClick={ sendOnClick } />
              </HStack>
            </Box>
          }
        </VStack>
      </HStack>
    </Flex>
  )
}

export default App
