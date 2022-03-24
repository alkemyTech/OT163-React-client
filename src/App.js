import React, { Suspense } from 'react';

// COMENTADO POR RECOMENDACION DEL ESLINTER
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';

import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/Nosotros';
import Spinner from './Components/Spinner/Spinner';

import Layout from './Routes/Layouts/Public';

// IMPORTAR NUEVOS COMPONENTES DE WEB PUBLICA CON ESTE FORMATO:
const ActivitiesList = React.lazy(() =>
  import('./Components/Activities/ActivitiesList')
);

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Switch>
            {/* Rutas para web pública */}
            <Suspense fallback={<Spinner />}>
              <Route path="/" exact component={() => <div>Index</div>} />
              <Route path="/actividades" children={<ActivitiesList />} />
            </Suspense>

            {/* Rutas para el backoffice */}
            <Route
              path="/backoffice"
              exact
              component={() => <div>Backoffice</div>}
            />
            <Route
              path="/backoffice/create-activity"
              component={ActivitiesForm}
            />
            <Route
              path="/backoffice/create-category"
              component={CategoriesForm}
            />
            <Route path="/backoffice/create-news" component={NewsForm} />
            <Route path="/backoffice/create-slide" component={SlidesForm} />
            <Route
              path="/backoffice/create-testimonials"
              component={TestimonialForm}
            />
            <Route path="/backoffice/create-user" component={UserForm} />
            <Route path="/backoffice/create-member" component={MembersForm} />
            <Route path="/backoffice/create-project" component={ProjectsForm} />
            <Route
              path="/backoffice/school-campaign"
              component={SchoolCampaign}
            />
            <Route path="/backoffice/toys-campaign" component={ToysCampaign} />
            <Route path="/backoffice/Nosotros" component={About} />
          </Switch>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
