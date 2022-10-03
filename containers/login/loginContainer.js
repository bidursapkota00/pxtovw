import React from "react";
import {Button, Form, Input} from "antd";
import {saveDataInCookie} from "../../util/auth";
import Router, {useRouter} from "next/router";

import _loginEn from "./locales/en/login.json";
import _loginNe from "./locales/ne/login.json";

export const LoginContainer = () => {
    const router = useRouter();
    const {locale} = router;
    const t = locale === "en" ? _loginEn : _loginNe;
    const handleSubmit = (values) => {
        saveDataInCookie('name', values.name);
        saveDataInCookie('password', values.password);
        Router.push("/dashboard");
    }
    return (
        <div>
            <Form onFinish={handleSubmit}>
                <Form.Item label={t.label1} name={"name"}>
                    <Input/>
                </Form.Item>
                <Form.Item label={t.label2} name={"password"}>
                    <Input/>
                </Form.Item>
                <Form.Item>
                    <Button htmlType="submit">{t.buttonLabel}</Button>
                </Form.Item>
            </Form>
        </div>
    )
}