import './App.css';
import ContentComponent from './components/ContentComponent'
import GA4React from 'ga-4-react';
import ReactGA from 'react-ga';

ReactGA.initialize('UA-147968276-2');
ReactGA.pageview(window.location.pathname + window.location.search);

const ga4react = new GA4React({
  gaCode: '263533308',
});
ga4react.initialize().then((ga4) => {
  console.log('initialize')
  ga4.pageview('path')
  ga4.gtag('event', 'pageview', 'path') // or your custom gtag event
}, (err) => {
  console.error(err)
})

function App() {
  return (
    <div className="App">
      <ContentComponent></ContentComponent>
    </div>
  );
}

export default App;
