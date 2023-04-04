export interface Employees {
  codigo: string;
  nome: string;
  email: string;
}

export type EmployeesTable = Omit<Employees, "codigo"> & {
  id: string;
};
