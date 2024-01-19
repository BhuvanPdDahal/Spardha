import { State as AlertState } from './alert';
import { State as AuthState } from './auth';

export interface State {
    alert: AlertState;
    auth: AuthState;
}