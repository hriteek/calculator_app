function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: withOpacity('--color-text-primary'),
      secondary: withOpacity('--color-text-secondary'),
      accent: withOpacity('--color-text-accent'),
      'accent-secondary': withOpacity('--color-text-accent-secondary'),

      main: withOpacity('--color-bg-main'),
      toggle: withOpacity('--color-bg-toggle'),
      screen: withOpacity('--color-bg-screen'),

      'key-primary-background': withOpacity('--color-key-primary-background'),
      'key-primary-shadow': withOpacity('--color-key-primary-shadow'),
      'key-accent-background': withOpacity('--color-key-accent-background'),
      'key-accent-shadow': withOpacity('--color-key-accent-shadow'),
      'key-secondary-background': withOpacity(
        '--color-key-secondary-background'
      ),
      'key-secondary-shadow': withOpacity('--color-key-secondary-shadow'),
    },
  },
  plugins: [],
};
