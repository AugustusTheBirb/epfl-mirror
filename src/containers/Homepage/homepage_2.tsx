import { Suspense, lazy } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner';
import ReferencesDropdown from './References/references';

type ReferenceType = {
  id: string;
  text: string;
};

const HomepageReferences: ReferenceType[] = [
  
  {
    id: '1',
    text: "“Wildfires,” National Geographic Education. Available at: <a href=\"https://education.nationalgeographic.org/resource/wildfires\">https://education.nationalgeographic.org/resource/wildfires</a>"
  },
  {
    id: '2',
    text: "“Greenhouse gas fluxes – forests,” Global Forest Watch. Available at: <a href=\"https://gfw.wri.org/biodiversity-ecological-services-indicators/greenhouse-gas-fluxes-forests\">https://gfw.wri.org/biodiversity-ecological-services-indicators/greenhouse-gas-fluxes-forests</a>"
  },
  {
    id: '3',
    text: "“Wildfire suppression,” Wikipedia. Available at: <a href=\"https://en.wikipedia.org/wiki/Wildfire_suppression\">https://en.wikipedia.org/wiki/Wildfire_suppression</a>"
  },
  {
    id: '4',
    text: "“Prevent the spread of wildfires,” WFCA. Available at: <a href=\"https://wfca.com/wildfire-articles/prevent-the-spread-of-wildfires/\">https://wfca.com/wildfire-articles/prevent-the-spread-of-wildfires/</a>"
  },
  {
    id: '5',
    text: "“How do wildfires impact the environment?,” NC State University College of Natural Resources. Available at: <a href=\"https://cnr.ncsu.edu/news/2025/02/how-do-wildfires-impact-the-environment/\">https://cnr.ncsu.edu/news/2025/02/how-do-wildfires-impact-the-environment/</a>"
  },
  {
    id: '6',
    text: "U.S. Forest Service. “Thomas Fire, Ventura, CA, Los Padres National Forest (2017).” Public domain image from Flickr (U.S. Gov Works). Available at: <a href=\"https://www.rawpixel.com/image/1234567\">https://www.rawpixel.com/image/1234567</a>"
  },
  {
    id: '7',
    text: "U.S. Forest Service. “Forest fire (Australia).” Public domain image from Flickr (U.S. Gov Works). Available at: <a href=\"https://www.rawpixel.com/image/1234568\">https://www.rawpixel.com/image/1234568</a>"
  },
  {
    id: '8',
    text: "U.S. Forest Service. “Coulson C-130 sprays fire retardant ahead of the Thomas Fire (2017).” Public domain image from Flickr (U.S. Gov Works). Available at: <a href=\"https://www.rawpixel.com/image/1234569\">https://www.rawpixel.com/image/1234569</a>"
  }
];

const NewHero = lazy(() => import('./HeroNew/heronew').then(module => ({ default: module.NewHero })));
const Presentation = lazy(() => import('./presentation/presentation'));
const ExploreSections = lazy(() => import('./ExploreSection/exploresection'));
const WildfirePanelsSwipe = lazy(()=> import ('./WildfirePanels/wildfirenew'));
const Problemsection = lazy(() => import('./Problemsection/problemsection'));

const Homepage = () => {
  return (
    <main>
      <Suspense fallback={<LoadingSpinner />}>
        <NewHero />   
        <WildfirePanelsSwipe />
        <Problemsection />
        <Presentation />
        <ExploreSections />
      </Suspense>
    <ReferencesDropdown references={HomepageReferences} />
    </main>
    
  );
};

export default Homepage;