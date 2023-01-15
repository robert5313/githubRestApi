import './style.css';

export default function SendButton(props){
    return(
        <button className='button-send' onClick={props.search}>
            Search
        </button>
    )
}