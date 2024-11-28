import Modal from './components/Modal';
import IdeaForm from './components/IdeaForm';
import IdeaList from './components/IdeaList';
import(/* webpackPreload: true */ './css/style.css');
// import('@fortawesome/fontawesome-free/css/all.css');

new Modal();
const ideaform = new IdeaForm();
ideaform.render();
new IdeaList();
