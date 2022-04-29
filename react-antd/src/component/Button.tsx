import { Card, Button } from "antd";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return <>
        <Card title="Ghost Buttons">
            <Button type="primary" ghost>Primary</Button>
            <Button ghost>Default</Button>
            <Button type="dashed" ghost>Dashed</Button>
            <Button type="primary" danger ghost>Danger</Button>
        </Card>
        <Card title="Danger Buttons">
            <Button type="primary" danger>Primary</Button>
            <Button danger>Default</Button>
            <Button type="dashed" danger>Dashed</Button>
            <Button type="text" danger>Text</Button>
            <Button type="link" danger>Link</Button>
        </Card>
    </>
};
