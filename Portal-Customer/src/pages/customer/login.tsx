import React, { useState, useEffect } from 'react';
import { Dispatch, connect, useIntl, useLocation, history } from 'umi';
import { ConnectState } from '@/models/connect';
import classNames from 'classnames';
import { Form, Input, Button, Col, Row, Checkbox } from 'antd';
import { FormInstance } from 'antd/lib/form';

import styles from './index.less';
import { LockTwoTone, MailTwoTone } from '@ant-design/icons';
import { Store } from 'antd/lib/form/interface';
import store from 'store';
import { getCookie } from './../../utils/cookie';

const FormItem = Form.Item;

interface LoginProps {
  dispatch: Dispatch;
  submitting?: boolean;
  className?: string;
  form?: FormInstance;
  accessToken: string;
}

const Login: React.FC<LoginProps> = props => {
  const { className, submitting, form, dispatch } = props;
  const { formatMessage } = useIntl();
  const clsString = classNames(styles.submit);
  const [isLoginBySSO, setIsLoginBySSO] = useState(false);
  const [tokenValid, setTokenValid] = useState();
  const handleFinish = (values: Store) => {
    dispatch({
      type: 'customer/login',
      payload: { ...values, grantType: 'client_customer' },
    });
  };


  useEffect(() => {
    const token = getCookie('accessToken');
    const newToken = JSON.parse(token);
    if (newToken['token']) {
      setIsLoginBySSO(true);
      loginSSO(newToken['token']);
      setTokenValid(newToken['token']);
    }
  }, []);


  const loginSSO = (ssoToken: string) => {
    dispatch({
      type: 'customer/setAccessToken',
      payload: ssoToken,
    });
    store.set('accessToken', ssoToken);
  };

  useEffect(() => {
    if (tokenValid) {
      history.push({
        pathname: '/invitation',
      });
    }
  }, [tokenValid]);

  return (
    <div>
      <div className={styles.main}>
        <div className={classNames(className, styles.login)}>
          {isLoginBySSO ? (
            <h3>Redirecting...</h3>
          ) : (
            <Row style={{ marginTop: 90, justifyContent: 'center' }}>
              <Col
                xs={{ span: 20 }}
                sm={{ span: 20 }}
                md={{ span: 20 }}
                lg={{ span: 20 }}
                xl={{ span: 20 }}
                xxl={{ span: 20 }}
              >
                <Form
                  onFinish={handleFinish}
                  form={form}
                  initialValues={{ remember: true }}
                >
                  <FormItem
                    name="userid"
                    style={{ marginBottom: 0 }}
                    rules={[
                      {
                        required: true,
                        message: formatMessage({ id: 'login.requireEmail' }),
                      },
                    ]}
                  >
                    <Input
                      className={styles.inputEmail}
                      placeholder="User name"
                      size="large"
                      prefix={
                        <MailTwoTone
                          twoToneColor="#bfbfbf"
                          className={styles.prefixIcon}
                        />
                      }
                    />
                  </FormItem>
                  <Form.Item
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: formatMessage({ id: 'login.requirePass' }),
                      },
                    ]}
                  >
                    <Input.Password
                      className={styles.inputPassword}
                      placeholder={formatMessage({ id: 'login.password' })}
                      size="large"
                      prefix={
                        <LockTwoTone
                          twoToneColor="#bfbfbf"
                          className={styles.prefixIcon}
                        />
                      }
                    />
                  </Form.Item>
                  <Form.Item style={{ marginBottom: 0 }}>
                    <Button
                      className={clsString}
                      htmlType="submit"
                      type="primary"
                      size="large"
                      loading={submitting}
                    >
                      {formatMessage({ id: 'login.textLogin' })}
                    </Button>
                  </Form.Item>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginTop: 20,
                    }}
                  >
                    <FormItem className={styles.forgotPass}>
                      <p>
                        <Checkbox
                          style={{ border: 'none', outline: 'none' }}
                          name="remember"
                        />{' '}
                        {formatMessage({ id: 'login.remember' })}
                      </p>
                    </FormItem>
                    <FormItem className={styles.rememberMe}>
                      <Button
                        type="link"
                        onClick={() => alert('You must do it !')}
                      >
                        {formatMessage({ id: 'login.forgotPass' })}
                      </Button>
                    </FormItem>
                  </div>
                </Form>
              </Col>
            </Row>
          )}
        </div>
      </div>
      <Row justify="center">
        <Col span={24} className={styles.powerBy}>
          Powered by Digitech Solutions
        </Col>
      </Row>
    </div>
  );
};

export default connect(({ loading, customer }: ConnectState) => ({
  submitting: loading.effects['customer/login'],
  // accessToken: customer.accessToken,
}))(Login);
