export type Theme = MouseEvent<HTMLButtonElement, MouseEvent>;
export type ThemeContextType = {
  isDarkMode: boolean;
  changeTheme: (theme: Theme) => void;
};