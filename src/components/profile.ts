export class Profile {
    id: number | undefined;
    name: string = '';
    description: string = '';
    is_active: boolean = false;
    get is_new(): boolean {
        return this.id === undefined;
    }

    constructor(initializer?: any) {
        if(!initializer) return;
        if(initializer.id) this.id = initializer.id;
        if(initializer.name) this.name = initializer.name;
        if(initializer.description) this.description = initializer.description;
        if(initializer.is_active) this.is_active = initializer.is_active;
    }
}