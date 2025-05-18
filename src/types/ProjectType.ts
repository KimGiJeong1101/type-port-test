export type ProjectType = {
  id: number;
  imgName: string;
  title?: string;
  subtitle?: string;
  date?: string;
  description?: string;
  details?: string[];
  technologies?: string[];
  giturls?: string;
  videourls?: string;
  pageurls?: string;
  text?: string;
};

export type ProjectProps = {
  toyprojectId?: number;
  teamprojectId?: number;
  isVisible: boolean;
};
