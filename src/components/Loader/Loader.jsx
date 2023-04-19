import { InfinitySpin } from 'react-loader-spinner';
import { WrapperLoader } from './Loader.styles';

export const Loader = () => {
  return (
    <WrapperLoader>
      <InfinitySpin width="200" color="#2196f3" />
    </WrapperLoader>
  );
};
