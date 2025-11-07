import { FC } from 'react';
import { useInView } from 'react-intersection-observer';

interface Props {
  card: any;
}

const Index: FC<Props> = ({ card: { title, category, frequency, amount, description, features, number, classes, locations } }) => {
  const { ref } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });
  return (
    <div ref={ref} key={number} className={`px-[5vw] md:px-[4vw] pb-[8vw] md:pb-[10vw] last:pb-[10vw] md:last:pb-[12vw] ${classes}`}>
      <div className="flex items-baseline gap-[1.5vw] md:gap-[2vw] mb-[1.2vw] md:mb-[2vw] flex-wrap">
        <h4 className="text-[3.2vw] md:text-[6vw] md:mt-[2vw] font-light">{title}</h4>
        {category && (
          <span className="text-[1.1vw] md:text-[1.8vw] text-primary/70 font-medium">({category})</span>
        )}
      </div>
      {(frequency || amount || locations) && (
        <div className="flex flex-wrap gap-[1.2vw] md:gap-[1.5vw] mb-[1.8vw] md:mb-[2.5vw]">
          {frequency && (
            <span className="text-[1vw] md:text-[1.6vw] text-text-1/60 px-[1vw] py-[0.4vw] md:px-[1.5vw] md:py-[0.6vw] bg-bg-2 rounded-full border border-stroke/30">
              {frequency}
            </span>
          )}
          {amount && (
            <span className="text-[1vw] md:text-[1.6vw] text-primary px-[1vw] py-[0.4vw] md:px-[1.5vw] md:py-[0.6vw] bg-primary/10 rounded-full border border-primary/30">
              {amount}
            </span>
          )}
          {locations && (
            <span className="text-[1vw] md:text-[1.6vw] text-text-1/60 px-[1vw] py-[0.4vw] md:px-[1.5vw] md:py-[0.6vw] bg-bg-2 rounded-full border border-stroke/30">
              {locations}
            </span>
          )}
        </div>
      )}
      <div className={`flex items-start space-x-[2.5vw] md:space-x-0 pt-[1.5vw] md:flex-col`}>
        <div className="flex-1 md:mb-[2vw]">
          <p className="text-[1.4vw] md:text-[2.5vw] font-medium leading-[1.7] md:text-balance md:leading-[1.6] mb-[1.8vw] md:mb-[2.5vw] text-text-1/90">
            {description}
          </p>
          {features && features.length > 0 && (
            <div className="space-y-[1.2vw] md:space-y-[1.8vw]">
              <h5 className="text-[1.2vw] md:text-[2vw] font-semibold text-primary mb-[0.8vw] md:mb-[1.2vw]">
                Program Features:
              </h5>
              <ul className="space-y-[1vw] md:space-y-[1.3vw]">
                {features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start space-x-[1.2vw] md:space-x-[1.8vw]">
                    <div className="h-[0.7vw] w-[0.7vw] md:h-[1vw] md:w-[1vw] rounded-full bg-primary mt-[0.5vw] md:mt-[0.7vw] flex-shrink-0"></div>
                    <p className="text-[1.2vw] md:text-[2vw] text-text-1/75 leading-[1.6]">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative flex-1">
          <div className="absolute right-[5vw] top-[1.5vw] z-[1] text-right text-[14vw] font-extrabold tracking-[5%] text-gray-1 md:text-[25vw] md:top-0 opacity-40">
            {number}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
