import { RowID, RowElement } from './interface';

// Type declarations for each CRUD function
export function insertRow(row: RowElement): RowID;
export function deleteRow(rowId: RowID): void;
export function updateRow(rowId: RowID, row: RowElement): RowID;
