// frontend/src/services/utils/themeService.js

class ThemeService {
    // Method to get the current theme from localStorage or default to 'light'
    static getCurrentTheme() {
      return localStorage.getItem('theme') || 'light'; // 'light' is the default theme
    }
  
    // Method to set a new theme in localStorage
    static setTheme(theme) {
      localStorage.setItem('theme', theme);
      this.applyTheme(theme);
    }
  
    // Method to apply the theme by toggling CSS classes or updating styles
    static applyTheme(theme) {
      const body = document.body;
      body.classList.remove('light', 'dark'); // Remove existing theme classes
      body.classList.add(theme); // Add the new theme class
  
      // Optionally, update other UI elements or styles here
      if (theme === 'dark') {
        // Custom dark mode styles or overrides (e.g., background, text color)
        body.style.backgroundColor = '#121212'; // Example dark background color
        body.style.color = '#ffffff'; // Example dark text color
      } else {
        // Custom light mode styles
        body.style.backgroundColor = '#ffffff'; // Example light background color
        body.style.color = '#000000'; // Example light text color
      }
    }
  
    // Method to toggle between 'light' and 'dark' themes
    static toggleTheme() {
      const currentTheme = this.getCurrentTheme();
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      this.setTheme(newTheme);
    }
  }
  
  export default ThemeService;
  