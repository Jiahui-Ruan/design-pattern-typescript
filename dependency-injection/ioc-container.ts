export class IOCContainer {
    private static _instance: IOCContainer = new IOCContainer();
    private _dependencies: {[key: string]: Object} = {};

    constructor() {
        if (IOCContainer._instance) {
            throw new Error("Singleton class. Cannot instantiate using new");
        }
        IOCContainer._instance = this;
    }

    public static get instance(): IOCContainer {
        return IOCContainer._instance;
    }

    register(name: string, dependencies: string[], implementation: any) {
        if(this._dependencies[name]) {
            throw new Error("Dependency already registered")
        }
        let dependenciesImplementations = this.getDependenciesImplementations(dependencies);
        this._dependencies[name] = new implementation(...dependenciesImplementations);
    }

    resolve<T>(name: string): T {
        if (!this._dependencies[name]) {
            throw new Error(`Unresolved dependency ${name}`);
        }
        return this._dependencies[name] as T;
    }

    private getDependenciesImplementations(names: string[]): Object[] {
        return names.map(name => this.resolve(name));
    }
}
