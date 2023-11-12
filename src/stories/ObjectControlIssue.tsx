import React from 'react';

interface ObjectControlIssueProps {
  testObjectControl?: Record<string, unknown>;
}

export const ObjectControlIssue = (props: ObjectControlIssueProps) => {
  console.log("TEST OBJECT CONTROL >>>", props.testObjectControl);

  return (
    <div>{JSON.stringify(props.testObjectControl)}</div>
  );
};
