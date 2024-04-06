import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../../components';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Displays the path to the current resource using a hierarchy of links.',
      },
    },
  },
} as Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const DefaultBreadcrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.List>
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/">Home</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Link href="/components">Components</Breadcrumb.Link>
        </Breadcrumb.Item>
        <Breadcrumb.Separator />
        <Breadcrumb.Item>
          <Breadcrumb.Page>Breadcrumb</Breadcrumb.Page>
        </Breadcrumb.Item>
      </Breadcrumb.List>
    </Breadcrumb>
  );
};

export const Default: Story = {
  render: () => <DefaultBreadcrumb />,
};
