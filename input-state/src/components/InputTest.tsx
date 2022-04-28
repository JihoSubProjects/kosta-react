import React from "react";

class InputTestAlpha extends React.Component<{}, { inputChange: string }> {
    constructor(props: {}) {
        super(props);
        this.state = {
            inputChange: 'mutable value'
        }
    }

    changeFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState(current => ({ ...current, inputChange: e.target.value }));
    }

    render(): React.ReactNode {
        return (
            <div>
                <h1>ALPHA TEST</h1>
                <input style={{ border: '1px solid red' }} value='이 값은 바꿀 수 없습니다.' readOnly />
                <input onChange={this.changeFunc} value={this.state.inputChange} />
            </div>
        );
    }
}

interface InputType {
    alpha: string;
    beta: string;
    gamma: string;
    delta: string;
}

class InputTestBeta extends React.Component<{}, { inputs: InputType }> {

    constructor(props: {}) {
        super(props);
        this.state = {
            inputs: {
                alpha: 'alpha',
                beta: 'beta',
                gamma: 'gamma',
                delta: 'delta',
            },
        }
    }

    changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        this.setState((current) => ({ inputs: { ...current.inputs, [name]: value} }))
    }

    render(): React.ReactNode {
        return <div>
            <h1>BETA TEST</h1>
            <input type='text' name="alpha" value={this.state.inputs.alpha} onChange={this.changeInput} />
            <input type='text' name="beta" value={this.state.inputs.beta} onChange={this.changeInput} />
            <input type='text' name="gamma" value={this.state.inputs.gamma} onChange={this.changeInput} />
            <input type='text' name="delta" value={this.state.inputs.delta} onChange={this.changeInput} />
        </div>;
    }

}

class InputTestGamma extends React.Component<{}, {textAreaValue: string}> {
    constructor(props: {}) {
        super(props);
        const textAreaValue = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero excepturi corrupti enim consectetur amet alias optio quo odit molestiae. Quas cupiditate eos molestias ullam saepe atque iste aspernatur ducimus consequatur!';
        this.state = { textAreaValue };
    }
    changeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState(c => ({ ...c, textAreaValue: e.target.value }))
    }
    render(): React.ReactNode {
        return <>
            <h1>GAMMA TEST</h1>
            <textarea value={this.state.textAreaValue} onChange={this.changeTextArea}></textarea>
        </>
    }
}

export default function InputTestAlphaRender() {
    return <>
        <InputTestAlpha />
        <InputTestBeta />
        <InputTestGamma />
    </>;
}