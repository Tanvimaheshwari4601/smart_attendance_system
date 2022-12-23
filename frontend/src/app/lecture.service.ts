import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lecture, User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LectureService {
  private baseURL = 'http://localhost:3001/lectures';

  constructor(private httpclient: HttpClient) { }

  getStudentList(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}?role=STUDENT`);
  }

  markAtt(lec: Lecture): Observable<object> {
    return this.httpclient.post(`${this.baseURL}`, lec);
  }

  updateAtt(lec: Lecture): Observable<object> {
    return this.httpclient.put(`${this.baseURL}/${lec.id}`, lec);
  }
  getLec(fltr : string) : Observable<Lecture[]> { 
    return this.httpclient.get<Lecture[]>(`${this.baseURL}?${fltr}`);

  }

}
