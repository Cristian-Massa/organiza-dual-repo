export interface Banned {
    isBanned: boolean,
    isTemp?: boolean;
    until?: Date | null;
}