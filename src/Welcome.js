function Welcome(props) {
  //const {isLoggedin}=props;
  return (
    <div>
      {/* //{props.isLoggedin ? <h1>Welcome Admin</h1>: <h1>Please Login..</h1>} */}
 {props.role==="user"?(<h1>Admin dashboard</h1>):(<h1>User dashboard</h1>)}

    </div>
  );
}
// export default Welcome;

export default function App() {
  return <Welcome role="admin"/>;

}