import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GhostService } from './../../providers/ghost/ghost.service';
import { Observable } from 'rxjs/Rx';
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(
		public navCtrl: NavController,
		private _ghostSrv: GhostService
	) {

	}
	ngOnInit() {
		this._setLoaded()
		this.reload();
	}
	refresh() {
		this._setLoaded()
		this.reload();
	}
	reload() {
		this._ghostSrv.setLoading(true)
		this._setLoaded()
	}

	private _setLoaded() {
		setTimeout(() => {
			this._ghostSrv.setLoading(false)
		}, 1000);
	}
}
