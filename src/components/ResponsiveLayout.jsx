import useResponsive from '@/hooks/useResponsive';

const ResponsiveLayout = ({ 
  mobileComponent: MobileComponent, 
  desktopComponent: DesktopComponent 
}) => {
  const { isSmallDevice } = useResponsive();
  
  return isSmallDevice ? <MobileComponent /> : <DesktopComponent />;
};

export default ResponsiveLayout; 