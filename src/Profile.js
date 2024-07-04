import React from 'react'

export default function Profile(props) {
    return (
        <div className='profile1'>
            <div class="icon">
                <img src="person.png" alt="" width={150}/>
            </div>

            <div class="bio">
                <div class="fullname">
                    <p>{props.name}</p>
                </div>
                <div class="description">
                    <p>{props.profession}</p>
                </div>
            </div>
        </div>
    )
}
