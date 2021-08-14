class WhatsOnMyBallotApp extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: 'whereAmI'
    };
    window.setCityInfo = info => this.setCityInfo(info);
  }

  render() {
    return <React.Fragment>
       {this[this.state.tab]()}
    </React.Fragment>;
  }

  whereAmI() {
    return <form className='postcode-form' onSubmit={evt => this.findByPostcode(evt)}>
        <label className='label mr-2'>My postcode is</label>
        <p className='control is-expanded mr-2'>
          <input
            className='input' type='text' name='my postcode' required
            onChange={evt => this.setState({postcode: evt.currentTarget.value})}
          />
        </p>
        <p className='control is-expanded'>
          <button className='button is-success' type='submit'>Go</button>
        </p>
    </form>;
  }

  onMyBallot() {
    return <div className='page section' >
      <h1 className='title'>Here's what's on your ballot in <span>{this.state.city}</span></h1>
      <div>
        { this.state.provincial.map((item, idx) => <div key={idx}>
          <p>{item.text}</p>
          <p><em>{item.description}</em></p>
          <hr/>
        </div>) }
      </div>
      <div>
        {
        this.state.municipal ?
        (
          this.state.municipal.length
          ?  this.state.municipal.map((item, idx) =>
            <div key={idx}>
              <p>{item.text}</p>
              <p><em>{item.description}</em></p>
              <hr/>
            </div>)
          : <p>There's nothing on the ballot specific to {this.state.city}</p>
        )
        : <p>We don't have information about specific ballot items for {this.state.city}</p>
        }
      </div>
    </div>;
  }

  notFound() {
    return <article className='message is-danger mt-4'><div className='message-body'>Sorry, couldn't find your postcode, or you're outside Alberta</div></article>
  }

  findByPostcode(evt) {
    evt.preventDefault();
    const postcode = this.state.postcode.toUpperCase().replace(/[^0-9A-Z]/g, '');
    const scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', `https://represent.opennorth.ca/postcodes/${postcode}?callback=setCityInfo`);
    document.getElementById('jsonp-container').appendChild(scriptElem);
  }
  
  setCityInfo(info) {
    console.log('Setting city to ' + info.city);
    if (!info || info.province !== 'AB') {
      return this.setState({tab: 'notFound'})
    }

    const cityInfo = ballotData.municipalities[info.city];

    this.setState({
      tab: 'onMyBallot',
      city: info.city,
      provincial: ballotData.provincial,
      municipal: cityInfo
    });
  }
}

ReactDOM.render(<WhatsOnMyBallotApp />, document.getElementsByClassName('container')[0]);
