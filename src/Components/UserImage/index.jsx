import './style.css';

export default function UserImage(props){
    return(
        <img
            className='user-image'
            src={props.image || "https://avatars.githubusercontent.com/u/583231?v=4"}
            alt="Searched user image"
        />
    )
}