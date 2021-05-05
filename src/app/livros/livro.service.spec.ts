/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LivroService } from './livro.service';

describe('Service: Livro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LivroService]
    });
  });

  it('should ...', inject([LivroService], (service: LivroService) => {
    expect(service).toBeTruthy();
  }));
});
