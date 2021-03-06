import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { map, shareReplay, share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor( private http: HttpClient) { }

  loadAllCourses():Observable<Course[]>{
    return this.http.get<Course[]>("/api/courses").pipe(
      map( res => res["payload"] ),
      shareReplay()
    );
  }

  saveCourse( courseID: String, changes : Partial<Course> ):Observable<any>{
    return this.http.put(`/api/courses/${courseID}`,changes).pipe(
      shareReplay()
    );
  }
}
