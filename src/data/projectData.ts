export interface ProjectDetail {
  id: string;
  project_name: string;
  location: string;
  tagline: string;
  description: string;
  plot_size_min: number;
  plot_size_max: number;
  created_at: string;
  updated_at: string;
}

export interface Amenity {
  id: string;
  project_id: string;
  name: string;
  description: string;
  icon_name: string;
  display_order: number;
  created_at: string;
}

export interface PlotSpecification {
  id: string;
  project_id: string;
  specification_type: string;
  title: string;
  description: string;
  icon_name: string;
  display_order: number;
  created_at: string;
}

export interface GalleryImage {
  id: string;
  project_id: string;
  image_url: string;
  title: string;
  description: string;
  category: string;
  display_order: number;
  created_at: string;
}

export interface Video {
  id: string;
  project_id: string;
  video_url: string;
  title: string;
  description: string;
  thumbnail_url: string;
  display_order: number;
  created_at: string;
}

export const BHOR_PROJECT_ID = '20628515-0999-47c4-a3ae-47fa8eec8d59';
export const VELHE_PROJECT_ID = 'velhe-project-001';

export const bhorProject: ProjectDetail = {
  id: BHOR_PROJECT_ID,
  project_name: 'Nestland Farmhouse Plots',
  location: 'Bhor',
  tagline: 'Experience nature at its finest with stunning dam backwater views, seasonal waterfalls, and lush green surroundings.',
  description: 'Nestled in the scenic hills of Bhor, just 40 km from Katraj, Pune, this project offers breathtaking dam backwater views and a serene natural setting. With tar road access, electricity connection, and water supply, you can enjoy modern conveniences while surrounded by nature. The gated community ensures safety and privacy, making it perfect for a weekend farmhouse, organic plantation, or long-term investment.',
  plot_size_min: 10000,
  plot_size_max: 25000,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

export const velheProject: ProjectDetail = {
  id: VELHE_PROJECT_ID,
  project_name: 'Nestland Farmhouse Plots',
  location: 'Velhe',
  tagline: 'Breathtaking panoramic views and mesmerizing sunset vistas that soothe the soul.',
  description: 'Wake up to the music of birds, spend your day in nature\'s calm, and watch the sky turn golden from your own piece of paradise. With tar road access, provincial electricity, and water connection, you enjoy modern conveniences in a serene natural setting. The gated community ensures safety, privacy, and like-minded neighbors who value peace and quality living.',
  plot_size_min: 10000,
  plot_size_max: 20000,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString()
};

export const bhorAmenities: Amenity[] = [
  {
    id: '1',
    project_id: BHOR_PROJECT_ID,
    name: 'Secure Entry Gate',
    description: 'Gated community with security',
    icon_name: 'Lock',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: BHOR_PROJECT_ID,
    name: 'Dam Backwater & Sunset Views',
    description: 'Stunning natural views',
    icon_name: 'Sun',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: BHOR_PROJECT_ID,
    name: 'Tar Road Touch Access',
    description: 'Easy access via tar road',
    icon_name: 'Car',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: BHOR_PROJECT_ID,
    name: 'Electricity Connection',
    description: 'Provincial electricity available',
    icon_name: 'Zap',
    display_order: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    project_id: BHOR_PROJECT_ID,
    name: 'Water Connection',
    description: 'Water supply to each plot',
    icon_name: 'Droplet',
    display_order: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    project_id: BHOR_PROJECT_ID,
    name: 'Gated Community Planning',
    description: 'Well-planned community layout',
    icon_name: 'Home',
    display_order: 6,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    project_id: BHOR_PROJECT_ID,
    name: 'Tree Plantation Drive',
    description: 'Eco-friendly initiatives',
    icon_name: 'Trees',
    display_order: 7,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    project_id: BHOR_PROJECT_ID,
    name: 'Defined Plot Boundaries',
    description: 'Clear demarcation of plots',
    icon_name: 'Ruler',
    display_order: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    project_id: BHOR_PROJECT_ID,
    name: 'Rainwater Flow Management',
    description: 'Proper drainage system',
    icon_name: 'Waves',
    display_order: 9,
    created_at: new Date().toISOString()
  }
];

export const velheAmenities: Amenity[] = [
  {
    id: '1',
    project_id: VELHE_PROJECT_ID,
    name: 'Secure Entry Gate',
    description: 'Gated community with security',
    icon_name: 'Lock',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: VELHE_PROJECT_ID,
    name: 'Panoramic & Sunset View Points',
    description: 'Breathtaking views',
    icon_name: 'Sun',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: VELHE_PROJECT_ID,
    name: 'Tar Road Touch Access',
    description: 'Easy access via tar road',
    icon_name: 'Car',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: VELHE_PROJECT_ID,
    name: 'Electricity Connection',
    description: 'Provincial electricity available',
    icon_name: 'Zap',
    display_order: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    project_id: VELHE_PROJECT_ID,
    name: 'Water Connection',
    description: 'Water supply to each plot',
    icon_name: 'Droplet',
    display_order: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    project_id: VELHE_PROJECT_ID,
    name: 'Gated Community Planning',
    description: 'Well-planned community layout',
    icon_name: 'Home',
    display_order: 6,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    project_id: VELHE_PROJECT_ID,
    name: 'Tree Plantation Drive',
    description: 'Eco-friendly initiatives',
    icon_name: 'Trees',
    display_order: 7,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    project_id: VELHE_PROJECT_ID,
    name: 'Defined Plot Boundaries',
    description: 'Clear demarcation of plots',
    icon_name: 'Ruler',
    display_order: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    project_id: VELHE_PROJECT_ID,
    name: 'Rainwater Flow Management',
    description: 'Proper drainage system',
    icon_name: 'Waves',
    display_order: 9,
    created_at: new Date().toISOString()
  }
];

export const bhorSpecifications: PlotSpecification[] = [
  {
    id: '1',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'size',
    title: 'Plot Sizes',
    description: '10,000 Sq ft+, multiple size options to fit your farmhouse, weekend home, or hobby farm plans',
    icon_name: 'Ruler',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'ownership',
    title: 'Ownership',
    description: 'Clear title with individual 7/12 extract for each plot',
    icon_name: 'Shield',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'road_access',
    title: 'Road Access',
    description: 'Tar road touch / well-planned internal roads for easy access',
    icon_name: 'Car',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'electricity',
    title: 'Electricity',
    description: 'Provincial electricity connection up to the project boundary',
    icon_name: 'Zap',
    display_order: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'water',
    title: 'Water Supply',
    description: 'Provision for individual water connection to each plot',
    icon_name: 'Droplet',
    display_order: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'drainage',
    title: 'Drainage & Rainwater Flow',
    description: 'Natural slope and basic planning for smooth rainwater runoff',
    icon_name: 'Waves',
    display_order: 6,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'security',
    title: 'Gated Community',
    description: 'Secure entry gate and defined boundary for privacy',
    icon_name: 'Lock',
    display_order: 7,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'topography',
    title: 'Topography',
    description: 'Scenic plots with level and mild slopes for panoramic views',
    icon_name: 'Mountain',
    display_order: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    project_id: BHOR_PROJECT_ID,
    specification_type: 'usage',
    title: 'Flexible Use',
    description: 'Ideal for farmhouse, weekend retreat, plantation, or long-term land investment',
    icon_name: 'Home',
    display_order: 9,
    created_at: new Date().toISOString()
  }
];

export const velheSpecifications: PlotSpecification[] = [
  {
    id: '1',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'size',
    title: 'Plot Sizes',
    description: '10,000 Sq ft+, multiple size options to fit your farmhouse, weekend home, or hobby farm plans',
    icon_name: 'Ruler',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'ownership',
    title: 'Ownership',
    description: 'Clear title with individual 7/12 extract for each plot',
    icon_name: 'Shield',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'road_access',
    title: 'Road Access',
    description: 'Tar road touch / well-planned internal roads for easy access',
    icon_name: 'Car',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'electricity',
    title: 'Electricity',
    description: 'Provincial electricity connection up to the project boundary',
    icon_name: 'Zap',
    display_order: 4,
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'water',
    title: 'Water Supply',
    description: 'Provision for individual water connection to each plot',
    icon_name: 'Droplet',
    display_order: 5,
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'drainage',
    title: 'Drainage & Rainwater Flow',
    description: 'Natural slope and basic planning for smooth rainwater runoff',
    icon_name: 'Waves',
    display_order: 6,
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'security',
    title: 'Gated Community',
    description: 'Secure entry gate and defined boundary for privacy',
    icon_name: 'Lock',
    display_order: 7,
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'topography',
    title: 'Topography',
    description: 'Scenic plots with level and mild slopes for panoramic views',
    icon_name: 'Mountain',
    display_order: 8,
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    project_id: VELHE_PROJECT_ID,
    specification_type: 'usage',
    title: 'Flexible Use',
    description: 'Ideal for farmhouse, weekend retreat, plantation, or long-term land investment',
    icon_name: 'Home',
    display_order: 9,
    created_at: new Date().toISOString()
  }
];

export const bhorGalleryImages: GalleryImage[] = [
  {
    id: '1',
    project_id: BHOR_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/backwater.jpg',
    title: 'Dam Backwater View',
    description: 'Stunning backwater views from the property',
    category: 'view',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: BHOR_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/fort.jpg',
    title: 'Historic Fort View',
    description: 'View of nearby historic fort',
    category: 'view',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: BHOR_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/nature_trail.jpg',
    title: 'Nature Trail',
    description: 'Scenic nature trails around the property',
    category: 'nature',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: BHOR_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/scenic_view.jpg',
    title: 'Scenic Panoramic View',
    description: 'Breathtaking panoramic views',
    category: 'view',
    display_order: 4,
    created_at: new Date().toISOString()
  }
];

export const velheGalleryImages: GalleryImage[] = [
  {
    id: '1',
    project_id: VELHE_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/velhe_image1.jpg',
    title: 'Velhe View 1',
    description: 'Panoramic view from Velhe plots',
    category: 'view',
    display_order: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    project_id: VELHE_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/velhe_image2.jpg',
    title: 'Velhe View 2',
    description: 'Sunset view from Velhe',
    category: 'view',
    display_order: 2,
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    project_id: VELHE_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/velhe_image3.jpg',
    title: 'Velhe View 3',
    description: 'Natural landscape at Velhe',
    category: 'view',
    display_order: 3,
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    project_id: VELHE_PROJECT_ID,
    image_url: 'https://unnatgreen.com/assets/velhe_image4.jpg',
    title: 'Velhe View 4',
    description: 'Green surroundings at Velhe',
    category: 'view',
    display_order: 4,
    created_at: new Date().toISOString()
  }
];

export const bhorVideos: Video[] = [
  {
    id: '1',
    project_id: BHOR_PROJECT_ID,
    video_url: 'https://unnatgreen.com/assets/bhor_video.mp4',
    title: 'Bhor Project Tour',
    description: 'Virtual tour of Bhor farmland plots',
    thumbnail_url: '/bhor_plot_layout copy copy copy.jpg',
    display_order: 1,
    created_at: new Date().toISOString()
  }
];

export const velheVideos: Video[] = [
  {
    id: '1',
    project_id: VELHE_PROJECT_ID,
    video_url: 'https://unnatgreen.com/assets/velhe_video.mp4',
    title: 'Velhe Project Tour',
    description: 'Virtual tour of Velhe farmland plots',
    thumbnail_url: 'https://unnatgreen.com/assets/velhe_image1.jpg',
    display_order: 1,
    created_at: new Date().toISOString()
  }
];
