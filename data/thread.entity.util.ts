
export class ThreadEntityUtil {
    public static allocateEntity(cid: string): string {
        const availableEntity: ThreadEntity = entities.find((entity: ThreadEntity) => entity.cid === '');
        availableEntity.cid = cid;
        console.log(`********** CID: ${cid} ********* and name ${availableEntity.name}`);
        return availableEntity.name;
    }

    public static releaseEntity(cid: string): void {
        const entityToRelease: ThreadEntity = entities.find((entity: ThreadEntity) => entity.cid === cid);
        entityToRelease.cid = '';
    }

    public static getEntity(): string {
        return (browser as any).config.entity;
    }
}

const entities: ThreadEntity[] = [
    { name: 'entity0', cid: '' },
    { name: 'entity1', cid: '' },
    { name: 'entity2', cid: '' },
    { name: 'entity3', cid: '' },
    { name: 'entity4', cid: '' },
];

interface ThreadEntity {
    name: string;
    cid: string;
}
