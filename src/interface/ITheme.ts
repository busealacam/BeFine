export interface IColorTheme {
    PRIMARY_COLOR: string;
    SECONDARY_COLOR: string;
    TITLE_COLOR: string;
    BACKGROUND_COLOR: string;
    BUTTON_COLOR: string;
}

export interface ISpacingTheme {
    base: number;
    double: number;
  }

export interface ITheme {
    id: string,
    color: IColorTheme,
    spacing: ISpacingTheme,
  }