import {Component} from 'react'
import Passwords from '../Passwords'

class Form extends Component {
  state = {
    passwords: [],
    mail: '',
    name: '',
    pswd: '',
    show: true,
    count: 0,
    search: '',
  }

  website = event => {
    this.setState({mail: event.target.value})
  }

  userInput = event => {
    this.setState({name: event.target.value})
  }

  passwordInput = event => {
    this.setState({pswd: event.target.value})
  }

  changeShow = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  onSearch = event => {
    this.setState({search: event.target.value})
  }

  onDelete = pass => {
    const {passwords} = this.state
    const updatedList = passwords.filter(each => each.password !== pass)
    const len = updatedList.length
    this.setState({
      passwords: updatedList,
      count: len,
    })
  }

  addDetails = event => {
    event.preventDefault()
    const {mail, name, pswd, passwords} = this.state
    const obj = {
      email: mail,
      username: name,
      password: pswd,
    }
    const updatedDetails = [...passwords, obj]
    this.setState({passwords: updatedDetails})
    const len = updatedDetails.length
    this.setState({mail: '', name: '', pswd: '', count: len})
  }

  renderPassword = () => {
    const {passwords, show, count, search} = this.state
    const searchResults = passwords.filter(each =>
      each.password.toLowerCase().includes(search.toLowerCase()),
    )

    if (count === 0 || searchResults.length === 0) {
      return (
        <>
          <img
            src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
            alt="no passwords"
          />
          <p>No Passwords</p>
        </>
      )
    }
    return (
      <ul>
        {searchResults.map(each => (
          <Passwords
            details={each}
            visible={show}
            click={this.onDelete}
            key={each.password}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {mail, name, pswd, count, search} = this.state

    return (
      <>
        <div>
          <div>
            <h1>Add New Password</h1>
            <form>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png "
                alt="website"
              />
              <input
                type="text"
                placeholder="Enter Website"
                onChange={this.website}
                value={mail}
              />
              <br />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
              />
              <input
                type="text"
                placeholder="Enter Username"
                onChange={this.userInput}
                value={name}
              />
              <br />
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
              />
              <input
                type="password"
                placeholder="Enter Password"
                onChange={this.passwordInput}
                value={pswd}
              />
              <br />
              <button type="submit" onClick={this.addDetails}>
                ADD
              </button>
            </form>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
            />
          </div>
        </div>

        <div>
          <div>
            <h1>Your Passwords </h1>
            <p>{count}</p>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
            />
            <input
              type="search"
              placeholder="search"
              onChange={this.onSearch}
              value={search}
            />
          </div>
          <hr />
        </div>
        <input type="checkBox" id="check" onClick={this.changeShow} />
        <label htmlFor="check">Show Passwords</label>
        <div>{this.renderPassword()}</div>
      </>
    )
  }
}

export default Form
