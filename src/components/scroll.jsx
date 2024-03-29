import React from 'react';
// import '../assets/less/custom.less';

class ScrollButton extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0
    };
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  scrollToTop() {
    let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  }
  render() {
    return <button title='Back to top' className='scroll'
      onClick={() => { this.scrollToTop(); }}>
      <i className='fa fa-angle-up'/>
      <span className='text-uppercase'>top</span>
    </button>;
  }
}


class ScrollApp extends React.Component {

  // eslint-disable-next-line class-methods-use-this
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const element = document.getElementById('BottomTopScroll');
      const h = window.innerHeight;
      if (h > 5) {
        if (window.scrollY > 6) {
          element.classList.add('scroll');

        } else {
          element.classList && element.classList.remove('scroll');
        }
      }
    });
  }
  render() {
    return <div id="BottomTopScroll" className="long">
      <ScrollButton scrollStepInPx="50" delayInMs="25.66" />
    </div>
  }
}
export default ScrollApp;
