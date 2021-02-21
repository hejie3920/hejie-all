/* eslint-disable */
import React, { Component, useEffect } from 'react';
// 直接用
// import Form, {Field} from "rc-field-form";
import Form, { Field } from '../components/my-rc-field-form';
import { Input, Button } from 'antd';
import createForm from '../components/my-rcform-hoc';

const nameRules = { required: true, message: '请输入姓名！' };
const passworRules = { required: true, message: '请输入密码！' };

// 函数式组件用自定义hook useForm来写
// export default function MyRCFieldForm(props) {
//   const [form] = Form.useForm();

//   const onFinish = val => {
//     console.log('onFinish', val);
//   };

//   // 表单校验失败执行
//   const onFinishFailed = val => {
//     console.log('onFinishFailed', val);
//   };

//   useEffect(() => {
//     console.log('form', form);
//     form.setFieldsValue({ username: 'default' });
//   }, []);

//   // ant3的数据全都收集放在form里面，这就造成一个问题，一个input框一旦变化整个form都会变化就会造成
//   // 整个表单都重新渲染，ant4做了优化，将每个input的值状态提升到
//   return (
//     <div>
//       <h3>MyRCFieldForm</h3>
//       <Form form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
//         <Field name="username" rules={[nameRules]}>
//           <Input placeholder="input UR Username" />
//         </Field>
//         <Field name="password" rules={[passworRules]}>
//           <Input placeholder="input UR Password" />
//         </Field>
//         <Button type="primary" htmlType="submit">
//           提交
//         </Button>
//       </Form>
//     </div>
//   );
// }

// antd createForm
@createForm
class MyRCHocForm extends Component {
  componentDidMount() {}
  submit = () => {
    const { getFieldValue, validateFields } = this.props.form;
    validateFields((err, val) => {
      if (err) {
        console.warn('TCL: 错误');
      } else {
        console.warn('TCL: success');
      }
    });
    console.warn('TCL: ', getFieldValue());
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <h3>MyRCFieldForm</h3>
        {getFieldDecorator('username', { rules: [nameRules] })(<Input placeholder="Username" />)}
        {getFieldDecorator('password', { rules: [passworRules] })(<Input placeholder="Password" />)}
        <button onClick={this.submit}>Submit</button>
      </div>
    );
  }
}
export default MyRCHocForm;
