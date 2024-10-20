export interface AuthStrategy {
  register: (payload: any) => Promise<any>;
  login: (payload: any) => Promise<any>;
}
