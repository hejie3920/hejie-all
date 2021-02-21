/* eslint-disable */
import React from 'react';
import FieldContext from './FieldContext';

// 因为等会儿我要在这儿用hook方法
// export default function Form({ children, form, onFinish, onFinishFailed }) {
//   form.setCallback({
//     onFinish,
//     onFinishFailed,
//   });
//   return (
//     <form
//       onSubmit={event => {
//         event.preventDefault();
//         form.submit();
//       }}
//     >
//       <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
//     </form>
//   );
// }

const Form = ({ children, form, onFinish, onFinishFailed }) => {
  form.setCallback({ onFinish, onFinishFailed });
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        form.submit();
      }}
    >
      <FieldContext.Provider value={form}>{children}</FieldContext.Provider>
    </form>
  );
};

export default Form;

{
  /* <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
  <Field name="username" rules={[nameRules]}>
    <Input placeholder="input UR Username" />
  </Field>
  <Field name="password" rules={[passworRules]}>
    <Input placeholder="input UR Password" />
  </Field>
  <Button type="primary" htmlType="submit">
    提交
  </Button>
</Form>; */
}
