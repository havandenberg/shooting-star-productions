export interface VideoCategory {
  activeColor: string;
  frameColor: string;
  id: string;
  name: string;
}

export interface Video {
  categoryId: string;
  clientName?: string;
  iconSrc: string;
  id: string;
  name: string;
  testimonial?: string[];
  videoCover: string;
  videoSrc: string;
}
