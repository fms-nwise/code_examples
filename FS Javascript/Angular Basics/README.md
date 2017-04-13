
# Photo Blog

1. Clone the repository
2. Run `npm install`
3. Start the server `npm run serve`
4. localhost:8080



WebPack is a task runner type thing, like Grunt and Gulp. It is opinionated to industry standards.

Component = Template + Class + Decorator (decorators wire the class to the template)

Data-binding = establishes connection between application UI and code (component class and the template)

Types of Data Binding:

One-Way - Class to Template
One-Way - Template to Class
Two-Way - Between Class and Template

Binds in view:

One way: Class to Template...
<h1>{{stuff}}</h1>

<input [target]="stuff" />

One way: Template to Class...(uses events to send back to class)
<button (event)="stuff"></button>

Two way: Between Class and Template...
<input [(target)]="stuff" />


Component parts:
.ts
.html
.css

:host psuedo selector for CSS3 = https://www.w3.org/TR/css-scoping-1/#host-selector 


There are three main types of "Directives":
Component
Structural
Attribute

_____________________

Angular Resources: https://angular.io/resources
Angular Modules: https://angular.io/docs/ts/latest/api/#!?query=module 

HTTP Module Installation
This course depends on a module that intercepts request to the HTTP service. If you install a different version you may experience compatibility issues. We strongly recommended that you install only the versions referenced in the course.


npm --save-dev flag makes the package load for the development environment only

Angular Lifecycle Hooks: https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html 

TS Generics: https://www.typescriptlang.org/docs/handbook/generics.html 

.dirty = a field has been changed

.touched = a user focused it