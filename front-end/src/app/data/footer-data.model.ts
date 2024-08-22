export interface AboutUs {
  description: string;
}

export interface SocialLink {
  url: string;
  icon: string;
}

export interface QuickLink {
  url: string;
  label: string;
}

export interface OpenHour {
  day: string;
  time: string;
}

export interface OpenHours {
  description: string;
  hours: OpenHour[];
}
