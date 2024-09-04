import { LuDribbble, LuGithub, LuLinkedin } from 'react-icons/lu';

export const SOCIALS_ICONS = {
  Github: LuGithub,
  LinkedIn: LuLinkedin,
  Dribbble: LuDribbble,
};
export interface PopulatedImage {
  data: {
    attributes: {
      url: string;
    };
  };
}
