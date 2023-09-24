import { Bottle } from '../model/Bottle';
import { Title } from '../model/Title';

export const useTitles = (bottles: Array<Bottle>): Array<Title> => {
    const titles = bottles.map((bottle: Bottle) => { return {id: bottle.id, value: bottle.msg == "" ? bottle.id : bottle.msg.slice(0, 5)} });
    return titles;
}
