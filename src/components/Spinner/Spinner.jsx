import { RotatingLines } from 'react-loader-spinner'

export default function BasicSpinner () {
    return (<RotatingLines
        visible={true}
        height="50"
        width="50"
        strokeColor="orange"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />)
};

