function Profile(){
    return(
        <div>
            <h1>profile Card Challenge</h1>
            <ProfileCard
            name ="Alice"
            age={30}
            greetings={
                <div>
                    <strong>Hi Alice,have a wonderful day!</strong>
                </div>
            }
>
<p>Hobbies:Reading, Hiking</p>
<button>Contact</button>
</ProfileCard>

<ProfileCard
 name ="Bob"
            age={25}
            greetings={
                <div>
                    <strong>Hi Bob,have a wonderful day!</strong>
                </div>
            }
            >
                <p>Hobbies:Gaming, Hiking</p>
<button>Contact</button>
            </ProfileCard>
        </div>
    );
}
export default Profile;

function ProfileCard({name,age,greetings,children}){
    // const {name,age,greetings,children} =props;
    return(
<>
    <h2>Name:{name}</h2>
    <p>Age:{age}</p>
       <p>{greetings}</p>
       <div>{children}</div>
 
</>
    );
}