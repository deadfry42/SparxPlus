export const enum Conditions {
    Added,
    Modified,
    ModifiedTransitionPage,
    Removed,
};

export const enum Actions {
    Button,
    Click,
    LeftClick,
    RightClick,
    None,
};

export const enum PanelType {
    Settings,
    Blank,
    Descriptive,
};

export const enum SettingsType {
    Toggle,
    Input,
};

export const enum PlatformID {
    SparxMaths,
    SparxScience,
    Unknown
};

export const StrokeType = {
    Stroke: 0,
    Terminator: 1,
    Unknown: -1,
};