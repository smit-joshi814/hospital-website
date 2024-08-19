export interface ScheduleItem {
    icon: string;       // Icon class name
    category: string;   // Category or title above the main heading
    title: string;      // Main title
    description?: string; // Optional description
    timings?: string[]; // Optional array of timings (used for the "Opening Hours" section)
    linkText: string;   // Text for the link
    linkUrl: string;    // URL for the link
  }  