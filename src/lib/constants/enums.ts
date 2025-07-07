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
    SparxReader,
    Unknown
};

export const enum ButtonSize {
    Small,
    Medium,
    Large
};

export const enum ButtonType {
    Primary,
    Secondary,
};

export const StrokeType = {
    Stroke: 0,
    Terminator: 1,
    Unknown: -1,
};

export const enum OnekoAnimation {
    // single framed
    Idle,
    Alert,
    Tired,
    // triple framed
    ScratchSelf,
    // double framed
    ScratchWallNorth,
    ScratchWallSouth,
    ScratchWallEast,
    ScratchWallWest,
    Sleeping,
    MovingNorth,
    MovingNorthEast,
    MovingEast,
    MovingSouthEast,
    MovingSouth,
    MovingSouthWest,
    MovingWest,
    MovingNorthWest,
};
