import {api} from '../utils/api';

export default function IndexPage() {
  const testQuery = api.test.one.useQuery();

  const addPost = api.test.add.useMutation();

  const subscription = api.test.onAdd.useSubscription(undefined, {
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
}
