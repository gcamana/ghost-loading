import { Component, Input } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { GhostService } from './../../providers/ghost/ghost.service';

@Component({
    selector: 'cs-ghost',
    host: { '[class.isLoading]': 'isLoading' },
    template: `<ng-content *ngIf="!isLoading"></ng-content>`
})
export class GhostComponent {

    public isLoading: boolean = true;
    private isLoadingSubscription: Subscription;

    private data: Object = {};
    public constructor(
        private _ghostSrv: GhostService
    ) {
        this.isLoadingSubscription = this._ghostSrv.isLoading.subscribe(data => this._updateLoading(data));
    }

    public ngOnDestroy() {
        this.isLoadingSubscription.unsubscribe();
    }

    private _updateLoading(data) {
        if (!data) return
        this._setData(data)._process();
    }

    private _setData(data: Object) {
        this.data = data;
        return this;
    }

    private _process() {
        return this._setLoading();
    }



    private _setLoading() {
        this.isLoading = this.data['isLoading']
    }
}