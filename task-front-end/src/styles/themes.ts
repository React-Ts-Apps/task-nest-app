export const lightTheme = {
  background: '#f7f9fc',
  text: '#111111',
  navBg: '#ececef',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  hoverBg: '#d4eafc',
  buttonBg: '#007bff',
  buttonHoverBg: '#0056b3',
  columnHeaderBg: '#e2e6ea',
  borderColor: '#ccc',
  secondaryButton: '#ff5c5c',
};

export const darkTheme = {
  background: '#18171d',
  text: '#F5F5F5',
  navBg: '#1e1e1e',
  boxShadow: '0 0 10px rgba(255,255,255, 0.2)',
  hoverBg: '#2a2f3a',
  buttonBg: '#1e90ff',
  buttonHoverBg: '#1c7ed6',
  columnHeaderBg: '#2c2c2e',
  borderColor: '#444',
  secondaryButton: '#ff1c1c',
};


export type ThemeType = typeof lightTheme;
