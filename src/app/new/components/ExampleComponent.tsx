'use client';

import React from 'react';
import {api} from '../../../utils/api';

interface ExampleComponentProps {}

const ExampleComponent: React.FC<ExampleComponentProps> = (props) => {
  const testQuery = api.test.one.useQuery();

  const addPost = api.test.add.useMutation();

  api.test.onAdd.useSubscription(undefined, {
    onData(data) {
      console.log('received', data);
    },
    onError(err) {
      console.error('error', err);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          addPost.mutate();
          testQuery.refetch();
        }}
      >
        click me
      </button>
    </div>
  );
};

export default ExampleComponent;
