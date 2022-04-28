import React from "react";

class AlertTest extends React.Component<{}, { value: string }> {
    constructor(props: {}, public inputTag: React.RefObject<HTMLInputElement>) {
        super(props);
        this.state = {
            value: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        };
        this.inputTag = React.createRef();
    }
    click = () => alert(this.inputTag.current?.value);
    change = (e: React.ChangeEvent<HTMLInputElement>) => this.setState(c => ({ ...c, value: e.target.value }));
    render(): React.ReactNode {
        return <div>
            <input
                type="text"
                ref={this.inputTag}
                onChange={this.change}
                value={this.state.value} />
            <button onClick={this.click}>ALERT!</button>
        </div>
    }
}

class SelectTest extends React.Component<{}, {}> {
    constructor(props: {}, public select: React.RefObject<HTMLSelectElement>) {
        super(props);
        this.select = React.createRef();
    }
    submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        window.open(this.select.current?.value, '_blank');
    }
    render(): React.ReactNode {
        return <div>
            <form action="javascript:;" onSubmit={this.submit}>
                <select ref={this.select}>
                    <option value="javascript:;">Family Site</option>
                    <option value="https://www.naver.com">Naver</option>
                    <option value="https://www.google.com">Google</option>
                </select>
                <button type="submit">GO!</button>
            </form>
        </div>
    }
}

export default function MyComponent() {
    return <>
        <AlertTest />
        <SelectTest />
    </>
}