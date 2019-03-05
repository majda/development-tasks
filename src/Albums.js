import React from 'react';

class Albums extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=300')
      .then(res => res.json())
      .then(json => {
        this.setState({
          items: json,
          isLoaded: true,
        });
      });
  }

  render () {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>


          <h2>Album [albumId]</h2>
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.title}
              </li>
            ))};
          </ul>
        </div>
      );
    }
  }
}

export default Albums;
