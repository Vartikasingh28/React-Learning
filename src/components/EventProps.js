export const EventProps =() => {
    const handleWelcomeUser= (user)=>{
alert(`Hey, ${user}`);
    };

     const handleHover= (user)=>{
alert(`Hey Thanks for hovering me`);
    };

    return(
        <>
            <WelcomeUser onClick={()=>handleWelcomeUser("vartika")}
                onMouseEnter={handleHover}
            />
        </>
    );
};
const WelcomeUser =(props)=>{
    const handleGreeting =() =>{
        console.log(`Hey User,Welcome`);
        props.onClick;
        
    };
    return(
        <>
            <button onclick={props.onClick}>Click</button>
                        <button onMouseEnter={props.onMouseEnter}>Hover me</button>
                        <button onClick={handleGreeting}>Greeting</button>
        </>
    )
}
