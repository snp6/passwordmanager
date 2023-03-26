import './index.css'

const Passwords = props => {
  const {details, visible, click} = props

  const {email, username, password} = details

  const showPassword = visible ? (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    </>
  ) : (
    <p>{password}</p>
  )

  const del = () => click(password)

  return (
    <li key={password}>
      <p>{email}</p>
      <p>{username}</p>
      <p>{showPassword}</p>
      <button type="button" onClick={del} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default Passwords
