import React from 'react';

const Marquee = (props) => {
    const { children,styles } = props;
  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div className="inline-block animate-marquee">
        <span className={`text-lg font-bold ${styles ? styles : 'text-black '}`}>
          {children}
        </span>
      </div>
    </div>
  );
};

export default Marquee;
