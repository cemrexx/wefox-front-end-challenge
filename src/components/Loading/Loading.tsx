import React , {FunctionComponent} from 'react';
import './styles.css';

interface ILoadingProps {
    loading : boolean
    children : React.ReactNode

}

const Loading: FunctionComponent<ILoadingProps>=(props) =>{
    const {loading} = props;
    if (loading) {
        return (
            <div className="spinner-container">
                <div className="loading-spinner">
                </div>
            </div>
        )
    }
    return <> {props.children}</>
}

export default Loading;