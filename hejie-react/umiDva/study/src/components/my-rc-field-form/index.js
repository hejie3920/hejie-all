/* eslint-disable */
import _Form from './Form';
import useForm from './useForm';
import Field from './Field';

const Form = _Form;

Form.useForm = useForm;
Form.Field = Field;

export { Field, useForm };
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
