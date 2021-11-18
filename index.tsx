import React from 'react';
import { observer } from 'mobx-react';

const processData = (options?: { value: string }) => options?.value || 'no data';

export const Component = observer(() => {
  const data = processData({ value: 'data' });
  return <div>{data}</div>;
});
