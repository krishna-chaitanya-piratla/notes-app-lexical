export const DEFAULT_SETTINGS = {
    isCharLimit: false,
    disableBeforeInput: false,
    isRichText: true,
}


export type SettingName = keyof typeof DEFAULT_SETTINGS;

export const INITIAL_SETTINGS: Record<SettingName, boolean> = {
    ...DEFAULT_SETTINGS,
}

export type Settings = typeof INITIAL_SETTINGS;