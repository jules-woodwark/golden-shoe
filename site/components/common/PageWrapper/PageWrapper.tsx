import { FC, ReactNode } from 'react'
import { Heading, Section } from '@components/ui'

interface Props {
  title: string
  children: ReactNode
}

const PageWrapper: FC<Props> = ({ title, children }) => {
  return (
    <Section>
      <Heading>{title}</Heading>
      {children}
    </Section>
  );
};

export default PageWrapper;