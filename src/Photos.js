import React from 'react';

function groupBy (xs, key) {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
}

class Photos extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      photos: [],
      isLoaded: false,
    };
  }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=300')
      .then(res => res.json())
      .then(json => {
        this.setState({
          photos: json,
          isLoaded: true,
        });
      });
  }

  render () {
    let { isLoaded, photos } = this.state;

    let albums = groupBy(photos, 'albumId');

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {console.log(albums)}
            {photos.map(function (photo, i) {
                return (
                  <li key={photo.id}>
                    {photo.title}
                  </li>
                );
              },
            )};

          </ul>
        </div>
      );
    }
  }
}

export default Photos;
