import React from 'react';
import './scss/Container.scss';

interface ContainerTable {
    children: React.ReactNode;
}

export default class Container extends React.Component<ContainerTable, {loading:boolean}> {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }

    pm3000 = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(console.log('통신 완료'))
            }, 3000)
        })
    }

    setStateFn = async () => {
        await this.pm3000();
        this.setState(current => ({
            ...current,
            loading: false
        }))
    }

    componentDidMount() {
        this.setStateFn();
    }

    render() {
        return (
            <>
                <div className="appBody">
                    <div className="filter">
                        <div className={"loading " + (this.state.loading ? "on" : "")}>
                            <h2>
                                <i style={{marginRight: '30px'}} className="xi-spinner-5 xi-spin"></i>
                                Now Loading
                            </h2>
                        </div>
                        {this.props.children}
                    </div>
                </div>
            </>
        )
    }
}