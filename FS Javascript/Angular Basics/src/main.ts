// Import global stylesheet
import './styles/main.css';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; //change to just platform-browser for production.
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);