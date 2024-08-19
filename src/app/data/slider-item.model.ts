export interface SliderItem {
    backgroundImage: string;  // URL of the background image
    title: string;            // Main title of the slider
    subtitle?: string;        // Subtitle or highlighted text (optional)
    description: string;      // Description text
    buttons: SliderButton[];  // Array of buttons
  }
  
  export interface SliderButton {
    text: string;             // Button text
    link: string;             // Router link or URL
    isPrimary?: boolean;      // Flag to mark the primary button (optional)
  }  