require('./style.css');
import {printingModule} from './DOMs';
printingModule.printProjects();
printingModule.chooseProject(document.querySelector('.project-title'));