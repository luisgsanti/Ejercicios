import { TestBed } from '@angular/core/testing';

import { TaskDataServiceService } from './task-data-service.service';

describe('TaskDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TaskDataServiceService = TestBed.get(TaskDataServiceService);
    expect(service).toBeTruthy();
  });
});
