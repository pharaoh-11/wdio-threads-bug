import {ThreadEntityUtil} from "../data/thread.entity.util";

describe('suite description', () => {
    it('test 5', () => {
        console.log(`Entity inside a test ${ThreadEntityUtil.getEntity()}`);
    });
});
