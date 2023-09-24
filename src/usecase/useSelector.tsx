import { useState, useEffect } from 'react';
import { Bottle } from '../model/Bottle';

export type SelectBottleHandler = (id: string) => void

export const useSelector = (bottles: Array<Bottle>): [Bottle | null, SelectBottleHandler ] => {
    const [selectedBottleID, setSelectedBottleID] = useState<string | null>(bottles.length == 0 ? null : bottles[0].id)
    useEffect(() => {
        if (bottles.length == 0) {
            setSelectedBottleID(null);
            return
        }
        const selectedBottles = bottles.filter((bottle: Bottle) => bottle.id == selectedBottleID)
        if (selectedBottles.length == 0) {
            setSelectedBottleID(bottles[0].id)
            return
        }
        setSelectedBottleID(selectedBottles[0].id)
    }, [bottles])
    const selectBottle = (id: string) => {
        setSelectedBottleID(id)
    }
    const bottle = selectedBottleID == null ? null : bottles.filter((bottle: Bottle) => bottle.id == selectedBottleID)[0]
    return [bottle, selectBottle];
}
