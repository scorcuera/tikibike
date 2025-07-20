import React from 'react';

const PageContainer = ({ 
  className, 
  children, 
  title, 
  titleClassName,
  backgroundColor = '#043C53',
  textColor = '#FFFFF7',
  titleColor = '#F3E622'
}) => {
  return (
    <div 
      className={className} 
      style={{ 
        backgroundColor, 
        color: textColor,
        position: 'relative',
        maxWidth: '100vw'
      }}
    >
      {title && (
        <div className={titleClassName}>
          <h3 style={{ color: titleColor }}>{title}</h3>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageContainer; 