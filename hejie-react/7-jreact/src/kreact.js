function createElement(type, props, ...children) {
    // console.log(arguments);
    // 返回虚拟DOM
    props.children = children;
    delete props.__self;
    delete props.__source;

    // 能够区分组件类型：
    // vtype: 1-原生标签；2-函数组件；3-类组件
    let vtype;
    if (typeof type === 'string') {
        // 原生标签
        vtype = 1;
    } else {
        // console.log(typeof type);
        if (type.isReactComponent) {
            vtype = 3;
        } else {
            vtype = 2;
        }
    }


    return {vtype, type, props}
}


export class Component {
    static isReactComponent = true;
    constructor(props) {
        this.props = props;
        this.state = {};
    }
    setState() {}
    forceUpdate() {}
}

export default {createElement}