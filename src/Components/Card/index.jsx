import './style.css';
import axios from '../../../backend/axiosConfig'
import { useState } from 'react'
import SearchInput from '../SearchInput';
import SendButton from '../SendButton';
import UserImage from '../userimage';
import UserInfo from '../UserInfo';
//import axios from '/services/axiosConfig';

export default function Card(){
    const [name, setName] = useState('')
    const [userData, setData] = useState('')

    const getValue = (event) =>{
        setName(event.target.value)
    }

    async function getUserData(){
        axios.get(`/${name}`)
        .then((res)=>{
            setData(res.data)
        }).catch(()=>{
            const msg = 'User not found!'
            setData({user: msg})
        });
    }

    return(
        <div className='wrapper'>
            <h1>Github search</h1>
            <SearchInput onChange={getValue}/>
            <h1>{name}</h1>
            <SendButton search={getUserData}/>
            <UserImage image={userData?.avatar_url}/>

            <p>{userData?.login}</p>
            <UserInfo
                followers={userData?.followers}
                following={userData?.following}
                repos={userData?.public_repos}
            />
            <p className='bio'>{userData?.bio}</p>
            <span className='error'>{'' || userData?.user}</span>
        </div>
    )
}