import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { Form, FormProvider, Input, Button } from '../../components';

const meta = {
  title: 'Components/Form',
  component: Form,
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

const DefaultForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <FormProvider {...form}>
      <Form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Form.Field
          control={form.control}
          name="username"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Username</Form.Label>
              <Form.Control>
                <Input placeholder="Username" {...field} />
              </Form.Control>
              <Form.Description>
                This is your public display name.
              </Form.Description>
              <Form.Message />
            </Form.Item>
          )}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => <DefaultForm />,
};
