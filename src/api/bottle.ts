import { Bottle } from '../model/Bottle';

type subscribeBottlesHandler = (bottle: Bottle) => void

const baseURL = 'https://binn-f890edff7f36.herokuapp.com';
const pollInterval = 30000;

export namespace Api {
    let token: string
    export const subscribeBottles = async (handler: subscribeBottlesHandler) => {
        const response = await fetch(baseURL+'/bottles:subscribe',
              {
                method: 'POST',
                mode: 'cors',
              });
        const data = await response.json();
        token = data.token
        setInterval(async () => {
            const bottle = await getBottle();
            if (bottle != null) {
                handler(bottle);
            }
        }, pollInterval);
    }
    export const getBottle = async (): Promise<Bottle | null> => {
        const response = await fetch(baseURL+'/bottles',
            {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
            });
        if (response.status != 200) {
            return null
        }
        const data = await response.json();
        return {id: data.id, msg: data.msg, expired_at: new Date(data.expired_at)};
    }
    export const sendBottle = async (bottle: Bottle): Promise<boolean> => {
        const response = await fetch(baseURL+'/bottles',
            {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(bottle),
            });
        if (response.status != 200) {
            return false;
        }
        return true;
    }
}
