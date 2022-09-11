import ImageButton from 'src/components/ImageButton';
import cn from 'classnames';
import { Link } from 'react-router-dom';

export type BlockContentProps = {
  title: string;
  description: string;
  textButton: string;
  className?: string;
  link?: string;
  onClick?: () => void;
};

const BlockContent = ({ title, description, textButton, className, onClick, link }: BlockContentProps) => {
  return (
    <div className={cn('items-left flex flex-col justify-center', className)}>
      <h2 className="mb-4 text-2xl font-bold tb:mb-8 tb:text-4xl">{title}</h2>
      <p className="mb-8 max-w-[600px] text-sm font-normal tb:mb-16 tb:text-base">{description}</p>
      {link ? (
        <Link to={link}>
          <ImageButton variant="primary" text={textButton} onClick={onClick} />
        </Link>
      ) : (
        <ImageButton variant="primary" text={textButton} onClick={onClick} />
      )}
    </div>
  );
};

export default BlockContent;
