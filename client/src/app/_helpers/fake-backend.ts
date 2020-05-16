import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Material, Cable, Project } from '../_models';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // array in local storage for registered users
        let users: any[] = JSON.parse(localStorage.getItem('users')) || [];

        // array in local storage for created projects
        let projects: any[] = JSON.parse(localStorage.getItem('projects')) || [];

        // array in local storage for created materials
        let materials: any[] = JSON.parse(localStorage.getItem('materials')) || [];

        // array in local storage for created cables
        let cables: any[] = JSON.parse(localStorage.getItem('cables')) || [];

        // wrap in delayed observable to simulate server api call

        return of(null).pipe(mergeMap(() => {

            // authenticate
            if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === request.body.username && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    let user = filteredUsers[0];
                    let body = {
                        id: user.id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    let matchedUsers = users.filter(user => { return user.id === id; });
                    let user = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/users/register') && request.method === 'POST') {
                // get new user object from post body
                let newUser = request.body;

                // validation
                let duplicateUser = users.filter(user => { return user.username === newUser.username; }).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'Username "' + newUser.username + '" is already taken' } });
                }

                // save new user
                newUser.id = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // Verify Auth Code
            if (request.url.endsWith('/users/verifyAuthCode') && request.method === 'POST') {
                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid, this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    let urlParts = request.url.split('/');
                    let id = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        let user = users[i];
                        if (user.id === id) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // create project
            if (request.url.endsWith('/project') && request.method === 'POST') {
                // get new project object from post body
                let newProject = request.body;

                // validation
                let duplicateProject = projects.filter(project => { return project.projectTitle === newProject.projectTitle; }).length;
                if (duplicateProject) {
                    return throwError({ error: { message: 'Project "' + newProject.Project_Title + '" already exists' } });
                }

                newProject.id = projects.length + 1;
                projects.push(newProject);
                localStorage.setItem('projects', JSON.stringify(projects));

                return of(new HttpResponse({ status: 200 }));
            }

            // get project for user
            if (request.url.match(/\/project\/user\/\w+$/) && request.method === 'GET') {

                let userId = request.url.split("/user/")[1];


                let userProjects: any[] = [];
                projects.forEach(element => {
                    if (element.userId == userId) {
                        userProjects.push(element);
                    }
                });
                return of(new HttpResponse({ status: 200, body: userProjects }));

            }

            //receive material
            if (request.url.endsWith('/material') && request.method === 'POST') {

                // get new project object from post body
                let newMaterial = request.body;

                // save new user
                newMaterial.id = materials.length + 1;

                materials.push(newMaterial);
                localStorage.setItem('materials', JSON.stringify(materials));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }


            //get All material for project
            if (request.url.match(/\/material\/\d+$/) && request.method === 'GET') {


                let projectId = request.url.split("/material/")[1];
                let userMaterials: Material[] = [];
                materials.forEach(element => {

                    if (element.projectId == projectId) {
                        userMaterials.push(element);
                    }
                });

                return of(new HttpResponse({ status: 200, body: userMaterials }));

            }

            //get All cable for project
            if (request.url.match(/\/cable\/\d+$/) && request.method === 'GET') {

                let projectId = request.url.split("/cable/")[1];
                let usercables: Cable[] = [];

                let storedCable = localStorage.getItem('selectedCable');
                if(storedCable && storedCable.length > 1) {

                    let storedCableJson = <Cable>JSON.parse(storedCable);
                    if(projectId === storedCableJson.projectId) {

                        usercables.push(storedCableJson);
                        return of(new HttpResponse({ status: 200, body: usercables }));
                    }
                }

                let cable = new Cable();
                cable.area = '123';
                cable.disciplineCode = 'C';
                cable.id = '1';
                cable.length = '9999';
                cable.locationFrom = '123 N';
                cable.locationTo = '75 S';
                cable.projectId = projectId;
                cable.size = '500 mm';
                cable.tagFrom = '12312314';
                cable.tagTo = '613462345';
                cable.type = 'Test';
                cable.isPulled = false;
                cable.isGlanded = false;
                cable.isTerminated = false;

                usercables.push(cable);

                localStorage.setItem('selectedCable', JSON.stringify(cable));


                return of(new HttpResponse({ status: 200, body: usercables }));

            }

            //get All cable for project
            if (request.url.match(/\/cable\/pull/) && request.method === 'POST') {

                // get new project object from post body
                let data = request.body;

                var cable = <Cable>JSON.parse(localStorage.getItem('selectedCable'));

                if (cable.id === data.cableId) {
                    localStorage.setItem('selectedCablePull', JSON.stringify(data));
                    cable.isPulled = true;
                    localStorage.setItem('selectedCable', JSON.stringify(cable));
                    return of(new HttpResponse({ status: 200 }));
                }
                return of(new HttpResponse({ status: 400 }));
            }

            //get All cable for project
            if (request.url.match(/\/cable\/gland/) && request.method === 'POST') {

                // get new project object from post body
                let data = request.body;

                var cable = <Cable>JSON.parse(localStorage.getItem('selectedCable'));

                if (cable.id = data.cableId) {
                    localStorage.setItem('selectedCableGland', JSON.stringify(data));
                    cable.isGlanded = true;
                    localStorage.setItem('selectedCable', JSON.stringify(cable));
                    return of(new HttpResponse({ status: 200 }));
                }
                return of(new HttpResponse({ status: 400 }));
            }

            //get All cable for project
            if (request.url.match(/\/cable\/terminate/) && request.method === 'POST') {

                // get new project object from post body
                let data = request.body;

                var cable = <Cable>JSON.parse(localStorage.getItem('selectedCable'));

                if (cable.id = data.cableId) {
                    localStorage.setItem('selectedCableTerminate', JSON.stringify(data));
                    cable.isTerminated = true;
                    localStorage.setItem('selectedCable', JSON.stringify(cable));
                    return of(new HttpResponse({ status: 200 }));
                }
                return of(new HttpResponse({ status: 400 }));
            }



            // create or update Stake Holder
            if (request.url.endsWith('/stakeholder') && request.method === 'POST') {
                return of(new HttpResponse({ status: 200 }));
            }

            // create or update Stake Holder
            if (request.url.endsWith('/stakeholder') && request.method === 'POST') {
                return of(new HttpResponse({ status: 200 }));
            }

            // create or update Stake Holder
            if (request.url.endsWith('/scopedocument') && request.method === 'POST') {
                return of(new HttpResponse({ status: 200 }));
            }

            // pass through any requests not handled above
            return next.handle(request);

        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
