import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';
import { Button, Form, InputNumber } from 'antd';
import { NextSeo } from 'next-seo';

const labelViewport = (
  <p style={{ fontSize: '18px', color: 'purple' }}>
    Viewport Width (Total Width)
  </p>
);
const reqViewport = (
  <p style={{ fontSize: '18px', color: 'purple' }}>Required Width</p>
);

const validateMessages = {
  required: '${name} is required!',
  types: {
    email: '${name} is not a valid email!',
    number: '${name} is not a valid number!',
  },
  number: {
    range: '${name} must be greater or equal to ${min}',
  },
};

function Home() {
  const [form] = Form.useForm();

  const [vw, setVw] = useState(0);
  let { req } = useRef(null);
  let { tot } = useRef(null);

  const onFinish = (values) => {
    console.log(values);
    setVw((values.RequiredWidth / values.ViewportWidth) * 100);
  };
  const onReset = () => {
    form.resetFields();
    setVw(0);
    setTimeout(() => tot.focus(), 2000);
  };

  useEffect(() => tot.focus(), []);

  return (
    <div style={{ marginTop: '30px' }}>
      <NextSeo
        title="Pixel to View Width converter"
        description="px to vw converter"
      />
      <Head>
        <title>pxtovw</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Form
          form={form}
          name="pxtovw"
          layout="vertical"
          scrollToFirstError
          size="large"
          onFinish={onFinish}
          validateMessages={validateMessages}
          requiredMark={false}
        >
          <Form.Item
            name="ViewportWidth"
            label={labelViewport}
            rules={[
              {
                type: 'number',
                required: true,
                min: 0.1,
              },
            ]}
            labelCol={{
              span: 22,
              offset: 1,
            }}
            wrapperCol={{ span: 22, offset: 1 }}
            style={{ marginBottom: '50px' }}
          >
            <InputNumber
              step="0.001"
              addonAfter="px"
              style={{ width: '80%' }}
              controls={false}
              type="number"
              onPressEnter={() => {
                req.focus();
              }}
              ref={(ip) => {
                tot = ip;
              }}
            />
          </Form.Item>

          <Form.Item
            name="RequiredWidth"
            label={reqViewport}
            rules={[
              {
                type: 'number',
                required: true,
                min: 0,
              },
            ]}
            labelCol={{
              span: 22,
              offset: 1,
            }}
            wrapperCol={{ span: 22, offset: 1 }}
          >
            <InputNumber
              step="0.001"
              addonAfter="px"
              style={{ width: '80%' }}
              controls={false}
              type="number"
              ref={(ip) => {
                req = ip;
              }}
            />
          </Form.Item>

          <div
            style={{
              display: 'flex',
              margin: '35px 35px',
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: '35px' }}
            >
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
          </div>
        </Form>

        <p style={{ marginLeft: '35px', fontSize: '18px', color: 'purple' }}>
          <span>Required ViewWidth:&ensp;</span>
          <span style={{ color: '#111' }}>{vw.toFixed(3)}vw</span>
          &emsp;&emsp;
          <Button
            onClick={() => {
              navigator.clipboard.writeText(vw.toFixed(3) + 'vw');
            }}
            danger
          >
            copy
          </Button>
        </p>
      </main>
    </div>
  );
}

export default Home;
