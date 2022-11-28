import { inject, Injectable } from '@angular/core';
import { LibAService } from 'libA';
import * as i0 from "@angular/core";
export class LibBService {
    constructor() {
        this.data = inject(LibAService).data;
    }
}
LibBService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LibBService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LibBService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2xpYi1iL3NyYy9saWIvbGliLWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sTUFBTSxDQUFDOztBQUtuQyxNQUFNLE9BQU8sV0FBVztJQUh4QjtRQUlFLFNBQUksR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDO0tBRWpDOzt3R0FIWSxXQUFXOzRHQUFYLFdBQVcsY0FGVixNQUFNOzJGQUVQLFdBQVc7a0JBSHZCLFVBQVU7bUJBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaWJBU2VydmljZSB9IGZyb20gJ2xpYkEnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBMaWJCU2VydmljZSB7XG4gIGRhdGEgPSBpbmplY3QoTGliQVNlcnZpY2UpLmRhdGE7XG5cbn1cbiJdfQ==