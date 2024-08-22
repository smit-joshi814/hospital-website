export interface ChooseLeftItem {
    title: string;        // Title of the section
    content: string;      // Main content text
    listItems: string[];  // List items for the left section
  }
  
  export interface ChooseRightItem {
    videoUrl: string;     // URL for the video
  }
  
  export interface WhyChooseData {
    sectionTitle: string;        // Title of the section
    sectionImage: string;        // Image URL
    sectionDescription: string;  // Description of the section
    chooseLeft: ChooseLeftItem;  // Data for the left side
    chooseRight: ChooseRightItem;// Data for the right side
  }  