import { Component } from '@angular/core';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.scss'],
  entryComponents: [FilterPipe]
})

export class TransactionHistoryComponent {

  data = [
    { TransactionID: 'T1', Source: 'Online', CustomerName: 'John Smith', CustomerEmail: 'john.smith@email.com', Amount: 100, RequestDate: '2022-01-01', Status: 'Approved' },
    { TransactionID: 'T2', Source: 'In-store', CustomerName: 'Jane Doe', CustomerEmail: 'jane.doe@email.com', Amount: 200, RequestDate: '2022-01-02', Status: 'Approved' },
    { TransactionID: 'T3', Source: 'Online', CustomerName: 'Bob Johnson', CustomerEmail: 'bob.johnson@email.com', Amount: 150, RequestDate: '2022-01-03', Status: 'Pending' },
    { TransactionID: 'T4', Source: 'In-store', CustomerName: 'Samantha Brown', CustomerEmail: 'samantha.brown@email.com', Amount: 75, RequestDate: '2022-01-04', Status: 'Declined' },
    { TransactionID: 'T5', Source: 'Online', CustomerName: 'Mike Davis', CustomerEmail: 'mike.davis@email.com', Amount: 250, RequestDate: '2022-01-05', Status: 'Approved' },
    { TransactionID: 'T6', Source: 'In-store', CustomerName: 'Jennifer Garcia', CustomerEmail: 'jennifer.garcia@email.com', Amount: 300, RequestDate: '2022-01-06', Status: 'Pending' },
    { TransactionID: 'T7', Source: 'Online', CustomerName: 'John Rodriguez', CustomerEmail: 'john.rodriguez@email.com', Amount: 200, RequestDate: '2022-01-07', Status: 'Declined' },
    { TransactionID: 'T8', Source: 'In-store', CustomerName: 'Maria Martinez', CustomerEmail: 'maria.martinez@email.com', Amount: 100, RequestDate: '2022-01-08', Status: 'Approved' },
    { TransactionID: 'T9', Source: 'Online', CustomerName: 'James Anderson', CustomerEmail: 'james.anderson@email.com', Amount: 150, RequestDate: '2022-01-09', Status: 'Pending' },
    { TransactionID: 'T10', Source: 'In-store', CustomerName: 'Emily Taylor', CustomerEmail: 'emily.taylor@email.com', Amount: 75, RequestDate: '2022-01-10', Status: 'Declined' },
    { TransactionID: 'T11', Source: 'Online', CustomerName: 'Daniel Thomas', CustomerEmail: 'daniel.thomas@email.com', Amount: 250, RequestDate: '2022-01-11', Status: 'Approved' },
    { TransactionID: 'T12', Source: 'In-store', CustomerName: 'Sara Hernandez', CustomerEmail: 'sara.hernandez@email.com', Amount: 300, RequestDate: '2022-01-12', Status: 'Pending' },
    { TransactionID: 'T13', Source: 'Online', CustomerName: 'William Moore', CustomerEmail: 'william.moore@email.com', Amount: 200, RequestDate: '2022-01-13', Status: 'Declined' },
    { TransactionID: 'T14', Source: 'In-store', CustomerName: 'Ashley Martin', CustomerEmail: 'ashley.martin@email.com', Amount: 100, RequestDate: '2022-01-14', Status: 'Approved' },
    { TransactionID: 'T15', Source: 'Online', CustomerName: 'Joshua Thompson', CustomerEmail: 'joshua.thompson@email.com', Amount: 150, RequestDate: '2022-01-15', Status: 'Pending' },
    { TransactionID: 'T16', Source: 'In-store', CustomerName: 'Amanda Torres', CustomerEmail: 'amanda.torres@email.com', Amount: 75, RequestDate: '2022-01-16', Status: 'Declined' }
];

  paginationConfig = {
    itemsPerPage: 4,
    currentPage: 1
  };
  
  searchTerm: string = '';

}

