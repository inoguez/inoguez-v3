import { ApiCompetitiveEdgeCompetitiveEdge } from '@inoguez/strapi-types/ContentTypes';
import React from 'react';
import { HiOutlineCubeTransparent } from 'react-icons/hi2';
import { LuBrainCircuit } from 'react-icons/lu';
import { PiShieldStar } from 'react-icons/pi';

// Define the possible keys for ICONS
type IconTitle =
  | 'Tailored Solutions'
  | 'Broad Expertise'
  | 'Exceptional Quality';

const ICONS: Record<IconTitle, React.FC<React.SVGProps<SVGSVGElement>>> = {
  'Tailored Solutions': HiOutlineCubeTransparent,
  'Broad Expertise': LuBrainCircuit,
  'Exceptional Quality': PiShieldStar,
};
export default function CompetitiveEdge({
  competitiveEdge,
}: {
  competitiveEdge: ApiCompetitiveEdgeCompetitiveEdge;
}) {
  const title = competitiveEdge.attributes.title as unknown as IconTitle;
  const description = competitiveEdge.attributes.description.toString();
  const Icon = ICONS[title];

  return (
    <div className='rounded-[2rem] border-[1px] border-foreground p-4 grid grid-flow-row grid-rows-[auto_auto_1fr] gap-4 items-center '>
      <div className='aspect-square flex items-center justify-center  '>
        <Icon className='text-9xl ' />
      </div>
      <div className='flex flex-col gap-2 text-left'>
        <h4 className='font-bold text-lg w-full text-balance'>{title}</h4>
        <p className='font-light text-foreground/70 text-lg text-balance '>
          {description}
        </p>
      </div>
    </div>
  );
}
