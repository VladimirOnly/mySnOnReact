import React from 'react';
import styles from './users.module.css';
import * as axios from "axios";
import userImg from '../../data/img/userImg.png'

let Users = (props) => {

    let getUsers = () => {

        if (props.users.length === 0) {

            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                // props.setUsers(
                //     [
                //         {
                //             id: 1,
                //             photoUrl: 'https://file.liga.net/images/general/2018/10/30/20181030130246-5851.jpg?v=1540903878',
                //             followed: false,
                //             fullName: 'Dmitry',
                //             status: 'I am a boss',
                //             location: {city: 'Minks', country: 'Belarus'}
                //         },
                //         {
                //             id: 2,
                //             photoUrl: 'https://file.liga.net/images/general/2018/10/30/20181030130246-5851.jpg?v=1540903878',
                //             followed: true,
                //             fullName: 'Vladimir',
                //             status: 'I am a boss',
                //             location: {city: 'Moscow', country: 'Russia'}
                //         },
                //         {
                //             id: 3,
                //             photoUrl: 'https://file.liga.net/images/general/2018/10/30/20181030130246-5851.jpg?v=1540903878',
                //             followed: false,
                //             fullName: 'Sergey',
                //             status: 'I am a boss',
                //             location: {city: 'Kiev', country: 'Ukraine'}
                //         }
                //     ]
                // )
                props.setUsers(response.data.items);
            });
        }
    }
    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photos.small != null ? u.photos.small : userImg } className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ?
                            <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)

        }
    </div>
}

export default Users;
