import React from 'react';
import { Card, Tag } from 'antd';
import Image from 'next/image';

interface CardProps {
  title: string;
  image: string;
  link?: string;
  tech: string[];
  part?: string;
  handleClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  image,
  link,
  tech,
  part,
  handleClick,
}) => {
  const renderTitle = () => {
    return (
      <div className='pt-4 pb-4'>
        {link ? (
          <a
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[1rem] font-semibold hover:underline'
          >
            {title}
          </a>
        ) : (
          <p className='text-[1rem] font-semibold'>{title}</p>
        )}
        {part && <p className='text-sm text-gray-500'>{part}</p>}
      </div>
    );
  };

  return (
    <Card className='w-full max-w-[400px] rounded-xl shadow-md overflow-hidden' hoverable>
        <div className="flex justify-center" onClick={handleClick} style={{ cursor: 'pointer' }}>
  <Image
    alt={title}
    src={image}
    width={300}
    height={300}
    className="rounded-t-md"
  />
</div>

      <div className='p-4'>
        {renderTitle()}

<div className="flex flex-wrap justify-center gap-2 mt-3 break-words">
  {tech.map((t, index) => (
    <Tag key={index} color="blue" className="max-w-full truncate">
      {t}
    </Tag>
  ))}
</div>

      </div>
    </Card>
  );
};

export default CardComponent;
