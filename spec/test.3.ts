import {ThreadEntityUtil} from "../data/thread.entity.util";

describe('suite description', () => {
    it('test 2', () => {
        console.log(`Entity inside a test ${ThreadEntityUtil.getEntity()}`);
    });
});
