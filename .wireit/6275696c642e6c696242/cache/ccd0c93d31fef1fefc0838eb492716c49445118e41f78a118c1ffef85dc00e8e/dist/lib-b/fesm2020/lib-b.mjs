import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class LibBService {
    constructor() { }
}
LibBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class LibBComponent {
}
LibBComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LibBComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: LibBComponent, selector: "lib-libB", ngImport: i0, template: `
    <p>
      lib-b works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-libB', template: `
    <p>
      lib-b works!
    </p>
  ` }]
        }] });

class LibBModule {
}
LibBModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibBModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.1", ngImport: i0, type: LibBModule, declarations: [LibBComponent], exports: [LibBComponent] });
LibBModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibBComponent
                    ],
                    imports: [],
                    exports: [
                        LibBComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of lib-b
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibBComponent, LibBModule, LibBService };
//# sourceMappingURL=lib-b.mjs.map
//# sourceMappingURL=lib-b.mjs.map
