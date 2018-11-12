import {Injectable} from '@angular/core';
import {Site} from '../../places/models/site';
import {SiteService} from '../../places/services/site.service';
import {UserService} from '../../user/services/user.service';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {EventComponentType} from '../models/eventComponentType';
import {MessageService} from '../../common/services/message.service';
import {catchError} from 'rxjs/operators';

@Injectable()
export class TypeService {

  site: Site;
  private types: EventComponentType[];
  private urlType = 'types/';


  constructor(private  siteService: SiteService, private  userService: UserService, private http: HttpClient, private messageService: MessageService) {
    this.retrieveType().subscribe((types: EventComponentType[]) => {
      this.types = types;
      console.log(this.types);
    });
  }

  retrieveType(): Observable<EventComponentType[]> {
    return this.http.get<EventComponentType[]>(this.urlType).pipe(
      catchError(this.handleError<EventComponentType[]>('getHeroes', '', ))
    );
  }
  getType(): EventComponentType[] {
    return this.types;
  }
  private handleError<T> (operation = 'operation',  message: string, result?: T ) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(message);

      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
