import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

// Replace your code here
const SearchList = props => {
  const {searchDetails, onDeleteList} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchDetails

  const onClickDelete = () => {
    onDeleteList(id)
  }

  const searchDetailsLength = searchDetails.length === 0

  return (
    <li className="list">
      {searchDetailsLength ? (
        <h1 className="no-items">There is no History to show</h1>
      ) : (
        <div className="display-list">
          <div className="history-time-text">
            <p className="time">{timeAccessed}</p>
            <img src={logoUrl} alt="domain logo" className="app-logo" />
            <p className="app-name">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
          <button className="button" type="button" onClick={onClickDelete}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
              className="delete-icon"
              testid="delete"
            />
          </button>
        </div>
      )}
    </li>
  )
}

class Search extends Component {
  state = {searchInput: '', initialHistoryLists: initialHistoryList}

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onDeleteList = id => {
    const {initialHistoryLists} = this.state
    const deleteList = initialHistoryLists.filter(
      eachList => eachList.id !== id,
    )
    this.setState({initialHistoryLists: deleteList})
  }

  render() {
    const {searchInput, initialHistoryLists} = this.state
    const lengthOfDeleteList =
      initialHistoryLists.length === initialHistoryList.length
    const searchResults = initialHistoryList.filter(eachSuggestion =>
      eachSuggestion.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    const noHistory = searchResults.length === 0
    const deleteList = initialHistoryLists.length === 0
    const emptyList = noHistory === deleteList

    return (
      <div className="browser-container">
        <navBar className="nav-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="logo"
            alt="app logo"
          />
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              className="search-icon"
              alt="search"
            />
            <input
              className="input"
              type="search"
              placeholder="search history"
              value={searchInput}
              onChange={this.onChangeSearch}
            />
          </div>
        </navBar>
        <ul className="history-container">
          {lengthOfDeleteList
            ? searchResults.map(eachItem => (
                <SearchList
                  key={eachItem.id}
                  searchDetails={eachItem}
                  onDeleteList={this.onDeleteList}
                />
              ))
            : initialHistoryLists.map(eachItem => (
                <SearchList
                  key={eachItem.id}
                  searchDetails={eachItem}
                  onDeleteList={this.onDeleteList}
                />
              ))}
        </ul>
      </div>
    )
  }
}
const App = () => <Search />

export default App
