import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class LibAService {
    constructor() {
        this.data = 'LibAService';
    }
}
LibAService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibAService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class LibAComponent {
}
LibAComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
LibAComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.0.1", type: LibAComponent, selector: "lib-libA", ngImport: i0, template: `
    <p>
      lib-a works!
    </p>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-libA', template: `
    <p>
      lib-a works!
    </p>
  ` }]
        }] });

class LibAModule {
}
LibAModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
LibAModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "15.0.1", ngImport: i0, type: LibAModule, declarations: [LibAComponent], exports: [LibAComponent] });
LibAModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAModule });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibAModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        LibAComponent
                    ],
                    imports: [],
                    exports: [
                        LibAComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of lib-a
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibAComponent, LibAModule, LibAService };
//# sourceMappingURL=lib-a.mjs.map
