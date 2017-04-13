import { NgModule } from '@angular/core'; //Foundation of Angular Apps
import { BrowserModule } from '@angular/platform-browser'; //The module designed for web browsers
import { HttpModule } from '@angular/http'; //This also had to be imported to vendor.ts
import { FormsModule } from '@angular/forms';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; //The server spoofer
import { AppComponent } from './app.component';
import { EntryListComponent, EntryComponent, EntryService, EntryCommentFormComponent } from './entries'; //Because index.ts is in the folder. Must be a default.
import { InMemoryEntryService } from './backend';

@NgModule({
    //imports array is ONLY for Angular Modules
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        InMemoryWebApiModule.forRoot(InMemoryEntryService)
        ],
    providers: [ EntryService ],
    declarations: [
        AppComponent,
        EntryComponent, //Always put your child components first?
        EntryListComponent,
        EntryCommentFormComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}