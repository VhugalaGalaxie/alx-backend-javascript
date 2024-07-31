/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";

const row: RowElement = {
  firstName: 'Aneaho',
  lastName: 'Arehone',
};
const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = { firstName: 'Aneaho', lastName: 'Arehone', age: 25 };
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);

const obj = {firstName: 'Aneaho', lastName: 'Arehone'};
CRUD.insertRow(obj);

const updatedRow: RowElement = { firstName: 'Aneaho', lastName: 'Arehone',  age: 25 };
CRUD.updateRow(newRowID, updatedRow);

CRUD.deleteRow(125);
