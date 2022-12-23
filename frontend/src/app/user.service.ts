import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'http://localhost:3001/users';

  constructor(private httpclient: HttpClient) {}
  getStudentList(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}?role=STUDENT`);
  }

  getStudentListFiltered(fltr=''): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}?${fltr}`);
  }

  getApprovedUsers(currentUserId: number): Observable<User[]> {
    return this.httpclient.get<User[]>(
      `${this.baseURL}/getApprovedUsers/${currentUserId}`
    );
  }
  createUser(user: User): Observable<object> {
    return this.httpclient.post(`${this.baseURL}`, user);
  }
  getUserById(id: number): Observable<User> {
    return this.httpclient.get<User>(`${this.baseURL}/${id}`);
  }

  getUserFltr(fltr: string): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}?${fltr}`);
  }
  

  updateUser(id: number, user: User): Observable<Object> {
    return this.httpclient.put(`${this.baseURL}/${id}`, user);
  }

  deleteUser(id: number): Observable<Object> {
    return this.httpclient.delete(`${this.baseURL}/${id}`);
  }
  loginUser(emailid: string, password: string): Observable<any> {
    return this.httpclient.get(
      `${this.baseURL}?email=${emailid}&password=${password}`
    );
  }

  getLoggedInUser() {
    const userData = localStorage.getItem('userData');
    if (!userData) return null;

    return JSON.parse(userData);
  }

  getAdminList(): Observable<User[]> {
    return this.httpclient.get<User[]>(`${this.baseURL}/getAdmins`);
  }

  approveAdmin(id: number): Observable<object> {
    return this.httpclient.post(`${this.baseURL}/${id}/approve`, {});
  }
  denyAdmin(id: number): Observable<object> {
    return this.httpclient.post(`${this.baseURL}/${id}/deny`, {});
  }

}
