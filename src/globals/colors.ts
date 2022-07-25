import { IColorTheme, ISpacingTheme, ITheme } from "../interface/ITheme";

const DEFAULT_DARK_COLOR_THEME: IColorTheme = {
    PRIMARY_COLOR: '#000',
    SECONDARY_COLOR: '#73737d',
    TITLE_COLOR: '#fff',
    BACKGROUND_COLOR: '#111216',
    BUTTON_COLOR: '#fff',
}

const DEFAULT_LIGHT_COLOR_THEME: IColorTheme = {
    PRIMARY_COLOR: '#fff',
    SECONDARY_COLOR: '#73737d',
    TITLE_COLOR: '#000',
    BACKGROUND_COLOR: '#fff',
    BUTTON_COLOR: '#000',
};

const DEFAULT_LIGHT_SPACING_THEME: ISpacingTheme = {
    base: 8,
    double: 16,
};

export const DEFAULT_LIGHT_THEME_ID = 'default-light';

export const DEFAULT_LIGHT_THEME: ITheme = {
    id: DEFAULT_LIGHT_THEME_ID,
    color: DEFAULT_LIGHT_COLOR_THEME,
    spacing: DEFAULT_LIGHT_SPACING_THEME,
};

const DEFAULT_DARK_SPACING_THEME: ISpacingTheme = {
    base: 8,
    double: 16,
};

export const DEFAULT_DARK_THEME_ID = 'default-dark';

export const DEFAULT_DARK_THEME: ITheme = {
    id: DEFAULT_DARK_THEME_ID,
    color: DEFAULT_DARK_COLOR_THEME,
    spacing: DEFAULT_DARK_SPACING_THEME,
};