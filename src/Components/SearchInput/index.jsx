import './style.css';

export default function SearchInput(props){
    return(
        <input
        type="text"
        className='input-search'
        placeholder='Search your github profile'
        onChange={props.onChange}
        />
    )
}