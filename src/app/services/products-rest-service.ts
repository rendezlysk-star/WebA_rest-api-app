import { Injectable, computed } from '@angular/core';
import { httpResource, HttpErrorResponse } from '@angular/common/http';
import { ProductApiResponse } from '../interfaces/product-model';

@Injectable({
  providedIn: 'root',
})
export class ProductsRestService {
  private username = 'estudiante';
  private password = 'cambiar-esta-clave';
  private credentials = btoa(`${this.username}:${this.password}`);

  productsResource = httpResource<ProductApiResponse>(() => ({
    url: `http://172.17.207.216:3000/api/v1/products`,
    method: 'GET',
    headers: {
      Authorization: `Basic ${this.credentials}`,
    },
  }));

  errorMesage = computed(() => {
    const data = this.productsResource.error();

    if (data instanceof HttpErrorResponse) {
      switch (data.status) {
        case 401:
          return 'Verifica las credenciales de autenticación.';
        case 404:
          return 'El recurso no existe.';
        default:
          return `Ocurrió un error en la petición.`;
      }
    }

    return 'Ocurrió un error inesperado.';
  });
}
