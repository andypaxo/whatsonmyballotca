class WhatsOnMyBallotApp extends React.Component {
  constructor() {
    super();
    this.state = { tab: 'whereAmI' };
    window.setCity = info => this.setCity(info);
  }

  componentDidMount() {
    const place = document.location.hash?.replace('#', '');
    if (place && place.indexOf('/')) {
      const [city, province] = place.split('/');
      this.setCityInfo({city, province});
    } else if (place === 'NotFound') {
      this.setState({tab: 'notFound'});
    }
  }

  render() {
    return <React.Fragment>
       {this[this.state.tab]()}
    </React.Fragment>;
  }

  whereAmI() {
    return <div>
      <div className='introduction' dangerouslySetInnerHTML={{__html: ballotData.introduction}} />
      <form className='postcode-form' onSubmit={evt => this.findByPostcode(evt)}>
          <label className='label mr-2'>My postal code is</label>
          <p className='control is-expanded mr-2'>
            <input
              className='input' type='text' name='my postcode' required
              onChange={evt => this.setState({postcode: evt.currentTarget.value})}
            />
          </p>
          <p className='control is-expanded'>
            <button className={`button is-success ${this.state.isLoading ? 'is-loading' : ''}`} type='submit'>Go</button>
          </p>
      </form>
    </div>;
  }

  onMyBallot() {
    return <div className='page section' >
      <h1 className='title'>Here's what will be on your ballot in <span>{this.state.city}</span></h1>
      <div>
        <h2 className='subtitle'>Provincial questions:</h2>
        { this.state.provincial.map((item, idx) => 
          <div key={idx}>
            <p>{item.text}</p>
            <p className='description' dangerouslySetInnerHTML={{__html: item.description}} />
            <hr/>
          </div>
        )}
      </div>
      <div>
        <h2 className='subtitle'>Municipal questions:</h2>
        {
        this.state.municipal ?
        (
          this.state.municipal.length
          ?  this.state.municipal.map((item, idx) =>
            <div key={idx}>
              <p>{item.text}</p>
              <p className='description' dangerouslySetInnerHTML={{__html: item.description}} />
              <hr/>
            </div>)
          : <p>There's nothing on the ballot specific to {this.state.city}</p>
        )
        : <p>We don't have information about specific ballot items for {this.state.city}</p>
        }
      </div>
      {this.feedbackLink()}
    </div>;
  }

  notFound() {
    return <div>
      <article className='message is-danger mt-4'><div className='message-body'>Sorry, we couldn't find your postal code, or you're outside Alberta</div></article>
      {this.feedbackLink()}
    </div>
  }

  feedbackLink() {
    return <p className="feedback">Is there incomplete or incorrect information here? <a className='button' href='https://forms.gle/kJUgmnDeytbsVao89' target='_blank'>Let us know</a></p>
  }

  findByPostcode(evt) {
    evt.preventDefault();
    const postcode = this.state.postcode.toUpperCase().replace(/[^0-9A-Z]/g, '');
    const scriptElem = document.createElement('script');
    scriptElem.setAttribute('src', `https://represent.opennorth.ca/postcodes/${postcode}?callback=setCity`);
    document.getElementById('jsonp-container').appendChild(scriptElem);

    setTimeout(() => {
      if (!this.locationLoaded) {
        this.displayNotFound();
      }
    }, 5000);

    this.setState({isLoading: true});
  }

  setCity(info) {
    window.history.pushState(null, null, `./#${info.city}/${info.province}`);
    this.setCityInfo(info);
  }

  setCityInfo(info) {
    this.locationLoaded = true;

    if (!info || info.province !== 'AB') {
      return this.displayNotFound();
    }

    const cityInfo = ballotData.municipalities[info.city];

    this.setState({
      tab: 'onMyBallot',
      city: info.city,
      provincial: ballotData.provincial,
      municipal: cityInfo
    });
  }

  displayNotFound() {
    if (location.hash !== '#NotFound') {
      window.history.pushState(null, null, `./#NotFound`);
    }
    return this.setState({tab: 'notFound'});
  }
}

window.addEventListener('hashchange', () => { console.log('New page at ' + new Date); location.reload() });

ReactDOM.render(<WhatsOnMyBallotApp />, document.getElementsByClassName('container')[0]);
