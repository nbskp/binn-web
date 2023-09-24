import { useState, useEffect } from 'react';
import { Api } from '../api/bottle';
import { Bottle } from '../model/Bottle';

export type changeMessageHandler = (id: string, msg: string) => void
export type SendBottleHandler = (id: string) => void

export const useBottles = ():[Array<Bottle>, changeMessageHandler, SendBottleHandler] => {
    const [bottles, setBottles] = useState<Array<Bottle>>([]);
    const removeBottle = (id: string) => {
        setBottles(bottles.filter((bottle: Bottle) => bottle.id != id));
    }
    const changeMessage: changeMessageHandler = (id: string, msg: string) => {
        const changed: Array<Bottle> = []
        bottles.forEach((bottle: Bottle) => {
            if (bottle.id == id) {
                changed.push({id: id, msg: msg, expired_at: bottle.expired_at});
            } else {
                changed.push(bottle);
            }
        })
        setBottles(changed)
    }

    const sendBottle = async (id: string) => {
        if (await Api.sendBottle(bottles.filter((bottle: Bottle) => bottle.id == id)[0])) {
            removeBottle(id);
        }
    }
    useEffect(() => {
        Api.subscribeBottles((bottle: Bottle) => {
            setTimeout(() => removeBottle(bottle.id), bottle.expired_at.getTime() - new Date().getTime());
            setBottles((bottles: Array<Bottle>) => [...bottles, bottle])
        });
    }, [])
    return [bottles, changeMessage, sendBottle];
}
