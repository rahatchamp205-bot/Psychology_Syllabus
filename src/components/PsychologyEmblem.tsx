import React from 'react';

interface PsychologyEmblemProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

export const PsychologyEmblem: React.FC<PsychologyEmblemProps> = ({
  size = 'md',
  className = ''
}) => {
  const sizeMap = {
    sm: 'w-6 h-7',
    md: 'w-7.5 h-9',
    lg: 'w-10 h-12',
    xl: 'w-14 h-16.5'
  };

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center select-none ${sizeMap[size]} ${className}`}
      title="Harvard University Veritas Shield"
    >
      <img
        src="/harvard-shield.svg"
        alt="Harvard University Veritas Shield"
        className="w-full h-full object-contain pointer-events-none drop-shadow-xs"
        loading="eager"
      />
    </div>
  );
};

export const HarvardLogo = PsychologyEmblem;
export default PsychologyEmblem;
