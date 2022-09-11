import { Transition } from '@headlessui/react';
type FadeTransitionProps = {
  duration?: string;
};

const FadeTransition: React.FC<FadeTransitionProps> = ({ duration = '800', children }) => {
  return (
    <Transition
      appear={true}
      show={true}
      enter={`transition-opacity duration-${duration}`}
      enterFrom="opacity-0"
      enterTo="opacity-100"
    >
      {children}
    </Transition>
  );
};

export default FadeTransition;
