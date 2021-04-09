import { forwardRef } from 'react';
import { Helmet } from 'react-helmet';

export type Props = {
  children?: React.ReactNode;
  className?: string;
  title?: string;
};

const Page = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const { children, title, ...rest } = props;

  return (
    <div ref={ref} {...rest}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </div>
  );
});

export default Page;
