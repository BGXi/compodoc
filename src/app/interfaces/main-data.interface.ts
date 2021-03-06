export interface MainDataInterface {
    output: string;
    theme: string;
    extTheme: string;
    serve: boolean;
    port: number;
    open: boolean;
    assetsFolder: string;
    documentationMainName: string;
    documentationMainDescription: string;
    base: string;
    hideGenerator: boolean;
    modules: any;
    readme: boolean;
    changelog: string;
    contributing: string;
    license: string;
    todo: string;
    markdowns: any[];
    additionalPages: any;
    pipes: any;
    classes: any;
    interfaces: any;
    components: any;
    directives: any;
    injectables: any;
    interceptors: any;
    miscellaneous: any;
    routes: any;
    tsconfig: string;
    toggleMenuItems: string[];
    includes: string;
    includesName: string;
    includesFolder: string;
    disableSourceCode: boolean;
    disableGraph: boolean;
    disableMainGraph: boolean;
    disableCoverage: boolean;
    disablePrivate: boolean;
    disableProtected: boolean;
    disableInternal: boolean;
    disableLifeCycleHooks: boolean;
    watch: boolean;
    mainGraph: string;
    coverageTest: boolean;
    coverageTestThreshold: number;
    coverageTestPerFile: boolean;
    coverageMinimumPerFile: number;
    routesLength: number;
    angularVersion: string;
    exportFormat: string;
    coverageData: Object;
    customFavicon: string;
}
