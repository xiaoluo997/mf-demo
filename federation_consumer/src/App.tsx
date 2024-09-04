import ProviderButton from 'federation_provider/button';
import fib from 'federation_provider/fib';
import ProField from 'federation_provider/proField';
import Table from 'federation_provider/table';

const App = () => {
  return (
    <div className="content">
      <h1>
        federration-consumer 这是 react 应用渲染的 ant-design 和
        ant-design/pro-components 组件，没安装antd
      </h1>

      <ProviderButton type="primary" danger>
        这是生产者提供的按钮组件
      </ProviderButton>
      <hr />
      <button onClick={() => console.log(fib(10))}>调用生产者提供的函数</button>
      <hr />
      <div>
        <ProField></ProField>
      </div>
      <hr></hr>
      <Table></Table>
    </div>
  );
};

export default App;
