import React, { cloneElement, Component } from 'react';

export default function createForm(WrappedComponent) {
  return class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    handleChange = e => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    validateFields = params => {
      console.warn('TCL:校验逻辑');
    };

    getFieldDecorator = field => comp => {
      return cloneElement(comp, {
        name: field,
        value: this.state[field] || '',
        onChange: this.handleChange
      });
    };
    setFieldValue = params => {
      this.setState(params);
    };
    getFieldValue = () => {
      return this.state;
    };
    getForm = () => {
      return {
        form: {
          getFieldDecorator: this.getFieldDecorator,
          setFieldValue: this.setFieldValue,
          getFieldValue: this.getFieldValue,
          validateFields: this.validateFields
        }
      };
    };
    render() {
      return <WrappedComponent {...this.props} {...this.getForm()} />;
    }
  };
}
