import { BehaviorSubject } from "rxjs/BehaviorSubject";

export class GhostService {
    private _isLoading = new BehaviorSubject<Object>(false);
    public isLoading = this._isLoading.asObservable();

    public setLoading(isLoading: boolean, group: any = null) {
        this._isLoading.next({
            isLoading: isLoading,
            group: group
        })
    }
}