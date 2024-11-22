import { ApiService } from '../../../core/services/api.service';
import { Observable } from 'rxjs';
import { Injectable, } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  constructor(private apiService: ApiService) { }

  getProducts(): Observable<any> {
    return this.apiService.get(environment.server_url+"/product_list");
  }

}
