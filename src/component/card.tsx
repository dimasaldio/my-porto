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

const CardComponent: React.FC<CardProps> = ({ title, image, link, tech, part, handleClick }) => {
    const renderTitle = () => {
        if (!link) {
            return <p className="text-[1rem] font-semibold md-pt-8 py-4">{title} - <span className='font-light'>{part}</span></p>;
        }

        return (
            <div className='md-pt-8 py-4'>
                <a href={link} target='_blank' className="text-[1rem] font-semibold">{title} - <span className='font-light'>{part}</span></a>
            </div>
        );
    };

    return (
        <Card
            className='lg:w-[400px] overflow-hidden rounded-lg'
            hoverable
        >
            <Image alt={title} className='w-full' src={image} width={300} height={300} onClick={handleClick} style={{cursor:'pointer'}} />
            {renderTitle()}
            <div className='flex items-center text-center justify-center font-light w-full'>
                {tech.map((t, index) => (
                    <Tag key={index} color='blue'>{t}</Tag>
                ))}
            </div>
        </Card>
    )
};

export default CardComponent;