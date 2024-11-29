import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/blocks';
import React from 'react';

export const WithDocsLayout = () => (
    <div style={{
      width: '100%',
      height: '100%',
      overflowX: 'hidden',
      overflowY: 'auto',
    }}>
          <Title />
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
          <Stories />
    </div>
)