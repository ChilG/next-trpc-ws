'use server';

import React from 'react';
import {prisma} from '../../server/prisma';
import ExampleComponent from './components/ExampleComponent';

interface PageProps {}

const Page: React.FC<PageProps> = async (props) => {
  const config = await prisma.globalConfiguration.findMany({});

  return (
    <div>
      <ul>
        {config.map((item) => {
          return (
            <li key={item.key}>
              {item.key} {item.value}
            </li>
          );
        })}
      </ul>
      <ExampleComponent />
    </div>
  );
};

export default Page;
