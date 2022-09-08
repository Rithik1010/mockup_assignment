function Congratulation(props) {
  return (
    <div>
        <h1>Congratulations, {props.user.display_name}</h1>
        <p>You have completed onboarding, you can start using the Eden!</p>
        <input type="submit" value="Launch Eden" />
    </div>
  )
}

export default Congratulation