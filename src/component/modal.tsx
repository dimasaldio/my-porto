import { Modal, Image, Typography } from 'antd';
import React from 'react';

const { Title, Paragraph } = Typography;
interface ModalProps {
    open: boolean;
    onCancel: () => void;
    image: string;
    title: string;
    description?: string;
    part?: string;
    technology?: string;
    purpose?: string;
}

const MyModal: React.FC<ModalProps> = ({ open, onCancel, image, title, description, part, purpose, technology }) => {
    return (
        <Modal
            open={open}
            onCancel={onCancel}
            footer={null}
        >
            <div className="flex items-center justify-center">
                <Image
                    src={image}
                    alt="Image description"
                    preview={true}
                />
            </div>
            <Title level={4}>{title}</Title>
            <Paragraph className='my-8'>
                {description}
                <p>I worked as a {part} in this project.</p>
                <p><span className='font-semibold'>{purpose}</span></p>
                <p>This project utilized a modern tech stack of {technology}.</p>
            </Paragraph>
        </Modal>
    );
};

export default MyModal;