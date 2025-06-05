import { Component } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry, ColDef } from "ag-grid-community";
import { IRow } from '../../interfaces/irow';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [AgGridAngular, AgGridModule],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent {
  columnDefs: ColDef<IRow>[] = [
    { field: 'name', headerName: 'שם' },
    { field: 'family', headerName: 'משפחה' },
    { field: 'phone', headerName: 'טלפון' },
    { field: 'idNumber', headerName: 'מס זהות' },
    { field: 'lesson', headerName: 'שיעור' },
    {
      field: 'price',
      headerName: 'מחיר',
      valueFormatter: (params: { value: number }) => `${params.value} ש"ח`
    },
    {
      field: 'isPayed',
      headerName: 'שולם',
      cellRenderer: (params: { value: boolean }) => params.value ? 'כן' : 'לא'
    }
  ];

  getRowClass(params: any) {
    return params.data.isPayed === false ? 'unpaid-row' : '';
  }

  defaultColDef: ColDef = { sortable: true, filter: true };

  rowData: Array<IRow> = [
    { name: 'נועה', family: 'לוי', phone: '052-3456789', idNumber: '312456789', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דוד', family: 'כהן', phone: '054-9876543', idNumber: '204567891', lesson: 'אנגלית', price: 110, isPayed: false },
    { name: 'רוני', family: 'מזרחי', phone: '050-1122334', idNumber: '315987246', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'שירה', family: 'פרץ', phone: '053-5566778', idNumber: '298765432', lesson: 'כימיה', price: 125, isPayed: true },
    { name: 'אורי', family: 'בן דוד', phone: '052-9988776', idNumber: '301245678', lesson: 'היסטוריה', price: 100, isPayed: false },
    { name: 'מאיה', family: 'אלון', phone: '055-6677889', idNumber: '312409876', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'יוסי', family: 'ביטון', phone: '050-2233445', idNumber: '209876543', lesson: 'ספרות', price: 115, isPayed: false },
    { name: 'טל', family: 'ברק', phone: '054-3344556', idNumber: '311122233', lesson: 'גיאוגרפיה', price: 105, isPayed: true },
    { name: 'עדי', family: 'שרון', phone: '053-4455667', idNumber: '300987654', lesson: 'תנ\"ך', price: 110, isPayed: true },
    { name: 'רועי', family: 'שמואלי', phone: '052-5566778', idNumber: '312398765', lesson: 'אנגלית', price: 120, isPayed: false },
    { name: 'גלית', family: 'עמר', phone: '050-6677889', idNumber: '298712345', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'אורית', family: 'סבן', phone: '054-7788990', idNumber: '301234567', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דנה', family: 'אוחנה', phone: '053-8899001', idNumber: '312456780', lesson: 'כימיה', price: 125, isPayed: false },
    { name: 'איתי', family: 'גולן', phone: '052-9900112', idNumber: '204567892', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'שחר', family: 'מלכה', phone: '055-1122334', idNumber: '315987247', lesson: 'ספרות', price: 115, isPayed: true },
    { name: 'נועה', family: 'לוי', phone: '052-3456789', idNumber: '312456789', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דוד', family: 'כהן', phone: '054-9876543', idNumber: '204567891', lesson: 'אנגלית', price: 110, isPayed: false },
    { name: 'רוני', family: 'מזרחי', phone: '050-1122334', idNumber: '315987246', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'שירה', family: 'פרץ', phone: '053-5566778', idNumber: '298765432', lesson: 'כימיה', price: 125, isPayed: true },
    { name: 'אורי', family: 'בן דוד', phone: '052-9988776', idNumber: '301245678', lesson: 'היסטוריה', price: 100, isPayed: false },
    { name: 'מאיה', family: 'אלון', phone: '055-6677889', idNumber: '312409876', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'יוסי', family: 'ביטון', phone: '050-2233445', idNumber: '209876543', lesson: 'ספרות', price: 115, isPayed: false },
    { name: 'טל', family: 'ברק', phone: '054-3344556', idNumber: '311122233', lesson: 'גיאוגרפיה', price: 105, isPayed: true },
    { name: 'עדי', family: 'שרון', phone: '053-4455667', idNumber: '300987654', lesson: 'תנ\"ך', price: 110, isPayed: true },
    { name: 'רועי', family: 'שמואלי', phone: '052-5566778', idNumber: '312398765', lesson: 'אנגלית', price: 120, isPayed: false },
    { name: 'גלית', family: 'עמר', phone: '050-6677889', idNumber: '298712345', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'אורית', family: 'סבן', phone: '054-7788990', idNumber: '301234567', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דנה', family: 'אוחנה', phone: '053-8899001', idNumber: '312456780', lesson: 'כימיה', price: 125, isPayed: false },
    { name: 'איתי', family: 'גולן', phone: '052-9900112', idNumber: '204567892', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'שחר', family: 'מלכה', phone: '055-1122334', idNumber: '315987247', lesson: 'ספרות', price: 115, isPayed: true },
    { name: 'נועה', family: 'לוי', phone: '052-3456789', idNumber: '312456789', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דוד', family: 'כהן', phone: '054-9876543', idNumber: '204567891', lesson: 'אנגלית', price: 110, isPayed: false },
    { name: 'רוני', family: 'מזרחי', phone: '050-1122334', idNumber: '315987246', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'שירה', family: 'פרץ', phone: '053-5566778', idNumber: '298765432', lesson: 'כימיה', price: 125, isPayed: true },
    { name: 'אורי', family: 'בן דוד', phone: '052-9988776', idNumber: '301245678', lesson: 'היסטוריה', price: 100, isPayed: false },
    { name: 'מאיה', family: 'אלון', phone: '055-6677889', idNumber: '312409876', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'יוסי', family: 'ביטון', phone: '050-2233445', idNumber: '209876543', lesson: 'ספרות', price: 115, isPayed: false },
    { name: 'טל', family: 'ברק', phone: '054-3344556', idNumber: '311122233', lesson: 'גיאוגרפיה', price: 105, isPayed: true },
    { name: 'עדי', family: 'שרון', phone: '053-4455667', idNumber: '300987654', lesson: 'תנ\"ך', price: 110, isPayed: true },
    { name: 'רועי', family: 'שמואלי', phone: '052-5566778', idNumber: '312398765', lesson: 'אנגלית', price: 120, isPayed: false },
    { name: 'גלית', family: 'עמר', phone: '050-6677889', idNumber: '298712345', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'אורית', family: 'סבן', phone: '054-7788990', idNumber: '301234567', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דנה', family: 'אוחנה', phone: '053-8899001', idNumber: '312456780', lesson: 'כימיה', price: 125, isPayed: false },
    { name: 'איתי', family: 'גולן', phone: '052-9900112', idNumber: '204567892', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'שחר', family: 'מלכה', phone: '055-1122334', idNumber: '315987247', lesson: 'ספרות', price: 115, isPayed: true },
    { name: 'נועה', family: 'לוי', phone: '052-3456789', idNumber: '312456789', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דוד', family: 'כהן', phone: '054-9876543', idNumber: '204567891', lesson: 'אנגלית', price: 110, isPayed: false },
    { name: 'רוני', family: 'מזרחי', phone: '050-1122334', idNumber: '315987246', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'שירה', family: 'פרץ', phone: '053-5566778', idNumber: '298765432', lesson: 'כימיה', price: 125, isPayed: true },
    { name: 'אורי', family: 'בן דוד', phone: '052-9988776', idNumber: '301245678', lesson: 'היסטוריה', price: 100, isPayed: false },
    { name: 'מאיה', family: 'אלון', phone: '055-6677889', idNumber: '312409876', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'יוסי', family: 'ביטון', phone: '050-2233445', idNumber: '209876543', lesson: 'ספרות', price: 115, isPayed: false },
    { name: 'טל', family: 'ברק', phone: '054-3344556', idNumber: '311122233', lesson: 'גיאוגרפיה', price: 105, isPayed: true },
    { name: 'עדי', family: 'שרון', phone: '053-4455667', idNumber: '300987654', lesson: 'תנ\"ך', price: 110, isPayed: true },
    { name: 'רועי', family: 'שמואלי', phone: '052-5566778', idNumber: '312398765', lesson: 'אנגלית', price: 120, isPayed: false },
    { name: 'גלית', family: 'עמר', phone: '050-6677889', idNumber: '298712345', lesson: 'פיזיקה', price: 130, isPayed: true },
    { name: 'אורית', family: 'סבן', phone: '054-7788990', idNumber: '301234567', lesson: 'מתמטיקה', price: 120, isPayed: true },
    { name: 'דנה', family: 'אוחנה', phone: '053-8899001', idNumber: '312456780', lesson: 'כימיה', price: 125, isPayed: false },
    { name: 'איתי', family: 'גולן', phone: '052-9900112', idNumber: '204567892', lesson: 'ביולוגיה', price: 140, isPayed: true },
    { name: 'שחר', family: 'מלכה', phone: '055-1122334', idNumber: '315987247', lesson: 'ספרות', price: 115, isPayed: true }
  ]
}
