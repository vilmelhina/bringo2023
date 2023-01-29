function LoginPageView(props){
    return (
        <div>
            <h1>Welcome to My Awesome App</h1>
            {props.children}
            <div id="loader">Loading...</div>
        </div>
    );
}
export default LoginPageView;