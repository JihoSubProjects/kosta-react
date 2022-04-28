import React from 'react';
import axios from 'axios';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface ChartData {
    id: number;
    first_name: string;
    last_name: string;
    english: number;
    math: number;
    history: number;
}

interface State {
    loading: boolean;
    chartData: any;
}

export default class Chart extends React.Component<{}, State> {
    constructor(props: {}, public options: ChartOptions<'bar'>) {
        super(props);
        this.state = {
            loading: true,
            chartData: [],
        };
        this.options = {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                title: {
                    display: true,
                    text: 'English Chart'
                }
            },
        };
    }

    fetchData = async () => {
        const { data } = await axios.get('chartData.json');
        const labels: Array<string> = [];
        const english: Array<number> = [];
        const math: Array<number> = [];
        const history: Array<number> = [];

        (data as ChartData[]).forEach(d => {
            labels.push(d.first_name);
            english.push(d.english);
            math.push(d.english);
            history.push(d.history);
        })

        const chartData = {
            labels,
            datasets: [
                {
                    label: 'English',
                    backgroundColor: 'rgba(255, 127, 127,.5)',
                    borderColor: 'rgb(0,0,0)',
                    borderWidth: 1,
                    data: english,
                },
                {
                    label: 'Math',
                    backgroundColor: 'rgba(127, 255, 127,.5)',
                    borderColor: 'rgb(0,0,0)',
                    borderWidth: 1,
                    data: math,
                },
                {
                    label: 'History',
                    backgroundColor: 'rgba(127, 127, 255,.5)',
                    borderColor: 'rgb(0,0,0)',
                    borderWidth: 1,
                    data: history,
                },
            ],
        }

        this.setState(c => ({
            ...c,
            loading: false,
            chartData
        }))

    }

    componentDidMount(): void {
        this.fetchData();
    }

    render(): React.ReactNode {
        return <>
            <div style={{padding: '50px', width: '800px', margin: '0 auto'}}>
                {
                    this.state.loading
                    ? <h2>Now loadding...</h2>
                    : <Bar data={this.state.chartData} options={this.options} />
                }
            </div>
        </>;
    }

}